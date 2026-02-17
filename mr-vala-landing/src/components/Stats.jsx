import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, Factory, Users } from 'lucide-react'

const StatItem = ({ icon: Icon, target, label, suffix = '', delay }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = target
      const duration = 2000
      const increment = end / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isInView, target])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="glass rounded-2xl p-8 text-center group hover:scale-105 transition-transform duration-300"
    >
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-accent-purple to-accent-magenta flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
        {count}
        {suffix}+
      </div>
      <div className="text-text-secondary font-medium">{label}</div>
    </motion.div>
  )
}

const Stats = () => {
  const stats = [
    {
      icon: Award,
      target: 10,
      label: 'Years Experience',
      delay: 0,
    },
    {
      icon: Factory,
      target: 50000,
      label: 'Monthly Production',
      delay: 0.2,
    },
    {
      icon: Users,
      target: 200,
      label: 'Active Dealers',
      delay: 0.4,
    },
  ]

  return (
    <section id="about" className="section-padding bg-bg-secondary relative">
      <div className="absolute inset-0 bg-dots opacity-20"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our <span className="gradient-text">Strength</span> in Numbers
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Decade of excellence in women garment manufacturing with unmatched production capacity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
