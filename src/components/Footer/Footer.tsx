import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
const Footer = () => {
    return (
        <div>
            <footer

                className=" text-black  bg-slate-100 py-16"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="space-y-4">
                            <div className=" flex items-center">
                                <div
                                    className="w-20 h-20 "
                                >
                                    <Image src={"https://res.cloudinary.com/dqpyp8ii2/image/upload/v1758035793/Nature_Life_Logo-01-01_cl15ho.png"} alt='logo' width={500} height={500} />
                                </div>

                                <h1 className="text-2xl mt-2 text-center font-bold text-[#43b51a]">
                                    ন্যাচার লাইফ
                                </h1>
                            </div>

                            <p className=" text-sm leading-relaxed">
                                সুস্থ জীবনধারা এবং টেকসই ভবিষ্যতের জন্য প্রিমিয়াম অর্গানিক পণ্য সরবরাহ করছে।
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold underline underline-offset-8 decoration-2">পণ্যসমূহ</h4>
                            <div className="space-y-2">
                                <Link href="#" className="block hover:text-[#43b51a] transition-colors text-sm">
                                    শাকসবজি
                                </Link>
                                <Link href="#" className="block hover:text-[#43b51a] transition-colors text-sm">
                                    ফলমূল
                                </Link>
                                <Link href="#" className="block hover:text-[#43b51a] transition-colors text-sm">
                                    শস্য
                                </Link>
                                <Link href="#" className="block hover:text-[#43b51a] transition-colors text-sm">
                                    হার্বস
                                </Link>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold underline underline-offset-8 decoration-2">কোম্পানি</h4>
                            <div className="space-y-2">
                                <Link href="#" className="block hover:text-[#43b51a] transition-colors text-sm">
                                    আমাদের সম্পর্কে
                                </Link>
                                <Link href="#" className="block hover:text-[#43b51a] transition-colors text-sm">
                                    আমাদের খামার
                                </Link>
                                <Link href="#" className="block hover:text-[#43b51a] transition-colors text-sm">
                                    সনদপত্র
                                </Link>
                                <Link href="#" className="block hover:text-[#43b51a] transition-colors text-sm">
                                    টেকসইতা
                                </Link>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold underline underline-offset-8 decoration-2">সাপোর্ট</h4>
                            <div className="space-y-2">
                                <Link href="#" className="block hover:text-[#43b51a] transition-colors text-sm">
                                    হেল্প সেন্টার
                                </Link>
                                <Link href="#" className="block hover:text-[#43b51a] transition-colors text-sm">
                                    শিপিং তথ্য
                                </Link>
                                <Link href="#" className="block hover:text-[#43b51a] transition-colors text-sm">
                                    রিটার্ন
                                </Link>
                                <Link href="#" className="block hover:text-[#43b51a] transition-colors text-sm">
                                    যোগাযোগ
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
                        <p>&copy; 2025 Natural Life। সর্বস্বত্ব সংরক্ষিত। 💚 সহ একটি সুস্থ বিশ্বের জন্য তৈরি।</p>
                    </div>
                </div>

            </footer>
        </div>
    )
}

export default Footer