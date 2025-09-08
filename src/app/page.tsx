"use client";
import React, { useState, useEffect } from 'react';
import { Leaf, Star, Truck, Shield, Heart, ArrowRight, Menu, X, CheckCircle } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion, useAnimation, Variants } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Feature {
  icon: JSX.Element;
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
      title: "100% Organic",
      description: "Certified organic products grown without harmful pesticides or chemicals",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Guaranteed",
      description: "Rigorous testing and quality control for every product we sell",
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Fresh Delivery",
      description: "Farm-to-door delivery ensuring maximum freshness and nutrition",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Health First",
      description: "Supporting your wellness journey with nature's finest ingredients",
    },
  ];

  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "The quality is outstanding! My family loves the fresh taste and I feel good knowing we're eating clean.",
    },
    {
      name: "Mike Chen",
      rating: 5,
      text: "Fast delivery and amazing customer service. These organic products have transformed our meals.",
    },
    {
      name: "Emma Davis",
      rating: 5,
      text: "Finally found a reliable source for truly organic products. The difference in taste is incredible!",
    },
  ];

  const products: Product[] = [
    {
      name: "Organic Vegetables",
      image: "🥕",
      price: "$12.99",
      description: "Fresh seasonal vegetables harvested daily",
    },
    {
      name: "Organic Fruits",
      image: "🍎",
      price: "$15.99",
      description: "Sweet, juicy fruits packed with natural goodness",
    },
    {
      name: "Organic Grains",
      image: "🌾",
      price: "$8.99",
      description: "Wholesome grains for healthy, filling meals",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 font-sans">
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
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
        }`}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-700 rounded-full flex items-center justify-center"
              >
                <Leaf className="w-7 h-7 text-white" />
              </motion.div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                PureHarvest
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-10">
              <a href="#home" className="text-gray-800 hover:text-green-600 transition-colors font-medium">
                Home
              </a>
              <a href="#products" className="text-gray-800 hover:text-green-600 transition-colors font-medium">
                Products
              </a>
              <a href="#about" className="text-gray-800 hover:text-green-600 transition-colors font-medium">
                About
              </a>
              <a href="#contact" className="text-gray-800 hover:text-green-600 transition-colors font-medium">
                Contact
              </a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full font-semibold"
              >
                Shop Now
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
                Home
              </a>
              <a href="#products" className="block text-gray-800 hover:text-green-600 font-medium">
                Products
              </a>
              <a href="#about" className="block text-gray-800 hover:text-green-600 font-medium">
                About
              </a>
              <a href="#contact" className="block text-gray-800 hover:text-green-600 font-medium">
                Contact
              </a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full font-semibold"
              >
                Shop Now
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
        className="pt-24 pb-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-5">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
                  <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    Pure Organic
                  </span>
                  <br />
                  Products for
                  <br />
                  Sustainable Living
                </h1>
                <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                  Discover premium organic products sourced directly from sustainable farms. Nourish your body and support eco-conscious practices with every purchase.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg flex items-center justify-center gap-2"
                >
                  Shop Collection
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-green-500 text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-50"
                >
                  Learn More
                </motion.button>
              </div>

              <div className="flex items-center gap-10">
                <motion.div variants={itemVariants} className="text-center">
                  <div className="text-3xl font-bold text-green-600">10K+</div>
                  <div className="text-gray-600 text-sm">Happy Customers</div>
                </motion.div>
                <motion.div variants={itemVariants} className="text-center">
                  <div className="text-3xl font-bold text-green-600">100%</div>
                  <div className="text-gray-600 text-sm">Organic Certified</div>
                </motion.div>
                <motion.div variants={itemVariants} className="text-center">
                  <div className="text-3xl font-bold text-green-600">24/7</div>
                  <div className="text-gray-600 text-sm">Fresh Guarantee</div>
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
                    <h3 className="text-2xl font-bold text-gray-900">Farm Fresh Daily</h3>
                    <p className="text-gray-600">Harvested with care, delivered with love</p>
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
            <h2 className="text-4xl font-extrabold text-gray-900">Why Choose PureHarvest?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We are committed to delivering premium organic products while championing sustainable farming practices.
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
            <h2 className="text-4xl font-extrabold text-gray-900">Featured Products</h2>
            <p className="text-lg text-gray-600">Handpicked selections from our trusted organic farm partners</p>
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
            <h2 className="text-4xl font-extrabold text-gray-900">What Our Customers Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Join thousands of satisfied customers who trust PureHarvest for premium organic products
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
            Begin Your Organic Journey Today
          </h2>
          <p className="text-lg text-green-100 max-w-2xl mx-auto leading-relaxed">
            Join our community of health-conscious customers and experience the transformative power of truly organic products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 flex items-center justify-center gap-2"
            >
              <CheckCircle className="w-5 h-5" />
              Start Shopping
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600"
            >
              Get 20% Off Your First Order
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
                Delivering premium organic products for a healthier lifestyle and a sustainable future.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Products</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  Vegetables
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  Fruits
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  Grains
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  Herbs
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Company</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  About Us
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  Our Farms
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  Certifications
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  Sustainability
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Support</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  Help Center
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  Shipping Info
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  Returns
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  Contact
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 PureHarvest. All rights reserved. Made with 💚 for a healthier world.</p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default OrganicLandingPage;