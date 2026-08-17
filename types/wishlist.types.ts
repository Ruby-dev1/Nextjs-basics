
import { Image } from "./global.types";
import { IProduct } from "./product.types";
import { TUser } from "./user.types";

export type TWishlist={
    products:IProduct[],
    user:TUser
}

