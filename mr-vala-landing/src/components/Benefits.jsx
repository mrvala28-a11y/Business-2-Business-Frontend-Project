import React from 'react'
import { motion } from 'framer-motion'
import { Upload, Truck, MapPin, History, MessageCircle, DollarSign } from 'lucide-react'

const benefits = [
  {
    icon: Upload,
    title: 'Custom Design Upload',
    description: 'Upload your unique designs and get them manufactured with precision',
  },
  {
    icon: Truck,
    title: 'Partial Delivery Option',
    description: 'Flexible delivery schedules to meet your business requirements',
  },
  {
    icon: MapPin,
    title: 'Live Order Tracking',
    description: 'Real-time tracking of your orders from production to delivery',
  },
  {
    icon: History,
    title: 'Full Order History',
    description: 'Complete access to all your past orders and transactions',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Notifications',
    description: 'Instant updates directly on WhatsApp for quick communication',
  },
  {
    icon: DollarSign,
    title: 'Dealer Specific Pricing',
    description: 'Exclusive wholesale pricing structure for our trusted dealers',
  },
]

const Benefits = () => {
  return (
    <section id="benefits" className="section-padding bg-bg-secondary relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-dots opacity-10"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Dealer <span className="gradient-text">Benefits</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Exclusive advantages designed to help your business grow with MR.VALA
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass rounded-2xl p-6 group cursor-pointer"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-purple flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-text-secondary text-sm">{benefit.description}</p>
              
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-cyan/10 to-accent-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
