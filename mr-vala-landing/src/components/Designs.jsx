import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

const designs = [
  {
    id: 1,
    title: 'Elegant Evening Wear',
    category: 'Dresses',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop',
  },
  {
    id: 2,
    title: 'Contemporary Casuals',
    category: 'Tops & Blouses',
    image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&h=500&fit=crop',
  },
  {
    id: 3,
    title: 'Traditional Fusion',
    category: 'Ethnic Wear',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=500&fit=crop',
  },
]

const Designs = () => {
  return (
    <section className="section-padding relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary/50 to-bg-primary"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-accent-gold" />
            <span className="text-accent-gold font-medium">Our Creations</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Exquisite <span className="gradient-text">Designs</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Browse our collection of premium women garments crafted with excellence
          </p>
        </motion.div>

        {/* Design Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {designs.map((design, index) => (
            <motion.div
              key={design.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Card */}
              <div className="aspect-[4/5] relative">
                {/* Image */}
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  src={design.image}
                  alt={design.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Glass overlay on hover */}
                <div className="absolute inset-0 glass opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-accent-cyan text-sm font-medium">{design.category}</span>
                  <h3 className="text-xl font-semibold text-white mt-1 mb-4">{design.title}</h3>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-accent-gold font-medium group/link"
                  >
                    View Dealer Catalog
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-purple/30 to-accent-magenta/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Designs
