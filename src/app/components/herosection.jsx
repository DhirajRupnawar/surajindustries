"use client"

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, MapPin, Phone, Mail, ArrowRight, Star, Shield, Droplets, Wrench } from 'lucide-react';

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const products = [
    "FRP Doors", "FRP Domes", "FRP Planters", "FRP Panels", "Custom Solutions"
  ];

  const features = [
    { icon: <Droplets className="w-6 h-6" />, text: "100% Waterproof" },
    { icon: <Shield className="w-6 h-6" />, text: "Ultra Durable" },
    { icon: <Wrench className="w-6 h-6" />, text: "Customizable" },
    { icon: <Star className="w-6 h-6" />, text: "Premium Quality" }
  ];

  const backgroundImages = [
    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 transition-all duration-1000 ease-in-out"
        style={{ background: backgroundImages[currentSlide] }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-xl' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">FRP</span>
              </div>
              <div>
                <h1 className={`text-xl font-bold transition-colors ${
                  scrolled ? 'text-gray-900' : 'text-white'
                }`}>
                  PremiumFRP
                </h1>
                <p className={`text-sm transition-colors ${
                  scrolled ? 'text-gray-600' : 'text-white/80'
                }`}>
                  Pune Solutions
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className={`font-medium transition-colors hover:text-purple-600 ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Home
              </a>
              <div className="relative group">
                <button className={`flex items-center space-x-1 font-medium transition-colors hover:text-purple-600 ${
                  scrolled ? 'text-gray-900' : 'text-white'
                }`}>
                  <span>Products</span>
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  {products.map((product, i) => (
                    <a key={i} href="#" className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors first:rounded-t-xl last:rounded-b-xl">
                      {product}
                    </a>
                  ))}
                </div>
              </div>
              <a href="#" className={`font-medium transition-colors hover:text-purple-600 ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}>
                About
              </a>
              <a href="#" className={`font-medium transition-colors hover:text-purple-600 ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Contact
              </a>
            </div>

            {/* Contact Info & CTA */}
            <div className="hidden lg:flex items-center space-x-6">
              <div className="flex items-center space-x-4 text-sm">
                <div className={`flex items-center space-x-1 ${
                  scrolled ? 'text-gray-600' : 'text-white/80'
                }`}>
                  <MapPin className="w-4 h-4" />
                  <span>Warje Malwadi, Pune</span>
                </div>
                <div className={`flex items-center space-x-1 ${
                  scrolled ? 'text-gray-600' : 'text-white/80'
                }`}>
                  <Phone className="w-4 h-4" />
                  <span>+91 98765 43210</span>
                </div>
              </div>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Get Quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className={`w-6 h-6 ${scrolled ? 'text-gray-900' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${scrolled ? 'text-gray-900' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-white/95 backdrop-blur-md`}>
          <div className="px-4 py-6 space-y-4">
            <a href="#" className="block text-gray-900 font-medium hover:text-purple-600 transition-colors">Home</a>
            <a href="#" className="block text-gray-900 font-medium hover:text-purple-600 transition-colors">Products</a>
            <a href="#" className="block text-gray-900 font-medium hover:text-purple-600 transition-colors">About</a>
            <a href="#" className="block text-gray-900 font-medium hover:text-purple-600 transition-colors">Contact</a>
            <div className="pt-4 border-t border-gray-200">
              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-full font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-8 animate-pulse">
              <Star className="w-4 h-4 mr-2" />
              Premium FRP Manufacturing Since 2010
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Premium FRP Solutions
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                from Pune
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-white/90 mb-4 max-w-4xl mx-auto leading-relaxed">
              Doors, Domes, Planters & More
            </p>

            {/* Description */}
            <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
              Manufactured with excellence in Warje Malwadi, Pune – delivering waterproof, durable, and customizable FRP products.
            </p>

            {/* Feature Icons */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white">
                  {feature.icon}
                  <span className="font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 flex items-center space-x-2">
                <span>Explore Products</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all duration-300 shadow-xl hover:shadow-white/10 transform hover:scale-105">
                Get a Quote
              </button>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">1000+</div>
                <div className="text-white/80">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">15+</div>
                <div className="text-white/80">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-white/80">Quality Assured</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 320" className="w-full h-20">
          <path
            fill="white"
            fillOpacity="0.1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,122.7C1248,128,1344,160,1392,176L1440,192V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0V96Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;