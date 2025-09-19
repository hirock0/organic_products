"use client"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "@/utils/redux/store"
import { addCart } from "@/utils/redux/slices/slice"
import { toast } from "react-toastify"

const AddCart: React.FC<any> = ({ product }: any) => {
  const dispatch = useDispatch<AppDispatch>()
  const { carts } = useSelector((state: RootState) => state)
  const cartHandler = () => {
    const uniqueProduct = carts.some((item: any) => item?.name === product?.name)
    if (!uniqueProduct) {
      dispatch(addCart(product))
      toast.success("Product add to cart")
    } else {
      toast.warn("You have already selected")
    }
  }
  return (
    <button
      onClick={cartHandler}
      className="w-full button_color text-white py-3 rounded-full font-semibold"
    >
      Add to Cart
    </button>
  )
}

export default AddCart
