import { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0a0f3c] via-[#1a1f5c] to-[#0a0f3c] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#9a6bff]/20 rounded-2xl mb-4">
            <Mail className="w-8 h-8 text-[#9a6bff]" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>

          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Collaborate with us or join our educational mission to transform learning through immersive technology.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#9a6bff] focus:ring-2 focus:ring-[#9a6bff]/50 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#9a6bff] focus:ring-2 focus:ring-[#9a6bff]/50 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#9a6bff] focus:ring-2 focus:ring-[#9a6bff]/50 transition-all resize-none"
                  placeholder="Tell us about your ideas, questions, or collaboration opportunities..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#9a6bff] to-blue-500 text-white py-4 rounded-xl font-semibold text-lg flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-[#9a6bff]/50 transition-all duration-300 hover:scale-105"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          ) : (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>

              <h3 className="text-3xl font-bold text-white mb-4">Message Sent!</h3>
              <p className="text-white/70 text-lg">
                Thank you for reaching out. We'll get back to you soon!
              </p>
            </div>
          )}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-3">About the Creators</h3>
            <p className="text-white/70 mb-2">
              Created by <span className="text-[#9a6bff] font-semibold">Malak Mahmoud</span> and{' '}
              <span className="text-[#9a6bff] font-semibold">Mariam Waled</span>
            </p>
            <p className="text-white/60 text-sm">
              Students from WE School for Applied Technology, passionate about connecting education with immersive technology
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
