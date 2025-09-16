import { Leaf, Star, Truck, Shield, Heart, ArrowRight, Menu, X, CheckCircle } from 'lucide-react';
const Cta = () => {
  return (
    <div>
              <section

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
            <button

              className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 flex items-center justify-center gap-2"
            >
              <CheckCircle className="w-5 h-5" />
              কেনাকাটা শুরু করুন
            </button>
            <button
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600"
            >
              আপনার প্রথম অর্ডারে ২০% ছাড় পান
            </button>
          </div>
        </div>

      </section>
    </div>
  )
}

export default Cta