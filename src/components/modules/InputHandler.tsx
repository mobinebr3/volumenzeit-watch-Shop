"use client";

import {  updateField } from "@/store/redux/Formaddproducts";
import { detailsSeelect } from "@/utils/Items";
import { Select, SelectItem, Input } from "@nextui-org/react";

import {  useState } from "react";
import { useDispatch } from "react-redux";

function InputHandler() {
  const dispatch = useDispatch();
  const [selectVal, SetSelectval] = useState("");
  const [FormDAta, setFormData] = useState({});
  const addHandler = (e: any) => {
    e.preventDefault();
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    dispatch(updateField({ field: "details", value: FormDAta }));
  };

  return (
    <div>
      <div className="text-nowrap  ">
        <Select
          className="max-w-xs"
          label="Details:"
          placeholder="Select an detail"
          selectionMode="multiple"
          value={selectVal}
          onChange={(e: any) => SetSelectval(e.target.value)}
        >
          {detailsSeelect.map((item) => (
            <SelectItem key={item.key}>{item.label}</SelectItem>
          ))}
        </Select>
      </div>
      {
        <div className="mt-10">
          <form onChange={addHandler} className="*:my-10">
            {selectVal &&
              selectVal
                .split(",")
                .map((i, index) => (
                  <Input
                    key={index}
                    variant="bordered"
                    labelPlacement="inside"
                    name={i}
                    label={`${i} :`}
                  />
                ))}
          </form>
        </div>
      }
    </div>
  );
}

export default InputHandler;
