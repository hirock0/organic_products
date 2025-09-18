import { products } from '@/data/products';
import NavBar from '@/components/NavBar/NavBar';
import Features from '@/components/Features/Features';
import ProductCard from '@/components/ProductCard/ProductCard';
import Footer from '@/components/Footer/Footer';
import Banner from '@/components/Banner/Banner';
import Cta from '@/components/Cta/Cta';
import Testimonials from '@/components/Testimonials/Testimonials';
import FAQ from '@/components/FAQ/Faq';
const OrganicLandingPage: React.FC = () => {

  return (
    <div className="font-bangla  bg-gradient-to-br from-emerald-50 via-white to-green-50 font-sans">

      <NavBar />
      <Banner />
      <Features />


      <section
        className="py-24 bg-gradient-to-br from-green-50 to-emerald-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900">বৈশিষ্ট্যযুক্ত পণ্যসমূহ</h2>
            <p className="text-lg text-gray-600">আমাদের বিশ্বাসযোগ্য অর্গানিক খামার অংশীদারদের হাতে নির্বাচিত পণ্যসমূহ</p>
          </div>

          <div className="grid md:grid-cols-3  gap-2">
            {products.map((product, index) => (
              <ProductCard product={product} key={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section with Swiper */}
      <Testimonials />
      {/* FAQ section */}
      <FAQ/>
      {/* CTA Section */}
      <Cta />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default OrganicLandingPage;