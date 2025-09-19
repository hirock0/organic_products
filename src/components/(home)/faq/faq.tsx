"use client";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}
const faqItems: FAQItem[] = [
  {
    question: "Weight Gain Product কেন ব্যবহার করবেন?",
    answer:
      "এই প্রোডাক্টটি শরীরে ওজন বৃদ্ধি করতে সাহায্য করে, ক্ষুধা বাড়ায়, দুর্বলতা দূর করে এবং শরীরকে সুস্থ ও সবল করে তোলে। নিয়মিত সেবনে শরীরের পেশি ও হাড় মজবুত হয়, শরীরের প্রয়োজনীয় ভিটামিন ও প্রোটিনের ঘাটতি পূরণ হয় এবং সার্বিকভাবে সুস্থতা বজায় থাকে।",
  },
  {
    question: "আমাদের কাছ থেকে কেনা কেন নিরাপদ?",
    answer:
      "আমরা 100% আসল ও মানসম্মত পণ্য সরবরাহ করি। কোন অগ্রিম টাকা দিতে হয় না, ফলে ক্রেতারা নিশ্চিন্তে অর্ডার করতে পারেন। বাংলাদেশের সব জেলায় ক্যাশ অন ডেলিভারি সুবিধা আছে, অর্থাৎ পণ্য হাতে পাওয়ার পর যাচাই করে তারপর টাকা পরিশোধ করতে পারবেন। এছাড়া আমাদের কাস্টমার সাপোর্ট সবসময় আপনাদের সহযোগিতা করতে প্রস্তুত থাকে।",
  },
  {
    question: "ডেলিভারি কীভাবে হবে?",
    answer:
      "আমরা সারা বাংলাদেশে নির্ভরযোগ্য কুরিয়ার সার্ভিসের মাধ্যমে পণ্য পৌঁছে দেই। ঢাকার ভেতরে সাধারণত ১-২ দিনের মধ্যে এবং ঢাকার বাইরে ২-৪ দিনের মধ্যে ডেলিভারি হয়ে যায়। পণ্যগুলো নিরাপদভাবে সিল ও প্যাকেজিং করে পাঠানো হয়। চাইলে কুরিয়ার অফিস থেকে সংগ্রহ করা যাবে অথবা আপনার ঠিকানায় হোম ডেলিভারিও পাবেন। ডেলিভারির সময় পণ্য হাতে পেয়ে যাচাই করার পর টাকা দিতে পারবেন।",
  },
];


export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-green-800">প্রশ্নাবলী (FAQ)</h2>
      <div className="space-y-3">
        {faqItems.map((item, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <button
              onClick={() => toggle(index)}
              className="w-full text-left p-4 bg-green-50 hover:bg-green-100 flex justify-between items-center font-medium"
            >
              {item.question}
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-white text-gray-700">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
