import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function CallToAction() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-primary rounded-2xl p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')] opacity-10"></div>
          <div className="relative z-10 max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-6"
            >
              Ready to Transform Your Business?
            </motion.h2>
            <p className="text-white/80 mb-8">
              Let's discuss how we can help you achieve your goals through innovative solutions and expert guidance.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 bg-secondary hover:bg-red-700 text-white px-8 py-3 rounded-lg transition-colors"
            >
              <span>Get Started</span>
              <ArrowRightIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}