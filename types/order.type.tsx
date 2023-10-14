import { productDataType } from "./product.type";

export type orderType = {
  _id: string;
  createdAt: string;
  updateAt: string;
  product: productDataType[];
  __v: number;
};
