"use client";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "কেন আমাদের অর্গানিক পণ্য কিনবেন?",
    answer:
      "আমাদের সব পণ্য ১০০% খাঁটি অর্গানিক, রাসায়নিকমুক্ত এবং স্বাস্থ্যকর। আমরা বিশ্বাস করি স্বাস্থ্যই সবচেয়ে বড় ধন।"
  },
  {
    question: "আমাদের পণ্য কীভাবে তৈরি করা হয়?",
    answer:
      "সব অর্গানিক পণ্য সরাসরি নির্ভরযোগ্য কৃষক থেকে আনা হয়, কোন কৃত্রিম রাসায়নিক ছাড়া।"
  },
  {
    question: "ডেলিভারি কত দ্রুত হয়?",
    answer: "বাংলাদেশের যেকোনো স্থানে দ্রুত এবং নিরাপদ ডেলিভারি নিশ্চিত করা হয়।"
  }
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
