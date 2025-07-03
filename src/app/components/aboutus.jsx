"use client"

import React from 'react';
import { Building2, Calendar, Users, TrendingUp, Award, Clock } from 'lucide-react';

const AboutUs = () => {
  const stats = [
    { icon: Calendar, label: 'Established', value: '2017' },
    { icon: TrendingUp, label: 'Annual Turnover', value: '₹0.4-1.5 Cr' },
    { icon: Users, label: 'Team', value: 'Skilled Professionals' },
    { icon: Building2, label: 'Location', value: 'Pune, Maharashtra' }
  ];

  const products = [
    'FRP Doors',
    'Domes',
    'Planters',
    'Stools',
    'Portable Cabins'
  ];

  const features = [
    { icon: Award, title: 'Quality Assurance', desc: 'High-quality FRP products engineered to perfection' },
    { icon: Clock, title: 'Timely Delivery', desc: 'Strong reputation for meeting deadlines consistently' },
    { icon: Building2, title: 'Waterproof Solutions', desc: 'Precision-engineered products built to last' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-6">
            <Building2 className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-blue-600">Suraj Industries</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Crafting excellence in FRP products since 2017, delivering precision-engineered solutions 
            with unwavering commitment to quality and innovation.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Company Story */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Established in 2017, <strong>Suraj Industries</strong> is a Pune-based proprietorship firm 
                that has carved a niche in the FRP (Fiberglass Reinforced Plastic) industry. What started 
                as a vision to deliver superior quality products has evolved into a trusted name in the market.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our journey is built on the foundation of precision engineering, innovative design, and 
                an unwavering commitment to customer satisfaction. With a small but highly skilled team, 
                we've consistently delivered exceptional results that exceed expectations.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, we stand proud with an annual turnover of ₹0.4–1.5 Cr, serving clients across 
                various sectors with our comprehensive range of waterproof FRP solutions.
              </p>
            </div>
          </div>

          {/* Products Grid */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Products</h2>
            <p className="text-gray-600 mb-6">
              We specialize in a diverse range of high-quality FRP products designed for durability and performance:
            </p>
            <div className="grid grid-cols-2 gap-4">
              {products.map((product, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    <span className="font-semibold text-gray-800">{product}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Company Overview</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        {/* <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Excellence?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join our growing list of satisfied clients who trust Suraj Industries for their FRP needs.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
            Get in Touch
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default AboutUs;