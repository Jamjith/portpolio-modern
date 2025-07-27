
import { motion } from 'framer-motion';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I am a passionate developer skilled in HTML, CSS, Java, JavaScript, and 3D animation using Three.js. 
            I love creating immersive digital experiences that blend creativity with cutting-edge technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Code className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Development</h3>
            <p className="text-gray-400">
              Crafting clean, efficient code with modern web technologies and best practices.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-purple-400/50 transition-all duration-300 group"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Palette className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Design</h3>
            <p className="text-gray-400">
              Creating visually stunning interfaces with attention to detail and user experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-green-400/50 transition-all duration-300 group"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Zap className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">3D Animation</h3>
            <p className="text-gray-400">
              Bringing ideas to life with immersive 3D experiences using Three.js and WebGL.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
