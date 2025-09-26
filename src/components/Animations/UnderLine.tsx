
"use client"
import React from 'react'
import Lottie from "lottie-react";
import underLineAnimation from "../../../public/lotties/Underline.json";

const UnderLine = ({ text, className }: any) => {
    return (
        <div className=' relative flex flex-col justify-center items-center '>
            <div className=" relative">
                <h2 className={className}>
                    {text}
                </h2>
                <div className=" absolute right-0 left-0 top-0">
                    <Lottie
                    rendererSettings={{
                         className: "custom-lottie"
                    }}
                    animationData={underLineAnimation} loop={true} autoplay={true} />
                </div>
            </div>
        </div>
    )
}

export default UnderLine