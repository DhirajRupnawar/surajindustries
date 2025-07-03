"use client"

import React from 'react';
import { Shield, Droplets, Palette, Home, TreePine } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "FRP Doors",
      description: "Waterproof, customizable doors for bedroom, balcony, and bathroom applications.",
      features: ["Waterproof", "Customizable", "Film/Fiber Lamination", "15-Year Warranty"],
      icon: <Home className="w-6 h-6" />,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "FRP Domes",
      description: "Available in standard, machine-mounted and semicircular designs with superior waterproofing.",
      features: ["Standard Design", "Machine-Mounted", "Semicircular", "15-Year Warranty"],
      icon: <Shield className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "FRP Planters & Flower Pots",
      description: "Lightweight and durable FRP planters perfect for both indoor and outdoor decoration.",
      features: ["Lightweight", "Durable", "Indoor/Outdoor", "Weather Resistant"],
      icon: <TreePine className="w-6 h-6" />,
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "FRP Stools & Tables",
      description: "Versatile seating solutions including tabla stools, crafted with premium FRP materials.",
      features: ["Versatile Design", "Tabla Stools", "Premium Materials", "Long-lasting"],
      icon: <Palette className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "FRP Cabins",
      description: "Portable panel and check-post cabins designed for outdoor installations with weather-resistant properties.",
      features: ["Portable Design", "Panel Cabins", "Check-post Style", "Weather Resistant"],
      icon: <Droplets className="w-6 h-6" />,
      gradient: "from-cyan-500 to-blue-600"
    }
  ];

  // Duplicate services for seamless loop
  const duplicatedServices = [...services, ...services];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.06),transparent)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-full px-6 py-2 mb-6 backdrop-blur-sm border border-blue-200">
            <span className="text-blue-600 font-medium">Premium FRP Solutions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6">
            Our Services & Products
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Discover our comprehensive range of high-quality FRP products designed for durability, 
            aesthetics, and long-lasting performance with industry-leading warranties.
          </p>
        </div>

        {/* Moving Services Cards */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex animate-[scroll_20s_linear_infinite] hover:pause">
              {duplicatedServices.map((service, index) => (
                <div
                  key={index}
                  className="flex-none w-80 mx-4 group relative bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-slate-200 hover:border-blue-300 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
                >
                  {/* Icon with Gradient Background */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all duration-300`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-4 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-1.5">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-xs text-slate-500">
                        <div className="w-1 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Hover Effect Background */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-xl"></div>

      {/* Custom CSS for animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;