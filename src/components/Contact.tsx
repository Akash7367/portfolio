import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

export default function Contact({ darkMode }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: <Mail size={22} />,
      label: 'Email',
      value: 'akashgupta7965@gmail.com',
      href: 'mailto:akashgupta7965@gmail.com',
    },
    {
      icon: <Phone size={22} />,
      label: 'Phone',
      value: '+91 7367840249',
      href: 'tel:+917367840249',
    },
    {
      icon: <MapPin size={22} />,
      label: 'Location',
      value: 'India',
      href: '#',
    },
  ];

  return (
    <section
      id="contact"
      className={`section-padding ${darkMode ? 'bg-gray-900/50' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className={`text-sm font-semibold uppercase tracking-wider ${
            darkMode ? 'text-blue-400' : 'text-blue-600'
          }`}>
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
          <p className={`mt-4 text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((info, i) => (
              <motion.a
                key={info.label}
                href={info.href}
                whileHover={{ x: 5 }}
                className={`flex items-center gap-4 p-5 rounded-2xl border transition-all duration-300 ${
                  darkMode
                    ? 'bg-gray-900 border-gray-800 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10'
                    : 'bg-gray-50 border-gray-200 hover:border-blue-300 hover:shadow-lg'
                }`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className={`p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white`}>
                  {info.icon}
                </div>
                <div>
                  <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{info.label}</p>
                  <p className="font-semibold">{info.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Social Links */}
            <div className="pt-4">
              <p className={`text-sm font-semibold mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Find me on
              </p>
              <div className="flex gap-3">
                <motion.a
                  href="https://github.com/Akash7367"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-xl transition-all duration-200 ${
                    darkMode
                      ? 'bg-gray-800 text-gray-400 hover:bg-blue-500/20 hover:text-blue-400'
                      : 'bg-gray-100 text-gray-500 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </motion.a>
                <motion.a
                  href="mailto:akashgupta7965@gmail.com"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-xl transition-all duration-200 ${
                    darkMode
                      ? 'bg-gray-800 text-gray-400 hover:bg-blue-500/20 hover:text-blue-400'
                      : 'bg-gray-100 text-gray-500 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  <Mail size={22} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className={`p-8 rounded-3xl border ${
              darkMode
                ? 'bg-gray-900 border-gray-800'
                : 'bg-gray-50 border-gray-200'
            }`}>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                </motion.div>
              ) : (
                <div className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
                          darkMode
                            ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500'
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                        }`}
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
                          darkMode
                            ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500'
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                        }`}
                      />
                    </div>
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Job Opportunity / Collaboration"
                      className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
                        darkMode
                          ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500'
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                      }`}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about the opportunity..."
                      className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none ${
                        darkMode
                          ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500'
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                      }`}
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold text-lg shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
                  >
                    <Send size={20} />
                    Send Message
                  </motion.button>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
