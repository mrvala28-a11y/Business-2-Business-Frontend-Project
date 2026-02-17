import React from 'react'
import { motion } from 'framer-motion'
import { Scissors, PenTool, Eye, Flame, Package, Truck } from 'lucide-react'

const processes = [
  {
    icon: Scissors,
    title: 'Cutting',
    description: 'Precision cutting with advanced technology',
  },
  {
    icon: PenTool,
    title: 'Stitching',
    description: 'Expert craftsmanship for perfect seams',
  },
  {
    icon: Eye,
    title: 'Checking',
    description: 'Rigorous quality control at every step',
  },
  {
    icon: Flame,
    title: 'Press',
    description: 'Professional finishing for crisp appearance',
  },
  {
    icon: Package,
    title: 'Packing',
    description: 'Careful packaging ensuring safe delivery',
  },
  {
    icon: Truck,
    title: 'Dispatch',
    description: 'On-time shipping to your location',
  },
]

const Process = () => {
  return (
    <section id="process" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Manufacturing <span className="gradient-text">Process</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Our streamlined process ensures the highest quality garments delivered on time
          </p>
        </motion.div>

        {/* Process Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {processes.map((process, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-2xl p-6 text-center group cursor-pointer relative"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-purple/20 to-accent-magenta/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              
              <div className="relative z-10">
                {/* Step number */}
                <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-gradient-to-r from-accent-gold to-yellow-600 flex items-center justify-center text-black font-bold text-sm">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-r from-accent-purple to-accent-magenta flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <process.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="font-semibold text-white mb-2">{process.title}</h3>
                <p className="text-xs text-text-secondary">{process.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Arrow indicators for desktop */}
        <div className="hidden lg:flex justify-center mt-8 gap-2">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
              className="text-accent-cyan"
            >
              →
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
