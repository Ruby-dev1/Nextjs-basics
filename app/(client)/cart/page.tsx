"use client"
import WithAuth from '@/hoc/withAuth.hoc'
import { All_Admins, User_Only } from '@/types/enum.types'
import React from 'react'

import { useCart } from '@/hooks/cart.hooks'



const CartPage = () => {
  const {
    cart,
    isLoading,
    removeProductFromCart,
    updateCart,
  } = useCart();

  if (isLoading) {
    return <p>Loading cart...</p>;
  }

  if (!cart || cart.length === 0) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-semibold">
          Your cart is empty
        </h2>

        <p className="mt-2 text-gray-500">
          Add some products to your cart.
        </p>
      </div>
    );
  }
  console.log("🛒 FIRST CART ITEM:", cart?.[0]);

  return (
  <section className="min-h-screen bg-pink-50/30 p-6">
    <div className="mx-auto max-w-6xl">

      {/* Heading */}
      <h1 className="mb-6 text-2xl font-semibold text-gray-800">
        My Cart
      </h1>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

        {/* Cart Items */}
        <div className="space-y-4 lg:col-span-2">

          {cart.map((item) => (
            <div
              key={item.product._id}
              className="flex items-center gap-4 rounded-xl border border-pink-100 bg-white p-4 shadow-sm"
            >

              {/* Product Image */}
              <img
                src={item.product.cover_image?.path}
                alt={item.product.name}
                className="h-24 w-24 rounded-lg object-cover"
              />

              {/* Product Information */}
              <div className="flex-1">

                <h2 className="font-semibold text-gray-800">
                  {item.product.name}
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Rs. {item.product.price}
                </p>

                {/* Quantity */}
                <div className="mt-3 flex items-center gap-3">
<button
  onClick={() => {
    if (item.quantity > 1) {
      updateCart({
        productId: item.product._id,
        quantity: item.quantity - 1,
      });
    } else {
      removeProductFromCart(item.product._id);
    }
  }}
   className="flex h-8 w-8 items-center justify-center rounded-md shadow hover:bg-pink-50 disabled:cursor-not-allowed disabled:opacity-40"
                  
>
  -
</button>

<span>{item.quantity}</span>

<button
  onClick={() => {
    updateCart({
      productId: item.product._id,
      quantity: item.quantity + 1,
    });
  }}
   className="flex h-8 w-8 items-center justify-center rounded-md shadow hover:bg-pink-50 disabled:cursor-not-allowed disabled:opacity-40"
                  
>
  +
</button>

                </div>
              </div>

              {/* Remove */}
              <button
                onClick={() =>
                  removeProductFromCart(item.product._id)
                }
                className="text-sm text-red-500 hover:text-red-600"
              >
                Remove
              </button>

            </div>
          ))}

        </div>

        {/* Order Summary */}
        <div className="h-fit rounded-xl border border-pink-100 bg-white p-5 shadow-sm">

          <h2 className="mb-5 text-lg font-semibold text-gray-800">
            Order Summary
          </h2>

          <div className="flex justify-between text-sm text-gray-600">
            <span>Subtotal</span>

            <span>
              Rs.{" "}
              {cart.reduce(
                (total, item) =>
                  total +
                  item.product.price * item.quantity,
                0
              )}
            </span>
          </div>

          <div className="my-4 border-t border-gray-100" />

          <div className="flex justify-between font-semibold text-gray-800">
            <span>Total</span>

            <span>
              Rs.{" "}
              {cart.reduce(
                (total, item) =>
                  total +
                  item.product.price * item.quantity,
                0
              )}
            </span>
          </div>

          <button className="mt-6 w-full rounded-lg bg-primary py-3 text-sm font-medium text-white hover:opacity-90">
            Proceed to Checkout
          </button>

        </div>

      </div>
    </div>
  </section>
);
};







const PrivateCart = WithAuth(CartPage, User_Only)
export default PrivateCart