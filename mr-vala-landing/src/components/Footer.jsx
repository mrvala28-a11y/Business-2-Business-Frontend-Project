import React from 'react'
import { motion } from 'framer-motion'
import { Scissors, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, MessageCircle } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Process', href: '#process' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
  ]

  return (
    <footer className="bg-bg-secondary pt-16 pb-8">
      <div className="container-custom px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <motion.a
              href="#home"
              className="flex items-center gap-2 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-accent-gold to-yellow-600 flex items-center justify-center">
                <Scissors className="w-5 h-5 text-black" />
              </div>
              <span className="font-display text-2xl font-bold">
                <span className="text-white">MR.</span>
                <span className="gradient-text-gold">VALA</span>
              </span>
            </motion.a>
            <p className="text-text-secondary text-sm mb-4">
              Premium women garment manufacturing partner for businesses worldwide. 
              Quality craftsmanship meets modern design.
            </p>
            {/* WhatsApp Button */}
            <motion.a
              href="https://wa.me/1234567890"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-400 rounded-full hover:bg-green-500/30 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="font-medium">Chat on WhatsApp</span>
            </motion.a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-text-secondary hover:text-accent-cyan transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-text-secondary">
                <MapPin className="w-5 h-5 text-accent-magenta shrink-0 mt-0.5" />
                <span>123 Manufacturing Ave, Textile District, Mumbai, India</span>
              </li>
              <li className="flex items-center gap-3 text-text-secondary">
                <Phone className="w-5 h-5 text-accent-cyan shrink-0" />
                <span>+91 12345 67890</span>
              </li>
              <li className="flex items-center gap-3 text-text-secondary">
                <Mail className="w-5 h-5 text-accent-gold shrink-0" />
                <span>dealers@mrvala.com</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <p className="text-text-secondary text-sm mb-4">
              Stay updated with our latest designs and announcements
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 glass rounded-full flex items-center justify-center text-text-secondary hover:text-white hover:shadow-lg hover:shadow-accent-purple/30 transition-all"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-text-secondary text-sm">
              © {currentYear} MR.VALA. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-text-secondary hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-text-secondary hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-text-secondary hover:text-white transition-colors">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
