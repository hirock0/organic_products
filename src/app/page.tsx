"use client";
import React, { useState, useEffect } from 'react';
import { Leaf, Star, Truck, Shield, Heart, ArrowRight, Menu, X, CheckCircle } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion, useAnimation, Variants } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ReactNode } from "react";
import Image from 'next/image';
interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

interface Testimonial {
  name: string;
  rating: number;
  text: string;
}

interface Product {
  name: string;
  image: string;
  price: string;
  description: string;
}

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const OrganicLandingPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features: Feature[] = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "১০০% অর্গানিক",
      description: "ক্ষতিকর কীটনাশক বা রাসায়নিক ছাড়া উৎপাদিত প্রত্যয়িত অর্গানিক পণ্য",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "গুণগত মানের নিশ্চয়তা",
      description: "আমাদের প্রতিটি পণ্যের জন্য কঠোর পরীক্ষা ও মান নিয়ন্ত্রণ",
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "তাজা ডেলিভারি",
      description: "ফার্ম থেকে সরাসরি আপনার দোরগোড়ায় সর্বাধিক সতেজ ও পুষ্টিকর ডেলিভারি",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "স্বাস্থ্য সবার আগে",
      description: "প্রকৃতির শ্রেষ্ঠ উপাদান দিয়ে আপনার সুস্থতার যাত্রায় সহায়তা",
    },
  ];

  const testimonials: Testimonial[] = [
    {
      name: "সারা জনসন",
      rating: 5,
      text: "অসাধারণ মান! আমার পরিবার সতেজ স্বাদ পছন্দ করে এবং আমি নিশ্চিত থাকি আমরা স্বাস্থ্যকর খাবার খাচ্ছি।",
    },
    {
      name: "মাইক চেন",
      rating: 5,
      text: "দ্রুত ডেলিভারি এবং চমৎকার কাস্টমার সার্ভিস। এই অর্গানিক পণ্যগুলো আমাদের খাবারের ধরন পাল্টে দিয়েছে।",
    },
    {
      name: "এমা ডেভিস",
      rating: 5,
      text: "অবশেষে সত্যিকারের অর্গানিক পণ্যের নির্ভরযোগ্য উৎস পেলাম। স্বাদের পার্থক্য অবিশ্বাস্য!",
    },
  ];

  const products: Product[] = [
    {
      name: "অর্গানিক সবজি",
      image: "🥕",
      price: "৳১২.৯৯",
      description: "প্রতিদিন সংগ্রহ করা তাজা মৌসুমি সবজি",
    },
    {
      name: "অর্গানিক ফল",
      image: "🍎",
      price: "৳১৫.৯৯",
      description: "মিষ্টি, রসালো ফল প্রাকৃতিক পুষ্টিতে ভরপুর",
    },
    {
      name: "অর্গানিক শস্য",
      image: "🌾",
      price: "৳৮.৯৯",
      description: "স্বাস্থ্যকর ও পুষ্টিকর খাবারের জন্য উৎকৃষ্ট শস্য",
    },
    {
      name: "অর্গানিক শস্য",
      image: "🌾",
      price: "৳৮.৯৯",
      description: "স্বাস্থ্যকর ও পুষ্টিকর খাবারের জন্য উৎকৃষ্ট শস্য",
    },
    {
      name: "অর্গানিক শস্য",
      image: "🌾",
      price: "৳৮.৯৯",
      description: "স্বাস্থ্যকর ও পুষ্টিকর খাবারের জন্য উৎকৃষ্ট শস্য",
    },
    {
      name: "অর্গানিক শস্য",
      image: "🌾",
      price: "৳৮.৯৯",
      description: "স্বাস্থ্যকর ও পুষ্টিকর খাবারের জন্য উৎকৃষ্ট শস্য",
    },
    {
      name: "অর্গানিক শস্য",
      image: "🌾",
      price: "৳৮.৯৯",
      description: "স্বাস্থ্যকর ও পুষ্টিকর খাবারের জন্য উৎকৃষ্ট শস্য",
    },
    {
      name: "অর্গানিক শস্য",
      image: "🌾",
      price: "৳৮.৯৯",
      description: "স্বাস্থ্যকর ও পুষ্টিকর খাবারের জন্য উৎকৃষ্ট শস্য",
    },
    {
      name: "অর্গানিক শস্য",
      image: "🌾",
      price: "৳৮.৯৯",
      description: "স্বাস্থ্যকর ও পুষ্টিকর খাবারের জন্য উৎকৃষ্ট শস্য",
    },
    {
      name: "অর্গানিক শস্য",
      image: "🌾",
      price: "৳৮.৯৯",
      description: "স্বাস্থ্যকর ও পুষ্টিকর খাবারের জন্য উৎকৃষ্ট শস্য",
    },
  ];


  return (
    <div className="font-bangla  bg-gradient-to-br from-emerald-50 via-white to-green-50 font-sans">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        body {
          font-family: 'Inter', sans-serif;
        }
        .swiper-button-next,
        .swiper-button-prev {
          color: #059669;
          --swiper-navigation-size: 24px;
        }
        .swiper-pagination-bullet-active {
          background-color: #059669;
        }
      `}</style>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed border-b-1 border-b-slate-300 top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
          }`}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-20 h-20 rounded-full flex items-center justify-center"
              >
                <Image src={"https://res.cloudinary.com/dqpyp8ii2/image/upload/v1758035793/Nature_Life_Logo-01-01_cl15ho.png"} alt='logo' width={500} height={500}/>
                {/* <Leaf className="w-7 h-7 text-white" /> */}
              </motion.div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                PureHarvest
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-10">
              <a href="#home" className="text-gray-800 hover:text-green-600 transition-colors font-medium">
                হোম
              </a>
              <a href="#products" className="text-gray-800 hover:text-green-600 transition-colors font-medium">
                পণ্যসমূহ
              </a>
              <a href="#about" className="text-gray-800 hover:text-green-600 transition-colors font-medium">
                আমাদের সম্পর্কে
              </a>
              <a href="#contact" className="text-gray-800 hover:text-green-600 transition-colors font-medium">
                যোগাযোগ
              </a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full font-semibold"
              >
                এখনই কিনুন
              </motion.button>
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
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200"
          >
            <div className="px-4 py-6 space-y-4">
              <a href="#home" className="block text-gray-800 hover:text-green-600 font-medium">
                হোম
              </a>
              <a href="#products" className="block text-gray-800 hover:text-green-600 font-medium">
                পণ্যসমূহ
              </a>
              <a href="#about" className="block text-gray-800 hover:text-green-600 font-medium">
                আমাদের সম্পর্কে
              </a>
              <a href="#contact" className="block text-gray-800 hover:text-green-600 font-medium">
                যোগাযোগ
              </a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full font-semibold"
              >
                এখনই কিনুন
              </motion.button>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        id="home"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="pt-34 pb-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-8">
              <div className=" space-y-5">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
                  <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    খাঁটি অর্গানিক
                  </span>
                  <br />
                  পণ্যসমূহ
                  <br />
                  টেকসই জীবনের জন্য
                </h1>
                <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                  টেকসই খামার থেকে সরাসরি সংগ্রহ করা প্রিমিয়াম অর্গানিক পণ্য আবিষ্কার করুন।
                  প্রতিটি ক্রয়ের মাধ্যমে আপনার শরীরকে পুষ্ট করুন এবং পরিবেশবান্ধব কার্যক্রমকে সমর্থন করুন।
                </p>
              </div>


              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg flex items-center justify-center gap-2"
                >
                  সংগ্রহ দেখুন
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-green-500 text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-50"
                >
                  আরও জানুন
                </motion.button>
              </div>

              <div className="flex items-center gap-10">
                <motion.div variants={itemVariants} className="text-center">
                  <div className="text-3xl font-bold text-green-600">10K+</div>
                  <div className="text-gray-600 text-sm">সন্তুষ্ট গ্রাহক</div>
                </motion.div>
                <motion.div variants={itemVariants} className="text-center">
                  <div className="text-3xl font-bold text-green-600">100%</div>
                  <div className="text-gray-600 text-sm">অর্গানিক সনদপ্রাপ্ত</div>
                </motion.div>
                <motion.div variants={itemVariants} className="text-center">
                  <div className="text-3xl font-bold text-green-600">২৪/৭</div>
                  <div className="text-gray-600 text-sm">তাজা থাকার নিশ্চয়তা</div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative"
              transition={{ delay: 0.2 }}
            >
              <motion.div
                whileHover={{ rotate: 0, scale: 1.02 }}
                className="relative z-10 bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-10 transform rotate-2 transition-transform duration-500 shadow-lg"
              >
                <div className="text-center space-y-6">
                  <div className="text-9xl">🥬</div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900">প্রতিদিন খামারের তাজা</h3>
                    <p className="text-gray-600">ভালোবাসা দিয়ে সংগ্রহিত, যত্নের সাথে পৌঁছে দেওয়া</p>
                  </div>
                  <div className="flex justify-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-emerald-200 rounded-3xl transform -rotate-4 opacity-50"></div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900">কেন PureHarvest বেছে নেবেন?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              আমরা প্রিমিয়াম অর্গানিক পণ্য সরবরাহে প্রতিশ্রুতিবদ্ধ এবং একই সঙ্গে টেকসই কৃষি কার্যক্রমকে সমর্থন করি।
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
                className="text-center space-y-4 p-6 rounded-2xl hover:bg-green-50 transition-all transform hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl text-green-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Products Section */}
      <motion.section
        id="products"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-24 bg-gradient-to-br from-green-50 to-emerald-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900">বৈশিষ্ট্যযুক্ত পণ্যসমূহ</h2>
            <p className="text-lg text-gray-600">আমাদের বিশ্বাসযোগ্য অর্গানিক খামার অংশীদারদের হাতে নির্বাচিত পণ্যসমূহ</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                <div className="p-8 text-center space-y-4">
                  <div className="text-6xl">{product.image}</div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-gray-900">{product.name}</h3>
                    <p className="text-gray-600 text-sm">{product.description}</p>
                    <div className="text-2xl font-bold text-green-600">{product.price}</div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-full font-semibold"
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section with Swiper */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900">আমাদের গ্রাহকরা কী বলেন</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              হাজার হাজার সন্তুষ্ট গ্রাহকের সঙ্গে যোগ দিন যারা প্রিমিয়াম অর্গানিক পণ্যের জন্য PureHarvest-কে বিশ্বাস করেন
            </p>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 16 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 space-y-4 h-full flex flex-col justify-between"
                >
                  <div className="flex justify-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 italic text-base leading-relaxed flex-grow">
                    "{testimonial.text}"
                  </p>
                  <div className="font-semibold text-gray-900 text-center">- {testimonial.name}</div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-24 bg-gradient-to-r from-green-600 to-emerald-600"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white">
            আজই শুরু করুন আপনার অর্গানিক যাত্রা
          </h2>
          <p className="text-lg text-green-100 max-w-2xl mx-auto leading-relaxed">
            আমাদের স্বাস্থ্যসচেতন গ্রাহক সম্প্রদায়ের সঙ্গে যোগ দিন এবং সত্যিই অর্গানিক পণ্যের রূপান্তরমূলক শক্তি অনুভব করুন।
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 flex items-center justify-center gap-2"
            >
              <CheckCircle className="w-5 h-5" />
              কেনাকাটা শুরু করুন
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600"
            >
              আপনার প্রথম অর্ডারে ২০% ছাড় পান
            </motion.button>
          </div>
        </div>

      </motion.section>

      {/* Footer */}
      <motion.footer
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="bg-gray-900 text-white py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-700 rounded-full flex items-center justify-center"
                >
                  <Leaf className="w-7 h-7 text-white" />
                </motion.div>
                <span className="text-2xl font-bold">PureHarvest</span>
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
            <p>&copy; 2025 PureHarvest। সর্বস্বত্ব সংরক্ষিত। 💚 সহ একটি সুস্থ বিশ্বের জন্য তৈরি।</p>
          </div>
        </div>

      </motion.footer>
    </div>
  );
};

export default OrganicLandingPage;