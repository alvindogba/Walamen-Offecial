import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export default function ContactCollaboration() {
  return (
    <section className="bg-[#002B5C] text-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2">
        {/* Left side content */}
        <div className="p-12 lg:p-16">
          {/* Section title with underline */}
          <div className="relative mb-8">
            <div className="w-12 h-0.5 bg-secondary absolute -top-3"></div>
            <h2 className="text-sm font-medium uppercase tracking-wider">
              About Us
            </h2>
          </div>

          {/* Main heading */}
          <h3 className="text-3xl font-light mb-6">
            Walamen in Focus
          </h3>

          {/* Description */}
          <p className="text-[#D9D9D9] text-base mb-12 leading-relaxed">
            Personalized service, deep industry knowledge, and a commitment to
            excellence—that's what clients can expect from the dedicated
            Walamen team.
          </p>

          {/* Navigation links */}
          <div className="space-y-6">
            {['Our Team', 'More About Us', 'Explore Careers', 'Contact Us'].map((text) => (
              <Link
                key={text}
                to={`/${text.toLowerCase().replace(/\s+/g, '-')}`}
                className="group block"
              >
                <div className="flex items-center justify-between pb-3 border-b border-white/20">
                  <span className="text-lg hover:text-secondary transition-colors">
                    {text}
                  </span>
                  <ArrowRightIcon className="w-5 h-5 text-secondary group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Right side - Image and cards */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />

          {/* Bottom cards */}
          <div className="absolute bottom-0 left-0 right-0 grid grid-cols-2">
            {/* Left card */}
            <Link
              to="/careers/early"
              className="group bg-[#e63a47] px-4 py-8 transition-colors sm:px-2 hover:bg-[#e63a47]"
            >
              <h4 className="text-xl font-light mb-4">
              Ready to kickstart your career journey?              </h4>
              <div className="inline-flex items-center space-x- text-white">
                <span>Career Pathways</span>
                <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center group-hover:bg-white group-hover:text-[#0088CC] transition-all">
                  <ArrowRightIcon className="w-4 h-4" />
                </div>
              </div>
            </Link>

            {/* Right card */}
            <Link
              to="/careers/experienced"
              className="group bg-[#4A4A4A] px-4 py-8 transition-colors sm:px-2 hover:bg-[#333333]"
            >
              <h4 className="text-xl font-light mb-4">
              Ready to take your career to the next level?
              </h4>
              <div className="inline-flex items-center space-x-2 text-white">
                <span>Advanced Careers</span>
                <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center group-hover:bg-white group-hover:text-[#4A4A4A] transition-all">
                  <ArrowRightIcon className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}