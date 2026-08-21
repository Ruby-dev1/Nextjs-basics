import { IProduct } from "./product.types"
import { TUser } from "./user.types"

export type Tcart = {
  _id: string;
  product: IProduct;
  quantity: number;
};