"use client"
import WithAuth from '@/hoc/withAuth.hoc'
import { All_Admins, User_Only } from '@/types/enum.types'
import React from 'react'

const CartPage = () => {
  return (
    <div>CartPage</div>
  )
}


const PrivateCart = WithAuth(CartPage, User_Only)
export default PrivateCart