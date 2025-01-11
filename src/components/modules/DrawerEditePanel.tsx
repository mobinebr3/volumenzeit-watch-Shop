import { GetProducts } from "@/store/redux/products";

import Image from "next/image";

import { CiEdit } from "react-icons/ci";
import {
  Button,

  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Input,
  Textarea,
  useDisclosure,
} from "@nextui-org/react";

import InputHandler from "./InputHandler";
import { toast, ToastContainer } from "react-toastify";
import { updateField } from "@/store/redux/Formaddproducts";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { useEffect, useState } from "react";
import api from "@/server/papi";
import DeleteBuuton from "../elements/DeleteBuuton";
import { FliterState } from "@/Types/typesw";

function DrawerEditePanel({ data }: any) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { _id } = data;
    const [select, setSelect] = useState<FliterState>({
      search: "",
      products: "watches",
      price: [0, 3000],
      caseColor: "",
      Color: "",
    })
  const dispatch = useDispatch<AppDispatch>();
  const handelingInputChangs = (field: string, value: any) => {
    dispatch(updateField({ field, value }));
  };

  useEffect(() => {
    Object.entries(data).map((i) => {
      dispatch(updateField({ field: i[0], value: i[1] }));
    });
  }, [isOpen]);
  const [isShow, setShow] = useState(false);
  const Form = useSelector((state: RootState) => state.form);
  const dataSubmitHandler = async () => {
    const statuss = await api.patch(`/api/account/admin/${_id}`, Form);
    if (statuss.status === 201) {
      toast.success(statuss.data.message);
      dispatch(GetProducts());
    } else {
      toast.error(statuss.data.error);
    }
  };
  const changeHandler = (e: React.FormEvent<HTMLUListElement>) => {
    handelingInputChangs("url", e.currentTarget.id);
  };
  return (
    <>
      <h2 className="text-green-600 flex  items-center " onClick={onOpen}>
        {" "}
        <CiEdit /> Edit
      </h2>
      <DeleteBuuton dispatch={dispatch} _id={_id} />
      <Drawer
        backdrop={"opaque"}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="bottom"
        size="2xl"
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">
                Edite product
              </DrawerHeader>
              <DrawerBody>
                <div>
                  <div className=" px-5 *:mb-5">
                    <Input
                      variant="bordered"
                      label="title : "
                      labelPlacement="inside"
                      name="title"
                      placeholder="Enter title"
                      type="text"
                      value={Form.title}
                      onChange={(e: any) =>
                        handelingInputChangs("title", e.target.value)
                      }
                    />
                    <Textarea
                      variant="bordered"
                      labelPlacement="inside"
                      label="description : "
                      classNames={{
                        base: "max-w-xs",
                        input: "resize min-h-[40px]",
                      }}
                      name="description"
                      placeholder="Enter description"
                      type="text"
                      value={Form.description}
                      onChange={(e: any) =>
                        handelingInputChangs("description", e.target.value)
                      }
                    />
                    <Input
                      variant="bordered"
                      label="price : "
                      labelPlacement="inside"
                      name="price"
                      placeholder="Enter price"
                      type="number"
                      value={Form.price}
                      onChange={(e: any) =>
                        handelingInputChangs("price", e.target.value)
                      }
                    />

                    <Input
                      variant="bordered"
                      label="off : "
                      labelPlacement="inside"
                      name="off"
                      placeholder="Enter off"
                      type="number"
                      value={Form.off}
                      onChange={(e: any) =>
                        handelingInputChangs("off", e.target.value)
                      }
                    />
                     <div>
        <p>filter by color</p>
        <ul className="flex *:mr-1 mt-5 w-[190]">
          <li
            className={` size-8 rounded-lg bg-[#D39138] from-[#D39138] from-30% bg-gradient-to-bl to-[#B95371]  ${
              select.Color === "orange" ? "outline" : ""
            } `}
            onClick={() => {
              setSelect({ ...select, Color: "orange" });
            }}
          ></li>
          <li
            className={` size-8 rounded-lg bg-[#2D9B87] from-[#2D9B87] from-30% bg-gradient-to-bl to-[#AF29CB]  ${
              select.Color === "green-to-voilt" ? "outline" : ""
            } `}
            onClick={() => {
              setSelect({ ...select, Color: "green-to-voilt" });
            }}
          ></li>
          <li
            className={` size-8 rounded-lg bg-[#2184CE] from-[#2184CE] from-30% bg-gradient-to-bl to-[#9020AD]  ${
              select.Color === "blue-to-violt" ? "outline" : ""
            } `}
            onClick={() => {
              setSelect({ ...select, Color: "blue-to-violt" });
            }}
          ></li>
          <li
            className={` size-8 rounded-lg bg-[#707885] from-[#707885] from-30% bg-gradient-to-bl to-[#363636]  ${
              select.Color === "gray" ? "outline" : ""
            } `}
            onClick={() => {
              setSelect({ ...select, Color: "gray" });
            }}
          ></li>{" "}
          <li
            className=" size-8 rounded-lg  bg-slate-400  "
            onClick={() => {
              setSelect({ ...select, Color: "" });
            }}
          ></li>{" "}
        </ul>
      </div>
                      <div>
        <p>case color</p>
        <ul className="flex *:mr-1 mt-5">
          <li
            className={`size-8 rounded-lg bg-[#55555] from-[#555555] from-30% bg-gradient-to-bl to-[#0A0A0A] ${
              select.caseColor === "black" ? "outline" : ""
            }`}
            onClick={() => {
              setSelect({ ...select, caseColor: "black" });
            }}
          ></li>
          <li
            className={` size-8 rounded-lg bg-[#E3E3E3] from-[#E3E3E3] from-30% bg-gradient-to-bl to-[#7B838F] ${
              select.caseColor === "blue" ? "outline" : ""
            }`}
            onClick={() => {
              setSelect({ ...select, caseColor: "blue" });
            }}
          ></li>
          <li
            className={` size-8 rounded-lg bg-[#58B2CE] from-[#58B2CE] from-30% bg-gradient-to-bl to-[#023C96] ${
              select.caseColor === "gray" ? "outline" : ""
            }`}
            onClick={() => {
              setSelect({ ...select, caseColor: "gray" });
            }}
          ></li>
          <li
            className={` size-8 rounded-lg bg-slate-200 text-3xl `}
            onClick={() => {
              setSelect({ ...select, caseColor: "" });
            }}
          >
            X
          </li>
        </ul>
      </div>
                    <div>
                      <p>select Image</p>
                      <button onClick={() => setShow(!isShow)}></button>
                      <div className={`${isShow ? "hidden" : ""}`}>
                        <ul
                          className="flex flex-wrap *:mx-4 *:mt-5"
                          onChange={changeHandler}
                        >
                          <li id="UrbanEgale">
                            <Image
                              src="/watch/UrbanEgale"
                              alt="UrbanEgale"
                              width={254}
                              height={298}
                            />
                          </li>
                          <li id="VectorVile">
                            <Image
                              src="/watch/VectorVile"
                              alt="VectorVile"
                              width={254}
                              height={298}
                            />
                          </li>
                          <li id="love">
                            <Image
                              src="/watch/love"
                              alt="love"
                              width={254}
                              height={298}
                            />
                          </li>
                          <li id="RisinHigh">
                            <Image
                              src="/watch/RisinHigh"
                              alt="RisinHigh"
                              width={254}
                              height={298}
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <InputHandler />
                  </div>
                  <ToastContainer />
                </div>
              </DrawerBody>
              <DrawerFooter>
                <Button
                  color="danger"
                  className="  text-white px-10 py-7 hover:bg-white drop-shadow-2xl font-medium border-b-5  border-inherit  duration-250 ease-linear transition-shadow hover:rounded-sm hover:border-red-600 hover:text-black"
                  onPress={onClose}
                >
                  Close
                </Button>
                <Button
                  isLoading={status === "loading"}
                  isDisabled={status === "loading"}
                  onClick={dataSubmitHandler}
                  className="bg-purpuleColor  text-white px-10 py-7 hover:bg-white drop-shadow-2xl border-inherit  font-medium border-b-5  duration-250 ease-linear transition-shadow hover:rounded-sm hover:border-purpuleColor hover:text-purpuleColor"
                >
                  Edit
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerEditePanel;
