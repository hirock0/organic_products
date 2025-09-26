"use client";

import { Star} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { testimonials } from '@/data/testimonials';
import UnderLine from '@/components/Animations/UnderLine';

const Testimonials = () => {
  return (
    <div>
      <section
        className="py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">

              <UnderLine text={"আমাদের গ্রাহকরা কী বলেন"} className={"text-4xl font-extrabold text-gray-900"}/>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mt-10">
              হাজার হাজার সন্তুষ্ট গ্রাহকের সঙ্গে যোগ দিন যারা প্রিমিয়াম অর্গানিক পণ্যের জন্য "ন্যাচার লাইফ" কে বিশ্বাস করেন
            </p>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
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
                <div
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
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  )
}

export default Testimonials