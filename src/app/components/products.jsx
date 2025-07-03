"use client"

import React from 'react';
import { ShoppingCart, Star, ArrowRight, Shield, Droplets, Home, Settings } from 'lucide-react';

const ProductCard = ({ product }) => {
  const getProductIcon = (title) => {
    if (title.toLowerCase().includes('door')) return <Home className="w-8 h-8" />;
    if (title.toLowerCase().includes('dome')) return <Shield className="w-8 h-8" />;
    if (title.toLowerCase().includes('stool')) return <Settings className="w-8 h-8" />;
    return <Home className="w-8 h-8" />;
  };

  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
      {/* Product Image/Icon Section */}
      <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 p-8 flex items-center justify-center h-48">
        <div className="text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
          {getProductIcon(product.title)}
        </div>
        <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-700">
          {product.warranty && (
            <span className="flex items-center gap-1">
              <Shield className="w-3 h-3" />
              {product.warranty}
            </span>
          )}
        </div>
      </div>

      {/* Product Details */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-900 transition-colors duration-300">
          {product.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
          {product.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-4">
          {product.features.map((feature, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-medium"
            >
              {feature.includes('Waterproof') && <Droplets className="w-3 h-3" />}
              {feature}
            </span>
          ))}
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-2xl font-bold text-gray-900">{product.price}</span>
            {product.unit && <span className="text-gray-500 text-sm ml-1">{product.unit}</span>}
          </div>
          <div className="flex items-center gap-1 text-yellow-500">
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
          </div>
        </div>

        {/* CTA Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg">
          <ShoppingCart className="w-5 h-5" />
          Get Quote
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </button>

        {/* Company Info */}
        <div className="mt-3 text-center text-xs text-gray-500">
          surajindustriesindia.com
        </div>
      </div>
    </div>
  );
};

const ProductCards = () => {
  const products = [
    {
      title: "FRP Door – Fibre Lamination",
      description: "Premium waterproof lamination finish with customizable sizes. Perfect for residential and commercial applications with superior durability.",
      price: "₹211",
      unit: "/sq ft",
      features: ["Waterproof", "Customizable", "Durable"],
      warranty: null
    },
    {
      title: "Film Lamination Door",
      description: "Moisture-resistant door with decorative finish. Ideal for areas with high humidity and moisture exposure.",
      price: "₹175",
      unit: "/sq ft",
      features: ["Moisture-resistant", "Decorative", "Affordable"],
      warranty: null
    },
    {
      title: "Bedroom & Balcony FRP Door",
      description: "Heavy-duty construction with customizable options. Perfect for bedroom and balcony applications with enhanced strength.",
      price: "₹150",
      unit: "/sq ft",
      features: ["Heavy-duty", "Customizable", "Versatile"],
      warranty: null
    },
    {
      title: "FRP Dome",
      description: "Waterproof dome structure with custom sizes available. Comes with comprehensive warranty for peace of mind.",
      price: "₹1,050",
      unit: "/sq ft",
      features: ["Waterproof", "Custom sizes", "Premium"],
      warranty: "15-year warranty"
    },
    {
      title: "FRP Dome for Machine",
      description: "Heavy-duty machinery dome designed for industrial applications. Built to withstand harsh working conditions.",
      price: "₹55,000",
      unit: "/piece",
      features: ["Heavy-duty", "Industrial", "Reliable"],
      warranty: null
    },
    {
      title: "FRP Tabla Stool",
      description: "Lightweight yet durable round stool with excellent build quality. Perfect for various seating applications.",
      price: "₹2,250",
      unit: "/piece",
      features: ["Lightweight", "Durable", "Round design"],
      warranty: null
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Premium FRP Products
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of high-quality FRP products designed for durability and excellence
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Custom Solutions?
            </h3>
            <p className="text-gray-600 mb-6">
              Contact us for personalized quotes and custom manufacturing solutions
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300">
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;