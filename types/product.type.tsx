import { orderType } from "./order.type";

export type productDataType = {
  _id: string;
  title: string;
  category: string;
  images: string[];
  description: string;
  price: number;
  rating: number;
  odrer: orderType[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};
