"use client"
import React from 'react'
import Lottie from "lottie-react";
import circleAnimation from "../../../public/lotties/CircleAnimation.json";

const CicleAnimation = ({ text }: any) => {
    return (
        <div className=' relative  w-72 max-sm:w-62 flex items-center justify-center'>
            <h2 className=" absolute w-fit text-4xl max-sm:text-2xl font-extrabold text-gray-900">
                {text}

            </h2>


            <Lottie animationData={circleAnimation} loop={true} autoplay={true} />

        </div>
    )
}

export default CicleAnimation