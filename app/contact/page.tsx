'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    alert('Message sent! (This is a demo - connect it to your backend)');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-gray-400 text-lg">
            Feel free to reach out for collaborations, opportunities, or just to say hi!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-blue-500 transition"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-blue-500 transition"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-blue-500 transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="text-blue-400 mt-1">📧</div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:kanikaprabhakar2005@gmail.com" className="text-gray-400 hover:text-white transition">
                      kanikaprabhakar2005@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-blue-400 mt-1">📍</div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-400">Your City, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-blue-400 mt-1">🎓</div>
                  <div>
                    <p className="font-medium">Education</p>
                    <p className="text-gray-400">B.Tech CSE - Chitkara University</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Social Links</h3>
              <div className="flex flex-col gap-3">
                <a 
                  href="https://github.com/kanikaprabhakar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition flex items-center gap-2"
                >
                  <span>🔗</span> GitHub
                </a>
                <a 
                  href="https://linkedin.com/in/kanikaprabhakar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition flex items-center gap-2"
                >
                  <span>🔗</span> LinkedIn
                </a>
                <a 
                  href="https://leetcode.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition flex items-center gap-2"
                >
                  <span>🔗</span> LeetCode
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
