import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import axios from 'axios';
import { motion } from 'framer-motion';

const socket = io('http://localhost:5000'); // Update this with your deployed backend URL

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [messages, setMessages] = useState([]);
  const [notification, setNotification] = useState('');

  useEffect(() => {
    // Listen for real-time notifications
    socket.on('newMessage', (newMessage) => {
      setNotification(`New message from ${newMessage.name}`);
      setMessages((prev) => [newMessage, ...prev]); // Update messages in real-time
      setTimeout(() => setNotification(''), 5000); // Hide notification after 5 sec
    });

    return () => socket.off('newMessage');
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/messages/send', formData);
      console.log('Message Sent:', response.data);
      setFormData({ name: '', email: '', message: '' }); // Clear form
    } catch (error) {
      console.error('Error sending message:', error.response?.data || error.message);
    }
  };

  return (
    <div className="pt-16">
      {notification && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-500 text-white p-4 rounded-lg fixed top-4 left-1/2 transform -translate-x-1/2"
        >
          {notification}
        </motion.div>
      )}

      <div className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-bold mb-6">
            Contact Us
          </motion.h1>
          <p className="text-xl">Get in touch with our team</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-primary mb-6">Send us a message</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea rows={4} name="message" value={formData.message} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"></textarea>
              </div>
              <button type="submit" className="w-full bg-secondary hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Our Office</h3>
              <p className="text-gray">123 Innovation Street<br />Tech City, TC 12345</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Contact Info</h3>
              <p className="text-gray">Email: contact@walatech.com<br />Phone: (555) 123-4567</p>
            </div>
          </motion.div>
        </div>

        {/* Display recent messages */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-primary mb-4">Recent Messages</h2>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            {messages.length === 0 ? (
              <p>No messages yet.</p>
            ) : (
              messages.map((msg) => (
                <div key={msg.id} className="p-4 border-b border-gray-300">
                  <p><strong>{msg.name}</strong> ({msg.email})</p>
                  <p className="text-gray-700">{msg.message}</p>
                  <p className="text-xs text-gray-500">{new Date(msg.createdAt).toLocaleString()}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
