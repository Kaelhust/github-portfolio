import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <header className="bg-white shadow-md sticky top-0 z-50">
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-primary">Marco's Portfolio</h1>
            <nav className="space-x-6">
              <a href="#home" className="text-gray-600 hover:text-primary transition-colors">Home</a>
              <a href="#about" className="text-gray-600 hover:text-primary transition-colors">About</a>
              <a href="#projects" className="text-gray-600 hover:text-primary transition-colors">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Contact</a>
              <a 
                href="https://github.com/Kaelhust" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </nav>
          </div>
        </header>

        <main>
          <section id="home" className="bg-white py-20">
            <div className="container mx-auto px-4 text-center">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <img 
                  src="https://th.bing.com/th/id/R.a94588071fc91ca4e70a19939a1dd7f4?rik=d%2bTrWLM9x3hcHg&riu=http%3a%2f%2fdevashianvalley.weebly.com%2fuploads%2f2%2f6%2f9%2f6%2f2696159%2f720599_orig.jpg%3f194&ehk=NbjzddaANEJebSvq%2b4yx6h8G7cYGFRNy2vLxAoZ%2fi5E%3d&risl=&pid=ImgRaw&r=0"
                  alt="Profile" 
                  className="rounded-full w-48 h-48 mx-auto mb-8 object-cover shadow-lg"
                />
                <h2 className="text-4xl font-bold mb-4">Hi, I'm Marco Licayan</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  A passionate web developer creating beautiful and functional digital experiences.
                </p>
              </motion.div>
            </div>
          </section>

          <section id="about" className="bg-gray-50 py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
              <div className="max-w-3xl mx-auto">
                <h3 className="text-xl font-semibold mb-4">Background</h3>
                <p className="text-gray-600 mb-6">
                  I am a Computer Science student with a passion for web development and software engineering.
                  Currently focused on creating innovative solutions and learning new technologies.
                </p>
                
                <h3 className="text-xl font-semibold mb-4">Skills</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  {['HTML/CSS', 'JavaScript', 'React', 'PHP', 'TypeScript', 'Git'].map((skill) => (
                    <div key={skill} className="bg-white p-3 rounded-lg shadow text-center">
                      {skill}
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-4">Interests</h3>
                <p className="text-gray-600">
                  Beyond coding, I'm interested in UI/UX design, artificial intelligence, and contributing to open-source projects.
                </p>
              </div>
            </div>
          </section>

          <section id="projects" className="bg-white py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <motion.div whileHover={{ scale: 1.02 }} className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
                  <img src="https://scontent.fcgm1-1.fna.fbcdn.net/v/t1.15752-9/462638243_3040573502768342_4294334573914095721_n.png?_nc_cat=111&ccb=1-7&_nc_sid=9f807c&_nc_ohc=8OWuafOHfyoQ7kNvgFTDXCe&_nc_zt=23&_nc_ht=scontent.fcgm1-1.fna&oh=03_Q7cD1gFMMKWTLfdh6Ml7FsXau6yKICWwF6I-crO0lvIeHJm1cw&oe=6797BC5E" 
                       alt="Visual Notes" 
                       className="w-full h-48 object-cover"/>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Visual Notes</h3>
                    <p className="text-gray-600 mb-4">A collaborative note-taking app with visual organization features.</p>
                    <a href="https://github.com/Kaelhust/AppDev_VisualNote" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="text-primary hover:text-primary-dark">
                      View on GitHub →
                    </a>
                  </div>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
                  <img src="path-to-project-2-image.jpg" 
                       alt="PHP Project" 
                       className="w-full h-48 object-cover"/>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Licayan Project</h3>
                    <p className="text-gray-600 mb-4">A PHP-based web application for managing student records.</p>
                    <a href="https://github.com/Kaelhust/Licayan_project" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="text-primary hover:text-primary-dark">
                      View on GitHub →
                    </a>
                  </div>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
                  <img src="path-to-project-3-image.jpg" 
                       alt="Portfolio Website" 
                       className="w-full h-48 object-cover"/>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Portfolio Website</h3>
                    <p className="text-gray-600 mb-4">A responsive portfolio website built with React and Tailwind CSS.</p>
                    <a href="https://github.com/Kaelhust/eportfolio" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="text-primary hover:text-primary-dark">
                      View on GitHub →
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          <section id="contact" className="bg-gray-50 py-20">
            <div className="container mx-auto px-4 max-w-2xl">
              <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
              <form className="bg-white p-8 rounded-lg shadow-lg">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </section>
        </main>

        <footer className="bg-white py-8 text-center">
          <p className="text-gray-600">© 2024 Marco Licayan. All rights reserved.</p>
        </footer>
      </motion.div>
    </div>
  );
}

export default App;
