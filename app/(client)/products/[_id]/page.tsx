import React from "react";
import { getProductById } from "@/api/product.api";
import { TbCurrencyRupeeNepalese } from "react-icons/tb";
import ProductActions from "./product-actions";
import ProductImageCarousel from "@/components/landing/product/imageCarousel";

interface Iprops {
  params: Promise<{
    _id: string;
  }>;
}

const ProductDetailPage = async ({ params }: Iprops) => {
  const { _id } = await params;

  const product = await getProductById(_id);
  const productData = product?.data;

  return (
    <section className="px-10 py-10">
      <div className="grid grid-cols-2 gap-10">

        {/* LEFT - PRODUCT IMAGES */}
        <div>
    <ProductImageCarousel
  images={[
    productData.cover_image,
    ...(productData.images ?? []),
  ]}
/>
        </div>

        {/* RIGHT - PRODUCT INFORMATION */}
        <div className="flex flex-col justify-start pt-8">

          <h1 className="text-2xl font-semibold">
            {productData?.name}
          </h1>

          <p className="mt-3 flex items-center text-xl font-semibold">
            <TbCurrencyRupeeNepalese />
            {productData?.price}
          </p>

          <p className="mt-5 leading-6 text-gray-600">
            {productData?.description}
          </p>

          {/* Actions */}
          <ProductActions productId={productData._id} />

          {/* Product Details */}
          <div className="mt-10">
            <h2 className="text-xl font-semibold">
              Product Details
            </h2>

            <div className="mt-4 space-y-2 text-sm font-medium">
              <p>
                <span>Brand:</span>{" "}
                {productData?.brand?.name}
              </p>

              <p>
                <span>Category:</span>{" "}
                {productData?.category?.name}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductDetailPage;