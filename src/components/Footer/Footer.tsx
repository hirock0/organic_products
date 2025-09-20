import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
      <footer className="text-black bg-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-20 h-20">
                  <Image
                    src={
                      'https://res.cloudinary.com/dqpyp8ii2/image/upload/v1758035793/Nature_Life_Logo-01-01_cl15ho.png'
                    }
                    alt="logo"
                    width={500}
                    height={500}
                  />
                </div>

                <h1 className="text-2xl mt-2 text-center font-bold text-[#43b51a]">
                  ন্যাচার লাইফ
                </h1>
              </div>

              <p className="leading-relaxed text-sm">
                আমরা ১০০% খাঁটি অর্গানিক ও প্রাকৃতিক{" "}
                <span className="font-semibold">ওজন বাড়ানোর পণ্য</span> সরবরাহ
                করি। সুস্থ ও প্রাকৃতিক উপায়ে ওজন বৃদ্ধি করুন — কোনো রাসায়নিক
                ছাড়াই।
              </p>
            </div>

            {/* Products */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold underline underline-offset-8 decoration-2">
                আমাদের পণ্য
              </h4>
              <div className="space-y-2">
                <Link
                  href="#"
                  className="block hover:text-[#43b51a] transition-colors text-sm"
                >
                  ওজন বাড়ানোর মিল্ক পাউডার
                </Link>
                <Link
                  href="#"
                  className="block hover:text-[#43b51a] transition-colors text-sm"
                >
                  হার্বাল ওজন বাড়ানোর প্যাকেজ
                </Link>
                <Link
                  href="#"
                  className="block hover:text-[#43b51a] transition-colors text-sm"
                >
                  প্রোটিন সমৃদ্ধ বাদাম
                </Link>
                <Link
                  href="#"
                  className="block hover:text-[#43b51a] transition-colors text-sm"
                >
                  অর্গানিক স্মুদি মিক্স
                </Link>
              </div>
            </div>

            {/* Company Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold underline underline-offset-8 decoration-2">
                কোম্পানি
              </h4>
              <div className="space-y-2">
                <Link
                  href="#"
                  className="block hover:text-[#43b51a] transition-colors text-sm"
                >
                  আমাদের সম্পর্কে
                </Link>
                <Link
                  href="#"
                  className="block hover:text-[#43b51a] transition-colors text-sm"
                >
                  গুণগত মান
                </Link>
                <Link
                  href="#"
                  className="block hover:text-[#43b51a] transition-colors text-sm"
                >
                  গ্রাহক অভিজ্ঞতা
                </Link>
                <Link
                  href="#"
                  className="block hover:text-[#43b51a] transition-colors text-sm"
                >
                  ব্লগ ও পরামর্শ
                </Link>
              </div>
            </div>

            {/* Support */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold underline underline-offset-8 decoration-2">
                সাপোর্ট
              </h4>
              <div className="space-y-2">
                <Link
                  href="#"
                  className="block hover:text-[#43b51a] transition-colors text-sm"
                >
                  অর্ডার ট্র্যাক করুন
                </Link>
                <Link
                  href="#"
                  className="block hover:text-[#43b51a] transition-colors text-sm"
                >
                  শিপিং তথ্য
                </Link>
                <Link
                  href="#"
                  className="block hover:text-[#43b51a] transition-colors text-sm"
                >
                  রিটার্ন নীতি
                </Link>
                <Link
                  href="#"
                  className="block hover:text-[#43b51a] transition-colors text-sm"
                >
                  যোগাযোগ
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Note */}
          <div className="border-t border-gray-300 mt-12 pt-8 text-center text-gray-500 text-sm">
            <p>
              &copy; 2025 Nature Life। সর্বস্বত্ব সংরক্ষিত। 🌿
              প্রাকৃতিকভাবে সুস্থভাবে ওজন বাড়ান।
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
