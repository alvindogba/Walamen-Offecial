import NewsInsightsTemplate from "../NewsInsightTemplete";

const NewInsight = () => {
  return (
    <NewsInsightsTemplate
      pageTitle="New Insight"
      heroSubtitle="Stay up to date with the latest news and insights from the world of technology."
      categories={['All', 'Technology', 'Business', 'Design', 'Development']}
      articles={[
        {
          title: 'The Future of Web Development',
          excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel urna vitae turpis tincidunt.',
          category: 'Development',
          image: 'https://source.unsplash.com/400x300/?web-development',
          date: '2025-01-14',
          readTime: '5 min',
        },
        {
          title: 'The Rise of Artificial Intelligence',
          excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel urna vitae turpis tincidunt.',
          category: 'Technology',
          image: 'https://source.unsplash.com/400x300/?artificial-intelligence',
          date: '2025-01-14',
          readTime: '5 min',
        },
        {
          title: 'Design Trends for 2025',
          excerpt: 'Explore the top design trends that are shaping the future of user experience and user interfaces.',
          category: 'Design',
          image: 'https://source.unsplash.com/400x300/?design-trends',
          date: '2025-01-14',
          readTime: '4 min',
        },
        {
          title: 'Business Strategies for the Digital Age',
          excerpt: 'How businesses can adapt and thrive in a rapidly evolving digital landscape.',
          category: 'Business',
          image: 'https://source.unsplash.com/400x300/?business',
          date: '2025-01-14',
          readTime: '6 min',
        },
      ]}
    />
  );
};

export default NewInsight;
