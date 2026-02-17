import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden"
    >
      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-20 right-10 w-64 h-64 border border-accent-purple/20 rounded-full"
        />
        <motion.div
          animate={{
            rotate: [0, -360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-20 left-10 w-96 h-96 border border-accent-cyan/10 rounded-full"
        />
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/3 left-1/4 w-20 h-20 bg-gradient-to-r from-accent-magenta/20 to-accent-purple/20 rounded-2xl blur-xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container-custom px-4 md:px-8 text-center relative z-10"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-text-secondary">
            <span className="w-2 h-2 bg-accent-gold rounded-full animate-pulse"></span>
            Premium B2B Garment Manufacturer
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          <span className="text-white">MR.VALA –</span>
          <br />
          <span className="gradient-text">Your Premium Women</span>
          <br />
          <span className="text-white">Garment Manufacturing Partner</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10"
        >
          <span className="inline-flex items-center gap-4">
            <span className="text-accent-cyan">Custom Designs</span>
            <span className="w-1 h-1 bg-text-secondary rounded-full"></span>
            <span className="text-accent-magenta">Bulk Production</span>
            <span className="w-1 h-1 bg-text-secondary rounded-full"></span>
            <span className="text-accent-gold">On-Time Delivery</span>
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(251, 191, 36, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 bg-gradient-to-r from-accent-gold to-yellow-600 text-black font-semibold rounded-full flex items-center gap-2"
          >
            Become a Dealer
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(6, 182, 212, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-transparent border-2 border-accent-cyan text-accent-cyan font-semibold rounded-full hover:bg-accent-cyan hover:text-black transition-all duration-300"
          >
            Dealer Login
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-text-secondary/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-accent-cyan rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
