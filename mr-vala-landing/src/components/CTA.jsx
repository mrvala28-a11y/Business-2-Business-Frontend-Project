import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const CTA = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent-purple via-accent-magenta to-accent-cyan opacity-20"></div>
      
      {/* Light streak animation */}
      <motion.div
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 2,
        }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
      ></motion.div>
      
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-purple/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Start Your Wholesale Journey
            <br />
            With <span className="gradient-text">MR.VALA</span>
          </h2>
          
          <p className="text-lg text-text-secondary mb-8">
            Join 200+ successful dealers who trust MR.VALA for premium quality women garments. 
            Experience the difference of working with a true manufacturing partner.
          </p>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(251, 191, 36, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            className="group px-10 py-5 bg-gradient-to-r from-accent-gold via-yellow-400 to-accent-gold text-black font-bold text-lg rounded-full flex items-center gap-3 mx-auto"
          >
            Become a Dealer Today
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <p className="mt-6 text-text-secondary text-sm">
            Questions? Contact us at <span className="text-accent-cyan">dealers@mrvala.com</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
