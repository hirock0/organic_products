"use client"
import Marquee from "react-fast-marquee";
import { navData } from '@/data/navData'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Menu, X, PhoneCall, MailPlus } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa6";
const items = [
    {
        icon: <PhoneCall className=" w-6 h-6" />,
        title: "+8801700554293",
        description: "অর্ডার করুন খাঁটি অর্গানিক পণ্য — এখনই কল করুন"
    },
    {
        icon: <FaWhatsapp className=" w-6 h-6" />,
        title: "+8801700554293",
        description: "স্বাস্থ্যকর জীবনের জন্য আজই যোগাযোগ করুন"
    },
    {
        icon: <MailPlus className=" w-6 h-6" />,
        title: "hirockdutta0@gmail.com",
        description: "রাসায়নিকমুক্ত অর্গানিক খাবার পেতে আমাদের সাথে থাকুন"
    }
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
            className={` ${lastScrollY > 100 && "fixed top-0 left-0"}  z-50 w-full bg-white border-b border-b-slate-300 transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"
                }`}
            aria-label="Main navigation"
        >
            <div className="theme_background">
                <Marquee className="py-3">
                    {items.map((item, i) => (
                        <div
                            key={i}
                            className=" flex items-center gap-3 mx-8 whitespace-nowrap text-sm md:text-base lg:text-lg font-semibold text-white"
                        >
                            <span>
                                {item?.icon}
                            </span>

                            <span>
                                {item?.title}
                            </span>
                            |

                            <span>
                                {item?.description}
                            </span>

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
                            className=" button_color text-white px-6 py-2 rounded-full font-semibold"
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