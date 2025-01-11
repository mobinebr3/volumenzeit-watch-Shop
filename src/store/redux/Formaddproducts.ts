import api from "@/server/papi";
import { FormState } from "@/Types/typesw";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: FormState = {
  title: "",
  price: "",
  description: "",
  url: '',
  images: "",
  off: "",
  figure: {
    caseColor: "black",
    dialColor: "orange",
    dialDeisign: "vector-vile",
  },
  details: {},
  status: "idle",
  message: null,
  error: null,
};

export const submitData = createAsyncThunk(
  "form/submitData",
  async (Formdata: { [key: string]: any }, thunkAPI) => {
    try {
      console.log(Formdata);
      const response = await api.post("/api/account/admin", Formdata);

      return thunkAPI.fulfillWithValue(response.data);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.respons?.data.error || " Error submiting data"
      );
    }
  }
);

const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateField: (
      state,
      action: PayloadAction<{ field: string; value: any }>
    ) => {
      const { field, value } = action.payload;

      state[field] = value;
    },

    restform: (state) => {
      state = initialState
    },
  },
  extraReducers: (bulider) => {
    bulider
      .addCase(submitData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(submitData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.message = action.payload.message;
      })
      .addCase(submitData.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});
export const { updateField, restform } = ProductsSlice.actions;

export default ProductsSlice.reducer;
