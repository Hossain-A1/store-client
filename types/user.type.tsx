import { orderType } from "./order.type";

export type userType = {
  _id:string;
  name: string;
  email: string;
  password: string;
  photoUrl: string;
  address?: string;
  phoneNumber?: string;
  role: 'user' | 'admin';
  order: orderType[];
  createdAt:string;
  updatedAt:string;
  __v:number
}