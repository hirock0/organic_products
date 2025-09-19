

"use client";

import { CheckCircle } from "lucide-react";

const benefits = [
  "প্রতিটি ভিটামিন শরীরের অক্সিজেন দূর করে।",
  "টিস্যু ক্যালসিয়াম গঠন করে।",
  "ক্যালসিয়াম এর অভাব পূরণ করে।",
  "হাড়ের শক্তি বৃদ্ধি করে।",
  "দাঁত কম হওয়া দূর করে।",
  "বাতি সেরে উঠতে সাহায্য করে।",
  "হাড়ের মজবুত গঠন করে।",
  "হাড়কে নরম হতে দেয় না।",
];

const whyUs = [
  "অন্যদের মতো আপনাকে অগ্রিম ও টাকার চিন্তায় চিন্তিত হতে হবে না।",
  "আমরা বাংলাদেশের সব জেলায় হোম ডেলিভারি দেই।",
  "পণ্য হাতে পাওয়ার পর খুলে দেখে তারপর টাকা প্রদান করবেন।",
  "আপনার প্রয়োজন অনুযায়ী যে কোন সময় আমাদের সাথে যোগাযোগ করতে পারবেন।",
];

const Slogan1 = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      {/* Product Title */}
      <div className="theme_background text-white text-center py-4 rounded-t-2xl">
        <h2 className="text-2xl font-bold">
          Weight Gain কেন ব্যবহার করবেন?
        </h2>
      </div>

      {/* Benefits */}
      <div className=" bg-green-50 p-6 border border-green-200 rounded-b-2xl space-y-3">
        <p className="text-gray-700">
          👉 আমাদের 100% প্রাকৃতিক লেবু এবং সাথেই গার্লিকের ক্যান্ড সহ
          স্বাস্থ্যের জন্য ভিটামিনযুক্ত এই অনন্য ফর্মুলাটি তৈরি করা হয়েছে।
        </p>

        <ul className="grid sm:grid-cols-2 gap-3">
          {benefits.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle className="theme_text w-5 h-5 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="text-gray-600 text-sm mt-4">
          আমাদের শরীরের জন্য ভিটামিন ও ক্যালসিয়াম কতটা গুরুত্বপূর্ণ তা
          সবাই জানি। এই প্রোডাক্টটি আপনাদের সেই ঘাটতি পূরণ করবে।
        </p>
      </div>

      {/* Why Buy From Us */}
      <div className="mt-10">
        <div className="theme_background text-white text-center py-3 rounded-t-xl">
          <h3 className="text-xl font-semibold">আমাদের কাছে কেনা কিনবেন?</h3>
        </div>
        <div className="bg-green-50 p-6 border border-green-200 rounded-b-xl space-y-2">
          <ul className="space-y-2">
            {whyUs.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="theme_text w-5 h-5 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Contact Section */}
      <div className="theme_background text-white text-center py-6 mt-10 rounded-2xl">
        <h3 className="text-xl font-bold">যে কোন প্রয়োজনে যোগাযোগ করুন</h3>
        <p className="text-2xl font-extrabold mt-2">01969905799</p>
      </div>
    </section>
  );
};

export default Slogan1;
