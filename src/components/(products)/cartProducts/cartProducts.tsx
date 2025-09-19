"use client";

import { AppDispatch, RootState } from "@/utils/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { addCartFlag } from "@/utils/redux/slices/slice";

const CartProducts = () => {
    const dispatch = useDispatch<AppDispatch>()
    const { carts, cartFlag } = useSelector((state: RootState) => state);

    useEffect(() => {
        window.addEventListener("click", () => {
            dispatch(addCartFlag(false))
        })
        return () => window.removeEventListener("click", () => {
            dispatch(addCartFlag(false))
        })
    }, [dispatch])
    return (
        <div onClick={(e) => e.stopPropagation()}>

            {/* Sidebar */}
            <AnimatePresence>
                {cartFlag && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        className="fixed top-0 z-50 right-0 h-full w-80 bg-white shadow-xl p-4 flex flex-col "
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center border-b pb-3">
                            <h2 className="text-lg font-bold">Your Cart</h2>
                            <button onClick={() => dispatch(addCartFlag(false))}>
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto mt-4 space-y-4">
                            {carts.length > 0 ? (
                                carts.map((item: any, idx: number) => (
                                    <div
                                        key={idx}
                                        className="flex items-center justify-between border-b pb-2"
                                    >
                                        <div>
                                            <h3 className="font-medium">{item.name}</h3>
                                            <p className="text-sm text-gray-500">
                                                {item.quantity} × ${item.price}
                                            </p>
                                        </div>
                                        <p className="font-semibold">
                                            ${item.quantity * item.price}
                                        </p>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500 text-center">Your cart is empty</p>
                            )}
                        </div>

                        {/* Footer */}
                        <div className="border-t pt-3">
                            <div className="flex justify-between font-bold text-lg">
                                <span>Total:</span>
                                <span>
                                    $
                                    {carts?.reduce(
                                        (acc: number, item: any) =>
                                            acc + item.price * item.quantity,
                                        0
                                    ) || 0}
                                </span>
                            </div>
                            <button className="w-full mt-3 theme_background text-white py-2 rounded-lg hover:bg-green-700 transition">
                                Checkout
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CartProducts;
