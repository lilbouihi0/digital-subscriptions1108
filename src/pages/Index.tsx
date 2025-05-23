
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturedProducts from '../components/FeaturedProducts';
import ReviewCard from '../components/ReviewCard';
import TrustBadges from '../components/TrustBadges';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import Footer from '../components/Footer';
import SpinWheel from '../components/spin-wheel/SpinWheel';
import { useLanguage } from '../contexts/LanguageContext';

const Index = () => {
  const { t, dir } = useLanguage();
  
  const reviews = [
    {
      name: "Mohammed A.",
      date: "May 5, 2025",
      rating: 5,
      text: "Twasalt b compte Netflix f 2 d9aye9 b3d l-daf3! Service top, rani ghadi n3awd!",
      productBought: "Netflix Premium"
    },
    {
      name: "Fatima L.",
      date: "May 3, 2025",
      rating: 5,
      text: "S7a9t chwya luwl, bs7 customer service 3awd lia th9a. Spotify khdam mzzyan bzf!",
      productBought: "Spotify Premium"
    },
    {
      name: "Ahmed K.",
      date: "April 29, 2025",
      rating: 4,
      text: "Price zwin bzaf w Amazon Prime kaykhdem bla moshkil mn shhar!",
      productBought: "Amazon Prime"
    },
    {
      name: "Yasmine B.",
      date: "April 25, 2025",
      rating: 5,
      text: "Tjawbo m3aya f WhatsApp daba daba, w 3tawni instructions sbab. Service kayb9a fi rass!",
      productBought: "Shahid VIP"
    }
  ];

  return (
    <div className="min-h-screen bg-white" dir={dir}>
      <Navbar />
      <HeroSection />
      <FeaturedProducts />
      
      {/* Customer Reviews Section */}
      <div className="py-16 bg-white" dir={dir}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-navy mb-4">
              {t("reviews.title")}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t("reviews.subtitle")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, index) => (
              <ReviewCard
                key={index}
                name={review.name}
                date={review.date}
                rating={review.rating}
                text={review.text}
                productBought={review.productBought}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div id="faq" className="py-16 bg-gray-50" dir={dir}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-navy mb-4">
              {t("faq.title")}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t("faq.subtitle")}
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto divide-y divide-gray-200">
            {[
              {
                q: t("faq.q1"),
                a: t("faq.a1")
              },
              {
                q: t("faq.q2"),
                a: t("faq.a2")
              },
              {
                q: t("faq.q3"),
                a: t("faq.a3")
              },
              {
                q: t("faq.q4"),
                a: t("faq.a4")
              },
              {
                q: t("faq.q5"),
                a: t("faq.a5")
              }
            ].map((faq, index) => (
              <div key={index} className="py-5 px-6 mb-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 transition-all hover:shadow-md">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold text-navy dark:text-blue-300">{faq.q}</h3>
                </div>
                <p className="mt-3 text-gray-700 dark:text-gray-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <TrustBadges />
      <Footer />
      <FloatingWhatsApp />
      <SpinWheel />
    </div>
  );
};

export default Index;
