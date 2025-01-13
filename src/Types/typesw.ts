import { IoDuplicate } from "react-icons/io5";

export type Navabritemstype = {
  id: number;
  title: string;
  link: string;
}[];

export default interface Queryparams {
  search?: string;
  page?: string;
}
export interface FormState {
  title: string;
  price: string;
  description: string;
  url: string;
  figure: {
    caseColor: "black" | "gray" | "blue";
    dialColor: "orange" | "green-to-voilt" | "blue-to-violt" | "gray";
    dialDeisign: "love" | "vector-vile" | "urban-eagle" | "rising-high";
  };
  images: string | null;
  off: string;
  details: {};
  [key: string]: any;
  status: "idle" | "loading" | "succeeded" | "failed";
  message: null | string;
  error: null | string;
}
export interface ProductState {
  data: any;
  status: "idle" | "loading" | "succeeded" | "failed";
  curentpage: number;
  total: number;
}
export interface FliterState {
  search: string;
  products: "watches" | "Straps";
  price: any;
  caseColor: "" | "black" | "gray" | "blue";
  Color: "" | "orange" | "green-to-voilt" | "blue-to-violt" | "gray";
}

export interface ProductData {
  _id: string;
  title: string;
  description: string;
  price: string;
  url: string;
  images: string;
  details: [{string:string}];
  off: string;
  addAt: Date;
  __v: number;
}
export type ProductfetchType = {
  data: ProductData
};

export interface BasketData{
  _id: string;
  strap:string
  title: string;
  amount: number;
  isOreder:boolean;
  price: number;
  url: string;
  off: number;
  addAt: Date;
  __v: number;
}