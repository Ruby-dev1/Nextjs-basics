import { Image } from "./global.types";
export type TUser={
    
        _id:string,
        createdAt:string,
        updatedAt:string,
        full_name:string,
        email:string,
        profile_image?:Image;
    
}