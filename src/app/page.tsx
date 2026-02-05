'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ArrowRight, Star, Code2, Zap, Users, Award, Target, Lightbulb } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function PentacorePortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Solutions', id: 'solutions' },
    { label: 'Expertise', id: 'expertise' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' }
  ];

  const solutions = [
    {
      title: 'Restaurant Management Suite',
      description: 'Complete online ordering system with POS integration, inventory management, and real-time analytics for restaurants, cafés, and bakeries.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      link: '#',
      icon: '🍽️'
    },
    {
      title: 'Fleet Management Platform',
      description: 'Advanced fleet tracking and management system with route optimization, driver analytics, and delivery coordination capabilities.',
      tech: ['React Native', 'TypeScript', 'Firebase', 'Google Maps API'],
      link: '#',
      icon: '🚚'
    },
    {
      title: 'Attendance Management System',
      description: 'Attendance Management System is a comprehensive solution designed to streamline employee attendance tracking and management for businesses of all sizes. It eliminates manual attendance tracking and provides real-time insights into employee attendance patterns.',
      tech: ['React', 'Node.js', 'MongoDB', 'Payment Gateways'],
      link: '#',
      icon: '💳'
    },
    {
      title: 'Business Analytics Dashboard',
      description: 'Real-time business intelligence platform with customizable reports, sales tracking, and performance metrics visualization.',
      tech: ['React', 'TypeScript', 'Chart.js', 'REST API'],
      link: '#',
      icon: '📊'
    },
    {
      title: 'Ai Automations',
      description: 'Ai Automations is a comprehensive solution designed to streamline employee attendance tracking and management for businesses of all sizes. It eliminates manual attendance tracking and provides real-time insights into employee attendance patterns.',
      tech: ['React', 'Node.js', 'MongoDB', 'Payment Gateways'],
      link: '#',
      icon: '🐱‍👤'
    },
    {
      title: 'Website and mobile App',
      description: 'Website and mobile App is a comprehensive solution designed to streamline employee attendance tracking and management for businesses of all sizes. It eliminates manual attendance tracking and provides real-time insights into employee attendance patterns.',
      tech: ['React', 'TypeScript', 'Chart.js', 'REST API'],
      link: '#',
      icon: '📊'
    }
  ];

  const expertise = [
    { category: 'Frontend Development', items: ['React.js', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js'] },
    { category: 'Backend Solutions', items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Firebase'] },
    { category: 'Cloud & DevOps', items: ['AWS', 'Docker', 'CI/CD', 'Kubernetes', 'Git'] },
    { category: 'Integrations', items: ['Payment APIs', 'Maps APIs', 'SMS/Email', 'CRM Systems', 'Analytics'] }
  ];

  const testimonials = [
    {
      author: 'Sarah Johnson',
      company: 'Sunrise Café Chain',
      text: 'Pentacore transformed our business with their online ordering system. Orders increased by 200% in the first month. The team is professional, responsive, and truly understands hospitality tech.',
      image: '👩‍💼'
    },
    {
      author: 'Ahmed Hassan',
      company: 'Express Logistics',
      text: 'The fleet management solution from Pentacore reduced our operational costs by 35%. Their ongoing support and continuous improvements make them a true technology partner.',
      image: '👨‍💼'
    },
    {
      author: 'Emily Chen',
      company: 'Artisan Bakery Co',
      text: 'Outstanding work! The custom POS system handles our complex inventory and multi-location needs perfectly. Pentacore delivers quality solutions that actually work.',
      image: '👩‍💻'
    }
  ];

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="bg-white text-gray-900">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-cyan-500 via-blue-600 to-blue-900 text-white sticky top-0 z-50 shadow-xl">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-[75px]">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-20 h-20 flex justify-center">
                <img
                  src="/penta.png"
                  alt="Pentacore Logo"
                  className="w-20 h-20 object-contain"
                />
              </div>
              <h1 className="text-xl md:text-2xl font-bold tracking-tight">
                PENTACORE
              </h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-white hover:text-cyan-200 transition-colors duration-300 text-sm font-medium"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-white text-blue-900 hover:bg-cyan-100 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-md"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-white"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="pb-4 border-t border-blue-700 flex flex-col gap-2">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-white text-left py-3 text-sm font-medium hover:text-cyan-200 transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-white text-blue-900 py-3 px-4 rounded-lg font-semibold text-sm mt-2"
              >
                Get Started
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="bg-gradient-to-br from-blue-900 via-blue-600 to-cyan-400 text-white py-20 md:py-32 px-4 min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-300 rounded-full blur-3xl"></div>
        </div>

        <div className=" w-full text-center relative">
          {/* Logo Display */}
          <div data-aos="fade-down" className="flex justify-center md:-mt-[10rem] -mt-[6rem]">
            <div className="p-6 ">
              <img
                src="/penta.png"
                alt="Pentacore"
                className="w-500 h-500 md:w-[30rem] md:h-[30rem] object-contain"
                width={500}
                height={500}
              />
            </div>
          </div>

          <h2
            data-aos="fade-up"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            Transform Your Business with <span className="text-cyan-300">Pentacore</span>
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-lg md:text-xl mb-4 opacity-95 leading-relaxed max-w-4xl mx-auto"
          >
            We build cutting-edge online ordering systems, fleet management platforms, and POS solutions for restaurants, cafés, dessert shops, and bakeries.
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex gap-4 justify-center flex-wrap mb-12"
          >
            <button
              onClick={() => scrollToSection('solutions')}
              className="bg-white text-blue-900 hover:bg-cyan-100 px-8 py-4 rounded-lg font-bold inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 shadow-xl text-base md:text-lg"
            >
              Explore Solutions <ArrowRight size={20} />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-bold transition-all duration-300 hover:-translate-y-1 text-base md:text-lg"
            >
              Let's Talk
            </button>
          </div>

          {/* Stats */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16"
          >
            {[
              { number: '500+', label: 'Projects Delivered' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '24/7', label: 'Support Available' },
              { number: '50+', label: 'Team Members' }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl md:text-4xl font-bold text-cyan-300 mb-2">{stat.number}</div>
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-28 px-4 bg-gradient-to-b from-white to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              data-aos="fade-up"
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-900 to-cyan-600 bg-clip-text text-transparent"
            >
              Why Choose Pentacore?
            </h2>
            <p data-aos="fade-up" data-aos-delay="100" className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're not just developers – we're your technology partners committed to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Code2,
                title: 'Enterprise-Grade Solutions',
                desc: 'We build scalable, maintainable systems using cutting-edge technologies that grow with your business.'
              },
              {
                icon: Zap,
                title: 'Lightning-Fast Performance',
                desc: 'Our optimized applications deliver seamless experiences across all devices, ensuring customer satisfaction.'
              },
              {
                icon: Users,
                title: 'Collaborative Approach',
                desc: 'We work closely with you, providing transparent communication and dedicated support throughout your journey.'
              },
              {
                icon: Award,
                title: 'Proven Track Record',
                desc: 'With 500+ successful projects, we have the experience to handle any challenge your business faces.'
              },
              {
                icon: Target,
                title: 'Results-Driven',
                desc: 'We focus on ROI, helping businesses increase revenue, reduce costs, and improve operational efficiency.'
              },
              {
                icon: Lightbulb,
                title: 'Innovation First',
                desc: 'We stay ahead of technology trends to give you competitive advantages in your market.'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-600 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-16 h-16 rounded-lg flex items-center justify-center mb-5">
                  <item.icon size={32} className="text-white" />
                </div>
                <h3 className="text-blue-900 mb-4 text-xl font-bold">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 md:py-28 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              data-aos="fade-up"
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-900 to-cyan-600 bg-clip-text text-transparent"
            >
              Our Solutions
            </h2>
            <p data-aos="fade-up" data-aos-delay="100" className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to your industry needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-blue-100"
              >
                <div className="text-6xl p-8 bg-gradient-to-br from-blue-900 to-cyan-600 text-center">
                  <span className="drop-shadow-lg">{solution.icon}</span>
                </div>
                <div className="p-8">
                  <h3 className="text-blue-900 mb-4 text-2xl font-bold">
                    {solution.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {solution.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {solution.tech.map((t, i) => (
                      <span
                        key={i}
                        className="bg-white text-blue-900 px-4 py-2 rounded-full text-xs font-semibold border border-blue-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={solution.link}
                    className="text-blue-600 hover:text-cyan-600 font-bold inline-flex items-center gap-2 transition-all hover:gap-3"
                  >
                    Learn More <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20 md:py-28 px-4 bg-gradient-to-b from-cyan-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              data-aos="fade-up"
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-900 to-cyan-600 bg-clip-text text-transparent"
            >
              Our Expertise
            </h2>
            <p data-aos="fade-up" data-aos-delay="100" className="text-lg text-gray-600 max-w-3xl mx-auto">
              Mastery across the full technology stack to deliver complete solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((skillGroup, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-600"
              >
                <h3 className="text-blue-900 mb-6 text-xl font-bold">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 md:py-28 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              data-aos="fade-up"
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-900 to-cyan-600 bg-clip-text text-transparent"
            >
              Client Success Stories
            </h2>
            <p data-aos="fade-up" data-aos-delay="100" className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from businesses we've helped transform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      fill="#0891b2"
                      color="#0891b2"
                    />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-blue-200">
                  <span className="text-4xl">
                    {testimonial.image}
                  </span>
                  <div>
                    <p className="font-bold text-blue-900">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-28 px-4 bg-gradient-to-b from-cyan-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2
              data-aos="fade-up"
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-900 to-cyan-600 bg-clip-text text-transparent"
            >
              Let's Build Something Amazing Together
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Ready to transform your business? Get in touch with our team and let's discuss your project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <a
              href="mailto:hello@pentacore.com"
              data-aos="fade-up"
              data-aos-delay="300"
              className="bg-white p-8 rounded-xl no-underline text-center border-l-4 border-blue-600 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail size={28} className="text-white" />
              </div>
              <p className="font-bold text-blue-900 mb-2 text-lg">
                Email Us
              </p>
              <p className="text-sm text-gray-600">
                hello@pentacore.com
              </p>
            </a>
            <a
              href="https://linkedin.com/company/pentacore"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay="400"
              className="bg-white p-8 rounded-xl no-underline text-center border-l-4 border-blue-600 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Linkedin size={28} className="text-white" />
              </div>
              <p className="font-bold text-blue-900 mb-2 text-lg">
                LinkedIn
              </p>
              <p className="text-sm text-gray-600">
                /company/pentacore
              </p>
            </a>
            <a
              href="https://github.com/pentacore"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay="500"
              className="bg-white p-8 rounded-xl no-underline text-center border-l-4 border-blue-600 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Github size={28} className="text-white" />
              </div>
              <p className="font-bold text-blue-900 mb-2 text-lg">
                GitHub
              </p>
              <p className="text-sm text-gray-600">
                /pentacore
              </p>
            </a>
          </div>

          {submitted && (
            <div className="bg-green-50 border-l-4 border-green-500 text-green-800 p-5 rounded-lg mb-8 text-center font-medium">
              ✓ Thank you! Our team will get back to you within 24 hours.
            </div>
          )}

          <form
            onSubmit={handleFormSubmit}
            className="bg-white p-10 rounded-2xl border-t-4 border-blue-600 shadow-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block mb-3 font-semibold text-blue-900">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className="w-full p-4 border-2 border-blue-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block mb-3 font-semibold text-blue-900">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  className="w-full p-4 border-2 border-blue-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                  placeholder="john@company.com"
                />
              </div>
            </div>
            <div className="mb-8">
              <label className="block mb-3 font-semibold text-blue-900">
                Tell Us About Your Project *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                required
                rows={6}
                className="w-full p-4 border-2 border-blue-200 rounded-lg resize-y focus:border-blue-600 focus:outline-none transition-colors"
                placeholder="Describe your business needs, timeline, and goals..."
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-4 px-10 rounded-lg font-bold w-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-500 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12" >
            {/* Company Info */}
            <div>
              <div className="flex items-center">
                <div className="w-20 h-20 flex items-center justify-center " >
                  <img
                    src="/penta.png"
                    alt="Pentacore"
                    className="w-20 h-20 object-contain mt-[-4rem]"
                  />
                </div>
                <h3 className="text-2xl font-bold">PENTACORE</h3>
              </div>
              <p className="text-cyan-100 leading-relaxed">
                Transforming businesses with innovative technology solutions. Your success is our mission.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <div className="space-y-3">
                {navLinks.map(link => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="block text-cyan-100 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-bold mb-6">Connect With Us</h4>
              <div className="flex gap-4 mb-6">
                <a
                  href="https://github.com/pentacore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-all"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com/company/pentacore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-all"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:hello@pentacore.com"
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-all"
                >
                  <Mail size={24} />
                </a>
              </div>
              <p className="text-cyan-100 text-sm">
                📍 Global Team • 24/7 Support<br />
                📧 hello@pentacore.com
              </p>
            </div>
          </div>

          <div className="border-t border-cyan-400/30 pt-8 text-center">
            <p className="text-cyan-100">
              © 2026 Pentacore. All Rights Reserved. Built with excellence.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}