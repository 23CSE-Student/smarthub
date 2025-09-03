import React, { useState } from 'react';
import { GraduationCap, Menu, X, ArrowRight, Play, Award, FileText, Users, BarChart3, CheckCircle, TrendingUp, Globe, Shield, Mail, Phone, MapPin } from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  const handleContactClick = () => {
    setContactModalOpen(true);
  };

  const handleWatchDemo = () => {
    setDemoModalOpen(true);
  };

  const features = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Achievement Tracking",
      description: "Centralize all academic and extracurricular achievements in one secure, verified digital platform."
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Digital Portfolio",
      description: "Auto-generate professional portfolios with verified credentials for job applications and admissions."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Faculty Verification",
      description: "Built-in approval system ensuring all achievements are validated by authorized faculty members."
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Analytics & Reports",
      description: "Comprehensive reporting tools for NAAC accreditation, institutional analytics, and performance tracking."
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="h-6 w-6" />,
      text: "Verified Digital Credentials"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      text: "Real-time Progress Tracking"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      text: "Global Portfolio Sharing"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      text: "Secure Data Management"
    }
  ];

  return (
    <div id="header" className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Smart Student Hub</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">
                Features
              </a>
              <a href="#benefits" className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">
                Benefits
              </a>
              <a href="#header" className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">
                About
              </a>
              <button 
                onClick={handleContactClick}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                Contact Us
              </button>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-100 py-4 space-y-4">
              <a href="#features" className="block text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">
                Features
              </a>
              <a href="#benefits" className="block text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">
                Benefits
              </a>
              <a href="#header" className="block text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">
                About
              </a>
              <button 
                onClick={handleContactClick}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                Contact Us
              </button>
            </div>
          )}
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-8 lg:py-12 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    Your Complete
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Student Journey</span>
                    <br />
                    in One Platform
                  </h1>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg">
                    Centralize all achievements, track progress, and build verified digital portfolios. 
                    From academics to extracurriculars - document every milestone of your educational journey.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="#hero-image"
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                  <button 
                    onClick={handleWatchDemo}
                    className="bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-gray-300 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center space-x-2 group"
                  >
                    <Play className="h-5 w-5 text-blue-600 group-hover:scale-110 transition-transform duration-200" />
                    <span>Watch Demo</span>
                  </button>
                </div>
              </div>

              {/* Right Content - Image */}
              <div id="hero-image" className="relative">
                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <img
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Students using digital platform for achievements"
                    className="w-full h-[250px] lg:h-[320px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Transforming Student Success
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive tools designed to capture, validate, and showcase every aspect of your educational journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-xl p-5 border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-3 rounded-lg w-fit mb-4 group-hover:from-blue-600 group-hover:to-indigo-700 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Why Students & Institutions Choose Us
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Empowering educational excellence through comprehensive achievement management and verified digital portfolios
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="text-yellow-400">
                    {benefit.icon}
                  </div>
                  <span className="text-lg font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <div className="inline-flex items-center space-x-2 text-blue-200 text-sm">
                <span>Ready to transform your institution?</span>
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Contact Modal */}
      {contactModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 relative transform transition-all duration-300 scale-100">
            <button
              onClick={() => setContactModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Contact Us</h2>
              <p className="text-gray-600">Get in touch with our team</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <Mail className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <p className="text-gray-600">contact@smartstudenthub.edu</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <Phone className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium text-gray-900">Phone</p>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <MapPin className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium text-gray-900">Address</p>
                  <p className="text-gray-600">123 Education Ave, Campus City</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={() => setContactModalOpen(false)}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Demo Modal */}
      {demoModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden relative">
            <button
              onClick={() => setDemoModalOpen(false)}
              className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-200"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="p-6">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Platform Demo</h2>
                <p className="text-gray-600">See Smart Student Hub in action</p>
              </div>

              <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-video">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Play className="h-16 w-16 mx-auto mb-4 text-blue-400" />
                    <h3 className="text-xl font-semibold mb-2">Demo Video</h3>
                    <p className="text-gray-300 mb-4">
                      Watch how students can track achievements, build portfolios, and get faculty verification
                    </p>
                    <div className="space-y-2 text-sm text-gray-400">
                      <p>• Student dashboard walkthrough</p>
                      <p>• Achievement upload process</p>
                      <p>• Faculty approval workflow</p>
                      <p>• Portfolio generation demo</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <button
                  onClick={() => setDemoModalOpen(false)}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200"
                >
                  Close Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;