"use client"
import Marquee from "react-fast-marquee";
import { navData } from '@/data/navData'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Menu, X, } from 'lucide-react';

const items = [
    "🌱 ১০০% খাঁটি ও অর্গানিক পণ্যের নিশ্চয়তা",
    "🥦 প্রকৃতির স্পর্শে বিশুদ্ধ অর্গানিক খাবার",
    "🍯 রাসায়নিকমুক্ত, স্বাস্থ্যকর ও নিরাপদ পণ্য",
    "🌾 খাঁটি ও অর্গানিক পণ্যে বিশ্বাসের প্রতিশ্রুতি",
    "🛒 অর্ডার করুন ঘরে বসে, পান প্রকৃতির আসল স্বাদ",
    "💚 আপনার পরিবারের জন্য নির্ভরযোগ্য অর্গানিক সমাধান",
    "🎉 বিশেষ ছাড় চলছে – এখনই অর্ডার করুন!",
    "🚚 বাংলাদেশের যেকোনো স্থানে দ্রুত ডেলিভারি",
];
const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const controlNavbar = () => {
            if (window.scrollY > lastScrollY) {
                setShowNavbar(false);
            } else {
                setShowNavbar(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", controlNavbar);

        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, [lastScrollY]);

    return (
        <nav
            className={` ${lastScrollY !== 0 && "fixed top-0 left-0"}  z-50 w-full bg-white border-b border-b-slate-300 transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"
                }`}
            aria-label="Main navigation"
        >
            <div className="theme_background">
                <Marquee className="py-3">
                    {items.map((text, i) => (
                        <div
                            key={i}
                            className="mx-8 whitespace-nowrap text-sm md:text-base lg:text-lg font-semibold text-white"
                        >
                            {text}
                        </div>
                    ))}
                </Marquee>
            </div>


            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center ">
                        <div

                            className="w-20 h-20 "
                        >
                            <Image src={"https://res.cloudinary.com/dqpyp8ii2/image/upload/v1758035793/Nature_Life_Logo-01-01_cl15ho.png"} alt='logo' width={500} height={500} />

                        </div>
                        <div className="">
                            <h1 className="text-2xl font-bold theme_text">
                                ন্যাচার লাইফ
                            </h1>
                        </div>
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

                            className="w-full  bg-gradient-to-r from-[#43b51a] to-[#3a861f] text-white px-6 py-3 rounded-full font-semibold"
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