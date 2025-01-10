import { motion } from 'framer-motion';


const insights = [
  {
    title: 'Navigating Economic Trends in 2025',
    category: 'Economic Trends',
    image: '/images/trends.jpg',
    date: 'Feb 15, 2024'
  },
  {
    title: 'The Future of Digital Transformation',
    category: 'Technology',
    image: '/images/digital.jpg',
    date: 'Feb 10, 2024'
  },
  {
    title: 'Sustainable Practices in Modern Business',
    category: 'Sustainability',
    image: '/images/sustainable.jpg',
    date: 'Feb 5, 2024'
  }
];

export default function Insights() {
  return (
    <div className="pt-16">
      <div className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6"
          >
            Insights & Resources
          </motion.h1>
          <p className="text-xl">Stay informed with our latest thinking</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={insight.image}
                alt={insight.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-secondary text-sm font-semibold mb-2">
                  {insight.category}
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  {insight.title}
                </h3>
                <div className="text-gray text-sm">{insight.date}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}