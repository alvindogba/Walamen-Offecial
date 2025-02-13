import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import axios from "axios";
import { motion } from "framer-motion";
import { CheckIcon } from '@heroicons/react/24/solid'; // or '@heroicons/react/24/outline'
import { useLoading } from "../LoadContext"; // Import the global loading context
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; // Import skeleton styles

const socket = io("https://walamen.com/"); // Update this with your deployed backend URL

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", subject: "" });
  const [notification, setNotification] = useState("");
  const { loading, setLoading } = useLoading(); // Use global loading state
  const [modalOpen, setModalOpen] = useState(false); // State to control modal visibility

  useEffect(() => {
    socket.on("newMessage", (newMessage) => {
      setNotification(`New message from ${newMessage.name}`);
      setTimeout(() => setNotification(""), 5000);
    });

    return () => {
      socket.off("newMessage");
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Set global loading state to true

    try {
      const response = await axios.post("https://walamen.com/api/send", formData);
      console.log("Message Sent:", response.data);
      setFormData({ name: "", email: "", message: "", subject: "" });
      setModalOpen(true); // Open the modal on successful submission
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Error sending message:", error.response?.data || error.message);
      } else {
        console.error("Error sending message:", error);
      }
    }

    setLoading(false); // Set global loading state to false
  };

  return (
    <div className="pt-16">
      {notification && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-500 text-white p-4 rounded-lg fixed top-10 left-1/2 transform -translate-x-1/2"
        >
          {notification}
        </motion.div>
      )}

      <div className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-bold mb-6">
            {loading ? <Skeleton width={200} height={50} /> : "Contact Us"}
          </motion.h1>
          <p className="text-xl">
            {loading ? <Skeleton width={300} /> : "Get in touch with our team"}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-primary mb-6">
              {loading ? <Skeleton width={200} /> : "Send us a message"}
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                {loading ? (
                  <Skeleton height={40} />
                ) : (
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                    required
                  />
                )}
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                {loading ? (
                  <Skeleton height={40} />
                ) : (
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                    required
                  />
                )}
              </div>

              {/* The subject area */}
              <div>
                <label className="block text-gray-700 mb-2">Subject</label>
                {loading ? (
                  <Skeleton height={40} />
                ) : (
                  <input
                    type="text"
                    name="subject"
                    placeholder="What your message is about"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                    required
                  />
                )}
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                {loading ? (
                  <Skeleton height={120} />
                ) : (
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                    required
                  ></textarea>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-secondary hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex justify-center items-center"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center">
                    <svg
                      className="animate-spin h-5 w-5 mr-3 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      ></path>
                    </svg>
                    Sending...
                  </div>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">
                {loading ? <Skeleton width={150} /> : "Our Office"}
              </h3>
              <p className="text-gray">
                {loading ? <Skeleton count={2} /> : "123 Innovation Street\nTech City, TC 12345"}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">
                {loading ? <Skeleton width={150} /> : "Contact Info"}
              </h3>
              <p className="text-gray">
                {loading ? <Skeleton count={2} /> : "Email: contact@walamen.com\nPhone: (555) 123-4567"}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 backdrop-blur-sm z-50 py-10">
          <div className="bg-white p-10 rounded-lg shadow-lg w-1/2 h-1/2 flex flex-col justify-center items-center">
            <CheckIcon className="text-green-700 w-12 h-12 mb-4" />
            <p className="text-lg text-center">Message Sent! Please check your email for a response.</p>
            <button
              onClick={() => setModalOpen(false)}
              className="mt-6 bg-primary text-white py-2 px-6 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}