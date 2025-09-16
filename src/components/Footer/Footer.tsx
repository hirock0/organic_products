import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer

                className="bg-gray-900 text-white py-16"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <div

                                    className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-700 rounded-full flex items-center justify-center"
                                >
                                    <Image src={"https://res.cloudinary.com/dqpyp8ii2/image/upload/v1758035793/Nature_Life_Logo-01-01_cl15ho.png"} alt='logo' width={500} height={500} />
                                </div>
                                <span className="text-2xl font-bold">Natural Life</span>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                সুস্থ জীবনধারা এবং টেকসই ভবিষ্যতের জন্য প্রিমিয়াম অর্গানিক পণ্য সরবরাহ করছে।
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold">পণ্যসমূহ</h4>
                            <div className="space-y-2">
                                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                                    শাকসবজি
                                </a>
                                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                                    ফলমূল
                                </a>
                                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                                    শস্য
                                </a>
                                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                                    হার্বস
                                </a>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold">কোম্পানি</h4>
                            <div className="space-y-2">
                                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                                    আমাদের সম্পর্কে
                                </a>
                                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                                    আমাদের খামার
                                </a>
                                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                                    সনদপত্র
                                </a>
                                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                                    টেকসইতা
                                </a>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold">সাপোর্ট</h4>
                            <div className="space-y-2">
                                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                                    হেল্প সেন্টার
                                </a>
                                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                                    শিপিং তথ্য
                                </a>
                                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                                    রিটার্ন
                                </a>
                                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                                    যোগাযোগ
                                </a>
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