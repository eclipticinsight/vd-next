'use client';
 
import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  Sparkles,
  Shield,
  Zap,
  Users,
  Globe,
  Star,
  Award,
  Heart,
} from 'lucide-react';
 
// Custom social icons
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);
 
const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.162 5.656c-.636.283-1.32.475-2.038.56.733-.44 1.296-1.137 1.56-1.968-.686.406-1.446.7-2.252.86A3.552 3.552 0 0 0 16.616 4c-1.964 0-3.556 1.592-3.556 3.556 0 .28.032.552.092.813-2.956-.148-5.577-1.564-7.336-3.718-.306.525-.482 1.137-.482 1.789 0 1.234.628 2.322 1.585 2.962-.583-.018-1.131-.179-1.61-.446v.045c0 1.724 1.226 3.162 2.852 3.489-.298.081-.612.125-.936.125-.229 0-.452-.022-.669-.063.453 1.414 1.77 2.444 3.328 2.472A7.117 7.117 0 0 1 3 19.54a10.04 10.04 0 0 0 5.428 1.593c6.514 0 10.079-5.397 10.079-10.076 0-.154-.004-.307-.01-.459.693-.5 1.294-1.125 1.77-1.838-.632.28-1.313.468-2.028.552z" />
  </svg>
);
 
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-9.75 7.5H7.5V18h1.75V10.5zM9.375 8.25a1.03 1.03 0 1 0 0-2.06 1.03 1.03 0 0 0 0 2.06zM18 18h-1.75v-3.75c0-.9-.6-1.25-1.125-1.25-.525 0-1.125.35-1.125 1.25V18H12v-7.5h1.75v1.125c.3-.45.9-1.125 2.1-1.125C17.05 10.5 18 11.625 18 13.875V18z" />
  </svg>
);
 
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zM18.5 6a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
  </svg>
);
 
const ContactPage = () => {
  const scrollToContent = () => {
    document.getElementById('contact-content')?.scrollIntoView({ behavior: 'smooth' });
  };
 
  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Phone',
      details: '+1(727) 564-9476',
      subDetails: 'Mon-Fri 9am-6pm EST',
      gradient: 'from-green-500 to-emerald-600',
      lightBg: 'bg-green-50',
      textColor: 'text-green-600',
      iconBg: 'bg-gradient-to-br from-green-500 to-emerald-600',
    },
    {
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Email',
      details: 'connect@visionarydynamics.com',
      subDetails: 'We reply within 24 hours',
      gradient: 'from-blue-500 to-indigo-600',
      lightBg: 'bg-blue-50',
      textColor: 'text-blue-600',
      iconBg: 'bg-gradient-to-br from-blue-500 to-indigo-600',
    },
    {
      icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Office',
      details: '7901 4th St N STE 300 St. Petersburg, Florida-33702 USA',
      gradient: 'from-purple-500 to-pink-600',
      lightBg: 'bg-purple-50',
      textColor: 'text-purple-600',
      iconBg: 'bg-gradient-to-br from-purple-500 to-pink-600',
    },
  ];
 
  const socialLinks = [
    { icon: <TwitterIcon className="w-4 h-4 sm:w-5 sm:h-5" />, href: 'https://x.com/VisionaryD64371', label: 'Twitter', color: 'hover:bg-[#1DA1F2]' },
    { icon: <LinkedinIcon className="w-4 h-4 sm:w-5 sm:h-5" />, href: 'https://in.linkedin.com/company/visionarydynamicsas', label: 'LinkedIn', color: 'hover:bg-[#0A66C2]' },
    { icon: <FacebookIcon className="w-4 h-4 sm:w-5 sm:h-5" />, href: 'https://www.facebook.com/visionarydynamicsas/', label: 'Facebook', color: 'hover:bg-[#1877F2]' },
    { icon: <InstagramIcon className="w-4 h-4 sm:w-5 sm:h-5" />, href: 'https://www.instagram.com/visionary.dynamics/', label: 'Instagram', color: 'hover:bg-[#E4405F]' },
  ];
 
  const features = [
    {
      icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Lightning Fast',
      description: 'Average response time under 2 hours',
    },
    {
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Secure & Private',
      description: 'Your data is encrypted and protected',
    },
    {
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Expert Team',
      description: 'Dedicated account managers for business clients',
    },
    {
      icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Global Support',
      description: 'Multi-language support available 24/7',
    },
  ];
 
  const stats = [
    { value: '10K+', label: 'Happy Clients', icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { value: '98%', label: 'Satisfaction', icon: <Star className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { value: '24/7', label: 'Support', icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { value: '2h', label: 'Response', icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5" /> },
  ];
 
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative min-h-[350px] sm:min-h-[400px] md:min-h-[450px] flex items-center justify-center overflow-hidden pt-20 lg:pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/95"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>
        </div>
 
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white/20 rounded-full animate-ping"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
 
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 md:mb-8">
            Let's{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h1>
 
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 leading-relaxed px-4">
            We're here to turn your ideas into reality. Join thousands of satisfied clients who've transformed
            their businesses with our support.
          </p>
 
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <button
              onClick={scrollToContent}
              className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-2xl shadow-blue-500/25 flex items-center gap-2 text-sm sm:text-base"
            >
              <span className="relative z-10">Get in Touch</span>
              <Send className="relative z-10 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            </button>
          </div>
        </div>
      </div>
 
      <div id="contact-content" className="relative -mt-12 sm:-mt-16 md:-mt-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 sm:top-40 left-10 sm:left-20 w-40 sm:w-56 md:w-72 h-40 sm:h-56 md:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 sm:opacity-20 animate-float-slow"></div>
          <div className="absolute bottom-20 sm:bottom-40 right-10 sm:right-20 w-40 sm:w-56 md:w-72 h-40 sm:h-56 md:h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 sm:opacity-20 animate-float-slow animation-delay-2000"></div>
        </div>
 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-8 sm:pb-10 md:pb-12">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              How can we{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                assist you?
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Choose the most convenient way to reach us. Our team is ready to help with anything you need.
            </p>
          </div>
        </div>
 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7 lg:gap-8 mb-6 sm:mb-8">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>
 
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 ${item.iconBg} rounded-xl flex items-center justify-center text-white mb-4 sm:mb-5 md:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}
                >
                  {item.icon}
                </div>
 
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-1 sm:mb-2 font-medium text-sm sm:text-base break-words">
                  {item.details}
                </p>
 
                <div
                  className={`absolute bottom-0 left-0 w-0 h-0.5 sm:h-1 bg-gradient-to-r ${item.gradient} group-hover:w-full transition-all duration-500 rounded-b-xl sm:rounded-b-2xl`}
                ></div>
              </div>
            ))}
          </div>
 
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl sm:rounded-3xl transform rotate-1 scale-105 opacity-10 blur-2xl"></div>
 
           <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
           <div className="flex flex-col lg:flex-row items-stretch">
                <div className="w-full lg:w-1/2 min-w-0 p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12">
                  <div className="mb-6 sm:mb-8">
                    <div className="flex items-center gap-1 sm:gap-2 mb-2">
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Send us a Message</h3>
                      <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500 animate-pulse" />
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Fill out the form below and we'll get back to you within 24 hours.
                    </p>
                  </div>
 
                  <div className="relative rounded-xl shadow-inner bg-white border border-gray-100">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                   
                    {/* IFRAME SECTION - Increased height to show submit button, removed overlay */}
                    <div className="relative w-full rounded-2xl overflow-hidden" style={{ height: '1850px' }}>
                      <iframe
                        src="https://forms.office.com/Pages/ResponsePage.aspx?id=yMabWpDCxEastsnhmE2W-mFI-VeFxbZOn60RulHW7UxUMjRWSlZJUU1RTVo0NFM2QkZFN0FWVTJVRi4u&embed=true"
                        title="Contact Form"
                        frameBorder="0"
                        className="w-full h-full border-0"
                        style={{
                          border: 'none',
                          overflow: 'auto',
                          display: 'block',
                        }}
                        allowFullScreen
                      />
                    </div>
                  </div>
 
                  <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm">
                    <div className="flex items-center gap-1 text-gray-500">
                      <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                      <span>256-bit SSL Secure</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500" />
                      <span>24h Response Time</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500">
                      <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500" />
                      <span>100% Satisfaction</span>
                    </div>
                  </div>
                </div>
 
<div className="w-full lg:w-1/2 min-w-0 relative bg-gradient-to-br from-slate-900 to-slate-800 p-6 sm:p-8 md:p-10 lg:p-12 text-white overflow-hidden flex flex-col justify-between min-h-0">                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-gradient-to-tr from-pink-500 to-orange-500 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
                  </div>
 
                  <div className="relative z-10">
                    <div className="mb-8 sm:mb-10">
                      <h3 className="text-2xl sm:text-3xl font-bold mb-5 sm:mb-6 md:mb-8 flex items-center gap-2">
                        <Award className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-yellow-400" />
                        Why choose us?
                      </h3>
 
                      <div className="grid grid-cols-1 gap-3 sm:gap-4">
                        {features.map((feature, index) => (
                          <div
                            key={index}
                            className="group flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-white/5 transition-all duration-300 cursor-default"
                          >
                            <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg flex-shrink-0">
                              {feature.icon}
                            </div>
                            <div>
                              <h4 className="font-semibold text-base sm:text-lg mb-0.5 sm:mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                                {feature.title}
                              </h4>
                              <p className="text-xs sm:text-sm text-gray-300">{feature.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
 
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10">
                      {stats.map((stat, index) => (
                        <div
                          key={index}
                          className="bg-white/5 rounded-xl p-3 sm:p-4 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 text-center"
                        >
                          <div className="flex justify-center mb-1 sm:mb-2">{stat.icon}</div>
                          <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-400 mb-0.5 sm:mb-1">
                            {stat.value}
                          </div>
                          <div className="text-xs sm:text-sm text-gray-300">{stat.label}</div>
                          <div className="w-full bg-white/10 h-1 rounded-full mt-2">
                            <div
                              className={`w-[${
                                stat.value === '98%' ? '98' : stat.value === '10K+' ? '85' : stat.value === '24/7' ? '100' : '95'
                              }%] bg-blue-400 h-1 rounded-full`}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
 
                    <div className="mb-8 sm:mb-10 bg-white/5 rounded-xl p-4 sm:p-5 md:p-6 backdrop-blur-sm border border-white/10">
                      <div className="flex gap-1 mb-2 sm:mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-xs sm:text-sm text-gray-200 mb-3 sm:mb-4 italic">
                        "The support team went above and beyond to help us. Response time was incredible!"
                      </p>
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          SJ
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm font-medium">Sarah Johnson</p>
                          <p className="text-xs text-gray-400">CEO, TechStart</p>
                        </div>
                      </div>
                    </div>
 
                    <div>
                      <p className="text-base sm:text-lg font-medium mb-3 sm:mb-4 flex items-center gap-2">
                        <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                        Connect with us
                      </p>
                      <div className="flex gap-2 sm:gap-3 flex-wrap">
                        {socialLinks.map((social, index) => (
                          <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-white/10 rounded-xl flex items-center justify-center ${social.color} transition-all duration-300 hover:scale-110 hover:rotate-3`}
                            aria-label={social.label}
                          >
                            {social.icon}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default ContactPage;
 