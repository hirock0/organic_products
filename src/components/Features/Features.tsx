import { features } from '@/data/reatures'
import React from 'react'

const Features = () => {
    return (

        <section
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
                        <div
                            key={index}
                            className="text-center space-y-4 p-6 rounded-2xl hover:bg-green-50 transition-all transform hover:scale-105"
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl text-green-600">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default Features