import { useState, useEffect } from 'react';
import { Github, Mail, Phone, MapPin, Code, Database, Shield, Settings, Monitor, GitBranch, ChevronRight } from 'lucide-react';

// Task data for each category
const taskData = {
  Docker: [
    'Install Docker',
    'Run a container',
    'Build a Docker image',
    'Push image to Docker Hub',
  ],
  Python: [
    'Install Python',
    'Create a virtual environment',
    'Install packages with pip',
    'Run a Python script',
  ],
  JavaScript: [
    'Setup Node.js',
    'Initialize npm project',
    'Install dependencies',
    'Run a JS file',
  ],
  Linux: [
    'List files with ls',
    'Check disk usage',
    'Edit files with nano',
    'Manage processes',
  ],
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<'Docker' | 'Python' | 'JavaScript' | 'Linux'>('Docker');

  const skills = [
    { name: 'JavaScript', icon: Code, level: 90 },
    { name: 'React', icon: Code, level: 85 },
    { name: 'Node.js', icon: Code, level: 85 },
    { name: 'Docker', icon: Code, level: 80 },
    { name: 'Kubernetes', icon: Code, level: 75 },
    { name: 'AWS', icon: Code, level: 80 },
    { name: 'MongoDB', icon: Database, level: 75 },
    { name: 'DevOps', icon: Settings, level: 85 },
    { name: 'CI/CD', icon: GitBranch, level: 80 },
    { name: 'Linux', icon: Monitor, level: 85 },
    { name: 'Python', icon: Code, level: 75 },
    { name: 'Security', icon: Shield, level: 70 },
  ];

  const projects = [
    {
      title: 'Microservices E-commerce Platform',
      description: 'A scalable e-commerce solution built with microservices architecture, Docker containers, and Kubernetes orchestration with automated CI/CD pipeline.',
      tech: ['React', 'Node.js', 'Docker', 'Kubernetes', 'AWS', 'MongoDB'],
      github: 'https://github.com/ayushi/microservices-ecommerce',
      demo: 'https://ayushi-ecommerce-demo.com',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: true
    },
    {
      title: 'DevOps Automation Dashboard',
      description: 'A comprehensive DevOps dashboard for monitoring deployments, managing CI/CD pipelines, and tracking infrastructure metrics across multiple environments.',
      tech: ['React', 'Python', 'Docker', 'Jenkins', 'Grafana', 'Prometheus'],
      github: 'https://github.com/ayushi/devops-dashboard',
      demo: 'https://ayushi-devops-demo.com',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: true
    },
    {
      title: 'Cloud Infrastructure Manager',
      description: 'Infrastructure as Code solution for managing AWS resources with Terraform, automated scaling, and cost optimization features.',
      tech: ['Terraform', 'AWS', 'Python', 'CloudFormation'],
      github: 'https://github.com/ayushi/cloud-infrastructure',
      demo: 'https://ayushi-cloud-demo.com',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: false
    },
    {
      title: 'Full Stack Task Management',
      description: 'A collaborative task management application with real-time updates, team collaboration, and integrated deployment pipeline.',
      tech: ['Vue.js', 'Express.js', 'PostgreSQL', 'Socket.io', 'Docker'],
      github: 'https://github.com/ayushi/task-management',
      demo: 'https://ayushi-tasks-demo.com',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: false
    }
  ];

  const achievements = [
    { title: 'AWS Certified Solutions Architect', year: '2023', icon: Code },
    { title: 'Kubernetes Administrator (CKA)', year: '2023', icon: Code },
    { title: 'DevOps Excellence Award', year: '2022', icon: Code },
    { title: '4+ Years Experience', year: '2020-2024', icon: Code }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Product Manager at TechCorp',
      content: 'Ayushi delivered exceptional work on our microservices migration. Her DevOps expertise and full-stack knowledge made the project a huge success.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      name: 'Mike Chen',
      role: 'CTO at StartupXYZ',
      content: 'Working with Ayushi was transformative for our infrastructure. Her ability to bridge development and operations helped us scale efficiently.',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'projects', 'tasks', 'skills', 'testimonials', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const downloadResume = () => {
    // In a real application, this would download an actual resume file
    alert('Resume download would start here!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Ayushi
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'tasks', 'skills', 'testimonials', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors relative ${
                    activeSection === section 
                      ? 'text-blue-600 font-semibold' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {section}
                  {activeSection === section && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <ChevronRight className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
              {['home', 'about', 'projects', 'tasks', 'skills', 'testimonials', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-4 py-2 capitalize text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="relative mb-8">
            <div className="w-56 h-56 mx-auto rounded-full bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 flex items-center justify-center shadow-2xl animate-pulse">
              <div className="w-52 h-52 rounded-full bg-white flex items-center justify-center">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Ayushi - DevOps & Full Stack Developer" 
                  className="w-48 h-48 rounded-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-500 rounded-full border-4 border-white animate-bounce"></div>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
            Ayushi
          </h1>
          <p className="text-2xl md:text-3xl text-blue-700 mb-4 font-light">DevOps & Full Stack Developer</p>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate about bridging development and operations through modern DevOps practices and full-stack development. 
            Specialized in cloud infrastructure, containerization, and scalable web applications with 4+ years of experience.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              View My Work
            </button>
            <button 
              onClick={downloadResume}
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all flex items-center gap-2"
            >
              <Code className="w-5 h-5" />
              Download Resume
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="https://github.com/ayushi" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://linkedin.com/in/ayushi" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Github className="w-8 h-8" />
            </a>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronRight className="w-8 h-8 text-blue-600" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent mb-16">
            About Me
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                I'm a passionate DevOps and Full Stack Developer with over 4 years of experience creating 
                scalable infrastructure solutions and modern web applications. I specialize in cloud architecture, 
                containerization, CI/CD pipelines, and building robust full-stack applications that drive business growth.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                My expertise spans across the entire development lifecycle - from designing microservices architectures 
                to implementing automated deployment pipelines. I believe in Infrastructure as Code, continuous integration, 
                and creating seamless developer experiences through modern DevOps practices.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">{achievement.title}</h3>
                    <p className="text-sm text-gray-600">{achievement.year}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent mb-16">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}>
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                    {project.featured && (
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a 
                      href={project.github} 
                      className="flex items-center text-gray-600 hover:text-blue-600 transition-colors group"
                    >
                      <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                      Code
                    </a>
                    <a 
                      href={project.demo} 
                      className="flex items-center text-gray-600 hover:text-blue-600 transition-colors group"
                    >
                      <ChevronRight className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Task Section */}
      <section id="tasks" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent mb-16">
            Tasks
          </h2>
          <div className="flex justify-center gap-4 mb-8">
            {(['Docker', 'Python', 'JavaScript', 'Linux'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <ul className="max-w-md mx-auto text-lg text-gray-700 list-disc list-inside">
            {taskData[selectedCategory].map((task, idx) => (
              <li key={idx} className="mb-2">{task}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent mb-16">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-blue-100 hover:border-blue-300">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 text-center mb-3">{skill.name}</h3>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div 
                      className="h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <p className="text-center text-sm text-gray-600">{skill.level}% Proficiency</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent mb-16">
            What People Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-blue-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic leading-relaxed">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent mb-16">
            Let's Work Together
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <p className="text-gray-600">ayushi.dev@email.com</p>
                  </div>
                </div>
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Phone</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Location</p>
                    <p className="text-gray-600">San Francisco, CA</p>
                  </div>
                </div>
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                    <Github className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">GitHub</p>
                    <a href="https://github.com/ayushi" className="text-blue-600 hover:text-blue-800 transition-colors">
                      github.com/ayushi
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Ayushi</h3>
              <p className="text-blue-200 leading-relaxed">
                DevOps & Full Stack Developer passionate about creating scalable infrastructure 
                solutions and helping businesses grow through modern technology and automation.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {['Home', 'About', 'Projects', 'Tasks', 'Skills', 'Contact'].map((link) => (
                  <button
                    key={link}
                    onClick={() => scrollToSection(link.toLowerCase())}
                    className="block text-blue-200 hover:text-white transition-colors"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="https://github.com/ayushi" className="text-blue-200 hover:text-white transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/in/ayushi" className="text-blue-200 hover:text-white transition-colors">
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-700 pt-8 text-center">
            <p className="text-blue-200">&copy; 2025 Ayushi. All rights reserved. Built with React & Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;