import api from "@/server/papi";
import { ProductState } from "@/Types/typesw";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: ProductState = {
  data: [],
  status: "idle",
  curentpage: 1,
  total: 0,
};

export const GetProducts = createAsyncThunk(
  "products/getproducts",
  async (state, thunkAPI) => {
    try {
      const res = await api.get("/api/products");

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error || " Error submiting data");
    }
  }
);

const getProductsSlice = createSlice({
  name: "getPorducts",
  initialState,
  reducers: {
    changePage(state, action) {
      state.curentpage = action.payload;
    },
    setTotal(state, action) {
      state.total = state.total = Math.ceil(+(action.payload?.length / 9));
    
      state.curentpage = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(GetProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
        state.total = Math.ceil(+(action.payload.data.length / 9));
      })
      .addCase(GetProducts.rejected, (state) => {
        state.status = "failed";
      });
  },
});
export const { changePage, setTotal } = getProductsSlice.actions;
export default getProductsSlice.reducer;
