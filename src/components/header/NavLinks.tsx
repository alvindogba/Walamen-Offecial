import { Link } from "react-router-dom";
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
        { name: 'Digital Transformation', href: '/insights/economic-trends' },
        { name: 'Sustainability', href: '/insights/sustainability' },
        { name: 'Economic Trends', href: '/insights/economic-trends' },
        { name: 'Leadership & Innovation', href: '/insights/leadership-innovation' },
        { name: 'Data & Analytics', href: '/insights/data-analytics' }
      ]
    },
    {
      title: 'About',
      links: [
        { name: 'Our Firm', href: '/about/ourfirm' },
        { name: 'Our History', href: '/about/ourhistory' },
        { name: 'Our Values', href: '/about/ourvalues' },
        { name: 'Our Mission', href: '/about/ourmission' }
      ]
    },
    {
      title: 'Careers',
      links: [
        { name: 'Search Jobs', href: '/careers/searchjobs' },
        { name: 'Students', href: '/careers/students' },
        { name: 'Experienced', href: '/careers/experienced' },
        { name: 'Life at Walamen', href: '/careers/life_at_walamen' }
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
                <Link
                  to={link.href}
                  className="text-gray-600 hover:text-secondary transition-colors duration-200"
                  onClick={onItemClick}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default NavLinks;