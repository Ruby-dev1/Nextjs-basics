import React from "react";
import { getProductById } from "@/api/product.api";
import { TbCurrencyRupeeNepalese } from "react-icons/tb";
import Image from "next/image";
import Button from "@/components/common/button";
interface Iprops {
  params: Promise<{
    id: string;
  }>;
}

const ProductDetailPage = async ({ params }: Iprops) => {
  const { id } = await params;
  const product = await getProductById(id);
  const productData = product?.data;

  return (
    <section className= "px-10 py-10">
      <div className=" grid grid-cols-2 gap-10 ">
        {/* left Images */}
        <div>

          {/* Cover_Image */}

          <div className = "h-125 w-125 overflow-hidden rounded-lg" >
            <Image
              src={productData?.cover_image.path}
              alt={productData?.name}
              width={500}
              height={500}
               className=" h-full  w-full  object-cover"
            />
          </div>

          {/* Additional Images */}

          <div  className="mt-4 flex gap-3">
            {productData?.images?.map(
              (image: { path: string; public_id: string }) => (
                <div key={image.public_id}
                 className="h-26 w-26 overflow-hidden  rounded-lg">
                  <Image
                    src={image.path}
                    alt={productData?.name}
                    width={100}
                    height={100}
                     className="h-full w-full object-cover"
                  />
                </div>
              ),
            )}
          </div>
        </div>


        {/* RIGHT - PRODUCT INFORMATION */}
        <div className="flex flex-col justify-start pt-8">

          <h1 className="text-2xl font-semibold">
            {productData?.name}
          </h1>

          <p className="mt-3 flex items-center text-xl font-semibold">
            <TbCurrencyRupeeNepalese/> {productData?.price}
          </p>

          <p className="mt-5 leading-6 text-gray-600">
            {productData?.description}
          </p>

          {/* Actions */}
          <div className="mt-8 flex gap-4">

            <button className="rounded-md bg-primary px-6 py-3 text-white">
              Add to Cart
            </button>

            <button className="rounded-md border border-primary px-6 py-3">
              ♡ Add to Wishlist
            </button>

          </div>

          {/* Product Details */}

          <div className="mt-10 ">
            <h2 className= "text-xl font-semibold "> Product Details</h2>

            <div className="mt-4 text-sm space-y-2  font-medium ">
                <p> <span>Brand:</span> {"  "}{productData?.brand?.name}</p>

                <p><span>Category:</span> {" "}{productData?.category?.name}</p>

            </div>


          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductDetailPage;
