
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-4 bg-black/50 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="p-3 bg-white/5 backdrop-blur-sm rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-110 group">
              <Github size={24} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
            </a>
            <a href="#" className="p-3 bg-white/5 backdrop-blur-sm rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-110 group">
              <Linkedin size={24} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
            </a>
            <a href="#" className="p-3 bg-white/5 backdrop-blur-sm rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-110 group">
              <Mail size={24} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
            </a>
          </div>
          
          <div className="flex items-center justify-center gap-2 mb-6 text-gray-400">
            <span>&copy; 2025 Vengatraman. Made with</span>
            <Heart size={16} className="text-red-400 animate-pulse" />
            <span>and lots of coffee</span>
          </div>
          
          <p className="text-sm text-gray-500 mb-8">
            Crafted with modern web technologies • Three.js • React • Tailwind CSS
          </p>
          
          <button
            onClick={scrollToTop}
            className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
          >
            <ArrowUp size={20} className="text-white" />
          </button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
