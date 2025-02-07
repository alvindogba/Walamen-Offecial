import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const events = [
  {
    date: 'March 15, 2025',
    title: 'Webinar: Leveraging AI for Sustainable Development',
    type: 'Webinar',
    time: '2:00 PM EST'
  },
  {
    date: 'April 10, 2025',
    title: 'Innovation Lab Open Day',
    type: 'Event',
    time: '10:00 AM EST'
  },
  {
    date: 'April 25, 2025',
    title: 'Digital Transformation Summit',
    type: 'Conference',
    time: '9:00 AM EST'
  },
  {
    date: 'May 5, 2025',
    title: 'Sustainability Workshop',
    type: 'Workshop',
    time: '1:00 PM EST'
  }
];

export default function EventCalendar() {
  return (
    <section className="py-20 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary"
          >
            Upcoming Events
          </motion.h2>
          <Link
            to="/events"
            className="btn btn-primary inline-flex items-center space-x-2"
          >
            <span>View All Events</span>
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg group hover:shadow-xl transition-shadow"
            >
              <div className="text-secondary font-semibold mb-2">{event.date}</div>
              <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-secondary transition-colors">
                {event.title}
              </h3>
              <div className="text-gray mb-4">
                <div>{event.type}</div>
                <div>{event.time}</div>
              </div>
              <Link
                to={`/events/${event.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="inline-flex items-center space-x-2 text-secondary group-hover:text-primary"
              >
                <span>Register Now</span>
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}