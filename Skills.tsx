
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'HTML5', level: 95, color: 'from-orange-400 to-red-500' },
    { name: 'CSS3', level: 90, color: 'from-blue-400 to-blue-600' },
    { name: 'JavaScript', level: 88, color: 'from-yellow-400 to-orange-500' },
    { name: 'Java', level: 85, color: 'from-red-500 to-pink-500' },
    { name: 'Three.js', level: 80, color: 'from-green-400 to-emerald-500' },
    { name: 'React', level: 85, color: 'from-cyan-400 to-blue-500' },
    { name: 'GSAP', level: 75, color: 'from-purple-400 to-indigo-500' },
    { name: 'WebGL', level: 70, color: 'from-pink-400 to-rose-500' }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            My technical expertise spans across various technologies and frameworks.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-green-400/50 transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                <span className="text-sm text-gray-400">{skill.level}%</span>
              </div>
              
              <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 inline-block">
            <h3 className="text-2xl font-bold mb-4 text-white">Always Learning</h3>
            <p className="text-gray-300 max-w-md">
              I'm constantly exploring new technologies and pushing the boundaries of what's possible in web development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
