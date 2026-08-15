import { IProduct } from "./product.types"
import { TUser } from "./user.types"

export type Tcart = {
    productId:IProduct,
    quantity:number,
    user:TUser,
}