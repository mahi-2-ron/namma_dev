import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Code, 
  Search, 
  Zap, 
  ChevronRight, 
  Github, 
  Twitter, 
  Linkedin, 
  Sun, 
  Moon, 
  Menu, 
  X,
  MapPin,
  Rocket,
  ArrowRight
} from 'lucide-react';

const LandingPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  // Navbar Component
  const Navbar = () => (
    <nav className="fixed top-0 w-full z-50 bg-white/5 backdrop-blur-lg border-b border-white/10 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Code className="text-white w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tight dark:text-white">Namma Dev</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {['Features', 'Community', 'How it works'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(/ /g, '-')}`} className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">
                {item}
              </a>
            ))}
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-primary/20">
              Join Community
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleDarkMode} className="p-2 text-slate-600 dark:text-slate-300">
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 dark:text-slate-300">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-900 border-b dark:border-white/5"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {['Features', 'Community', 'How it works'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(/ /g, '-')}`} className="text-lg font-medium text-slate-600 dark:text-slate-300">
                  {item}
                </a>
              ))}
              <button className="w-full bg-primary text-white py-3 rounded-xl font-bold">
                Join Community
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );

  // Hero Section
  const Hero = () => (
    <section className="relative pt-32 pb-20 overflow-hidden bg-mesh min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Karanataka's Tech Elite
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight dark:text-white mb-6"
          >
            Namma <span className="text-primary italic">Dev</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl font-semibold text-slate-600 dark:text-slate-400 mb-4"
          >
            Where Karnataka Engineers Unite.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto text-lg text-slate-500 dark:text-slate-400 mb-10"
          >
            Connect with engineers across Karnataka, showcase projects, and grow together in India's most vibrant tech ecosystem.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button className="btn-primary px-8 py-4 rounded-full font-bold flex items-center gap-2 shadow-xl shadow-primary/30 group">
              Join Community <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white dark:bg-slate-800 border-2 dark:border-slate-700 px-8 py-4 rounded-full font-bold transition-all text-slate-900 dark:text-white hover:border-primary">
              Explore
            </button>
          </motion.div>
        </div>

        {/* Floating elements animation */}
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="hidden lg:block absolute -right-20 top-20 opacity-20"
        >
          <div className="w-64 h-64 rounded-full bg-primary blur-[100px]"></div>
        </motion.div>
        <motion.div 
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="hidden lg:block absolute -left-20 bottom-20 opacity-20"
        >
          <div className="w-64 h-64 rounded-full bg-accent blur-[100px]"></div>
        </motion.div>
      </div>
    </section>
  );

  // Features Section
  const Features = () => {
    const features = [
      {
        icon: Users,
        title: "Connect",
        desc: "Connect with local developers and find mentors from top tech companies in Karnataka.",
        color: "blue"
      },
      {
        icon: Code,
        title: "Showcase",
        desc: "Create a portfolio that matters. Showcase your local-to-global projects.",
        color: "green"
      },
      {
        icon: Search,
        title: "Discover",
        desc: "Discover internships, hackathons, and local meetups happening in your neighborhood.",
        color: "blue"
      },
      {
        icon: Zap,
        title: "Communities",
        desc: "Join specialized tech communities covering AI/ML, Web3, Mobile, and more.",
        color: "green"
      }
    ];

    return (
      <section id="features" className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold dark:text-white mb-4">Empowering the Silicon State</h2>
            <p className="text-slate-500 dark:text-slate-400">Everything you need to level up your engineering career in Karnataka.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="glass-card flex flex-col gap-4 group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all`}>
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-bold dark:text-white">{feature.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Community Section
  const Community = () => {
    const locations = ["Bengaluru", "Mysuru", "Hubballi", "Mangaluru", "Belagavi", "Kalaburagi"];
    
    return (
      <section id="community" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold dark:text-white mb-6">Home-grown Talent, <span className="text-primary italic">Global Impact</span></h2>
              <p className="text-lg text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
                Namma Dev isn't just a platform; it's a movement. We bring together engineers from Davanagere to Bengaluru, Belagavi to Mangaluru.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {locations.map(loc => (
                  <span key={loc} className="flex items-center gap-1 bg-white dark:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-sm">
                    <MapPin size={14} className="text-primary" /> {loc}
                  </span>
                ))}
              </div>
              <button className="flex items-center gap-2 font-bold text-primary group">
                See our global impact <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-slate-800 p-4 rounded-3xl shadow-xl dark:shadow-none border border-slate-100 dark:border-slate-700"
                >
                  <div className="h-24 bg-slate-100 dark:bg-slate-700 rounded-2xl mb-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-600 -mt-9 ml-2 relative z-10 border-4 border-white dark:border-slate-800"></div>
                  <div className="mt-2">
                    <div className="h-4 w-24 bg-slate-200 dark:bg-slate-700 rounded mb-2"></div>
                    <div className="h-3 w-16 bg-slate-100 dark:bg-slate-600 rounded"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };

  // How It Works
  const HowItWorks = () => {
    const steps = [
      {
        step: "01",
        title: "Create profile",
        desc: "Build your engineering profile. List your skills, projects, and what you’re looking for."
      },
      {
        step: "02",
        title: "Connect with engineers",
        desc: "Network with high-impact engineers and developers in your city or stack."
      },
      {
        step: "03",
        title: "Build & grow together",
        desc: "Find collaborators for your side projects or find your next career step."
      }
    ];

    return (
      <section id="how-it-works" className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold dark:text-white mb-4">How it works</h2>
            <p className="text-slate-500 dark:text-slate-400">Three steps to join the circle.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
             {/* Connector line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 dark:bg-slate-800 -z-10 transform -translate-y-1/2"></div>
            
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-white font-black text-2xl shadow-xl shadow-primary/30 mb-8 relative">
                   <div className="absolute -inset-2 bg-primary/20 blur-xl rounded-full -z-10"></div>
                  {step.step}
                </div>
                <h3 className="text-2xl font-bold dark:text-white mb-4">{step.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const Footer = () => (
    <footer className="bg-slate-50 dark:bg-slate-900/80 border-t dark:border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white">
                <Code />
              </div>
              <span className="font-bold text-2xl tracking-tight dark:text-white">Namma Dev</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-lg mb-8 max-w-sm">
              Namma Dev is the community platform built to unite and empower the engineering ecosystem of Karnataka.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:border-primary hover:text-primary transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">Explore</h4>
            <ul className="space-y-4">
              {['Home', 'Features', 'Community', 'Projects'].map(item => (
                <li key={item}><a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">Legal</h4>
            <ul className="space-y-4">
              {['Terms', 'Privacy', 'Guidelines'].map(item => (
                <li key={item}><a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t dark:border-white/5 pt-10 text-center">
          <p className="text-slate-500 dark:text-slate-500 text-sm italic">
            &copy; {new Date().getFullYear()} Namma Dev. Where Karnataka Engineers Unite. 
            <span className="ml-2 not-italic">Made by Engineers in BLR 🚀</span>
          </p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-white transition-colors duration-500 dark:bg-slate-950 font-sans selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <Hero />
      <Features />
      <Community />
      <HowItWorks />
      
      {/* Dynamic CTA */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Rocket size={160} />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 relative z-10">Banni, Karnataka's Tech Future awaits.</h2>
            <button className="bg-white text-primary px-10 py-5 rounded-full font-bold text-xl hover:bg-slate-50 transition-all shadow-2xl relative z-10 group">
              Get Started for Free <ArrowRight className="inline-block ml-2 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
