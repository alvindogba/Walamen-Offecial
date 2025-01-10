
interface NavLinksProps {
  onItemClick?: () => void;
}

const NavLinks = ({ onItemClick }: NavLinksProps) => {
  const navigationGroups = [
    {
      title: 'Industries',
      links: [
        { name: 'Education', href: '/industries/education' },
        { name: 'Engineering and Building Construction', href: '/industries/engineering-building-construction' },
        { name: 'Agriculture', href: '/industries/agriculture' },
        { name: 'Social Sector', href: '/industries/social-sector' },
        { name: 'Real Estate', href: '/industries/real-estate' },
        { name: 'Logistic and Infrastructure', href: '/industries/logistics-infrastructure' },
        { name: 'Technology', href: '/industries/technology' }
      ]
    },
    {
      title: 'Insight',
      links: [
        { name: 'Digital Transformation', href: '#' },
        { name: 'Sustainability', href: '#' },
        { name: 'Economic Trends', href: '#' },
        { name: 'Leadership & Innovation', href: '#' },
        { name: 'Data & Analytics', href: '#' }
      ]
    },
    {
      title: 'About',
      links: [
        { name: 'Our Firm', href: '#' },
        { name: 'Our People', href: '#' },
        { name: 'Our History', href: '#' },
        { name: 'Our Values', href: '#' },
        { name: 'Our Mission', href: '#' }
      ]
    },
    {
      title: 'Careers',
      links: [
        { name: 'Search Jobs', href: '#' },
        { name: 'Students', href: '#' },
        { name: 'Experienced', href: '#' },
        { name: 'Life at Walamen', href: '#' }
      ]
    }
  ];

  return (
    <>
      {navigationGroups.map((group) => (
        <div key={group.title} className="space-y-4">
          <h3 className="text-xl font-bold text-primary">{group.title}</h3>
          <ul className="space-y-3">
            {group.links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-gray-600 hover:text-secondary transition-colors duration-200"
                  onClick={onItemClick}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default NavLinks;