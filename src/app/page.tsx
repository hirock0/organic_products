import Slogan1 from '@/components/Home/Slogan/Slogan1';
import Banner from '@/components/Home/Banner/Banner';
import Cta from '@/components/Home/Cta/Cta';
import Faq from '@/components/Home/Faq/Faq';
import Testimonials from '@/components/Home/Testimonials/Testimonials';
import CartProducts from '@/components/Products/CartProducts/CartProducts';
import ProductCard from '@/components/Products/ProductCard/ProductCard';
import Footer from '@/components/Footer/Footer';
import NavBar from '@/components/NavBar/NavBar';
import { products } from '@/data/products';
import OrderButton from './ui/orderButton/orderButton';
const OrganicLandingPage: React.FC = () => {

  return (
    <div className="font-bangla  bg-gradient-to-br from-emerald-50 via-white to-green-50 font-sans">

      <NavBar />
      <Banner />
      <CartProducts />
      <Slogan1 />


      <section
        className="py-24 bg-gradient-to-br from-green-50 to-emerald-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900">বৈশিষ্ট্যযুক্ত পণ্যসমূহ</h2>
          
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
      <Faq />
      {/* CTA Section */}
      <Cta />


      {/* <OrderButton/> */}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default OrganicLandingPage;