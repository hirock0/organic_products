"use client"
import { navData } from '@/data/navData'
import Image from 'next/image'
import React, { useState } from 'react'
import {  Menu, X, } from 'lucide-react';
const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    return (
        <nav
            className={` sticky top-0 z-50 bg-white border-b-1 border-b-slate-300  w-full  transition-all `}
            aria-label="Main navigation"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center space-x-3">
                        <div

                            className="w-20 h-20 rounded-full flex items-center justify-center"
                        >
                            <Image src={"https://res.cloudinary.com/dqpyp8ii2/image/upload/v1758035793/Nature_Life_Logo-01-01_cl15ho.png"} alt='logo' width={500} height={500} />
               
                        </div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                            ন্যাচারাল লাইফ
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-10">
                        {
                            navData?.map((itm, idx) =>

                                <a key={idx} href={`${itm?.link}`} className="block text-gray-800 hover:text-green-600 font-medium">
                                    {itm?.title}
                                </a>
                            )
                        }

                        <button
                            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full font-semibold"
                        >
                            এখনই কিনুন
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    >
                        {isMenuOpen ? <X className="w-7 h-7 text-gray-800" /> : <Menu className="w-7 h-7 text-gray-800" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div

                    className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200"
                >
                    <div className="px-4 py-6 space-y-4">
                        {
                            navData?.map((itm, idx) =>

                                <a key={idx} href={`${itm?.link}`} className="block text-gray-800 hover:text-green-600 font-medium">
                                    {itm?.title}
                                </a>
                            )
                        }


                        <button

                            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full font-semibold"
                        >
                            এখনই কিনুন
                        </button>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default NavBar