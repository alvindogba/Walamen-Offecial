import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
}

interface NewsInsightsTemplateProps {
  pageTitle: string;
  heroSubtitle?: string;
  categories: string[];
  articles: Article[];
}

export default function NewsInsightsTemplate({
  pageTitle,
  heroSubtitle,
  categories,
  articles
}: NewsInsightsTemplateProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-700">
          {/* Abstract Artistic Background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('/abstract-brushstroke.jpg')] bg-cover bg-center transform scale-110 animate-slow-drift"></div>
          </div>
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            {pageTitle}
          </motion.h1>
          {heroSubtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/90 max-w-2xl"
            >
              {heroSubtitle}
            </motion.p>
          )}
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Category Tabs */}
            <div className="flex overflow-x-auto pb-2 md:pb-0 -mx-4 md:mx-0 px-4 md:px-0">
              <button
                onClick={() => setActiveCategory('All')}
                className={`shrink-0 px-6 py-2 rounded-full mr-2 transition-colors ${
                  activeCategory === 'All'
                    ? 'bg-emerald-500 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`shrink-0 px-6 py-2 rounded-full mr-2 transition-colors ${
                    activeCategory === category
                      ? 'bg-emerald-500 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-auto">
              <input
                type="text"
                placeholder="Search insights..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-64 pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
              <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="aspect-[16/9] overflow-hidden rounded-lg mb-4">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-500 space-x-4">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                  {article.title}
                </h2>
                <p className="text-gray-600 line-clamp-2">
                  {article.excerpt}
                </p>
                <a
                  href={`/insights/${article.id}`}
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-700 transition-colors mt-2"
                >
                  <span>Read More</span>
                  <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}