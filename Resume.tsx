
import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Resume
          </h2>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            Download my resume to learn more about my experience, education, and accomplishments.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm p-12 rounded-3xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
        >
          <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-emerald-500 rounded-full flex items-center justify-center mb-8 mx-auto">
            <FileText size={40} className="text-white" />
          </div>
          
          <h3 className="text-2xl font-bold mb-4 text-white">
            Vengatraman's Resume
          </h3>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            A comprehensive overview of my skills, experience, and achievements in software development and 3D animation.
          </p>
          
          <a
            href="/assets/Vengatraman_Resume.pdf"
            download
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white rounded-full font-semibold hover:from-cyan-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Download size={20} />
            Download Resume
          </a>
          
          <div className="mt-8 text-sm text-gray-400">
            PDF • Last updated December 2024
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
