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
  ArrowRight,
  TrendingUp,
  Globe,
  Award
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

  const images = {
    hero: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&q=80&w=2000",
    mgroad: "https://images.unsplash.com/photo-1619177302196-03098748721c?auto=format&fit=crop&q=80&w=1500",
    tech: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=1500",
    community: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=1500",
    vidhana_soudha: "data:image/jpeg;base64,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"
  };

  // Navbar Component
  const Navbar = () => (
    <nav className="fixed top-0 w-full z-50 bg-white/5 backdrop-blur-xl border-b border-white/10 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
              <Code className="text-white w-6 h-6" />
            </div>
            <span className="font-bold text-2xl tracking-tighter dark:text-white">Namma Dev</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {['Features', 'Growth', 'Community', 'Identity'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-primary transition-all">
                {item}
              </a>
            ))}
            <button 
              onClick={toggleDarkMode}
              className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition-colors"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-xl shadow-primary/25 hover:scale-105 active:scale-95">
              Join Community
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleDarkMode} className="p-2 text-slate-600 dark:text-slate-300">
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 dark:text-slate-300">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            className="md:hidden bg-white dark:bg-slate-900 border-b dark:border-white/5 origin-top"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {['Features', 'Growth', 'Community', 'Identity'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-xl font-bold text-slate-700 dark:text-slate-200">
                  {item}
                </a>
              ))}
              <hr className="border-slate-100 dark:border-white/5" />
              <button className="w-full bg-primary text-white py-4 rounded-2xl font-black text-lg shadow-lg">
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div 
        className="absolute inset-0 z-0 scale-105"
        style={{ 
          backgroundImage: `url(${images.hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[2px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary-light text-sm font-bold mb-8 backdrop-blur-md">
            <Rocket size={16} />
            <span>Karnataka's premier tech circle</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tight text-white mb-8">
            Namma <span className="text-primary drop-shadow-[0_0_15px_rgba(37,99,235,0.5)]">Dev</span>
          </h1>

          <p className="text-2xl md:text-3xl font-bold text-slate-200 mb-6 drop-shadow-md">
            Where Karnataka Engineers Unite.
          </p>

          <p className="max-w-2xl mx-auto text-lg text-slate-300 mb-12 leading-relaxed">
            Connect with engineers across Karnataka, showcase projects, and grow together in India's most vibrant tech ecosystem.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <button className="btn px-10 py-5 bg-primary text-white rounded-full font-black text-lg flex items-center gap-3 shadow-2xl shadow-primary/40 hover:bg-primary-dark group transition-all">
              Join Community <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="btn px-10 py-5 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md rounded-full font-black text-lg transition-all">
              Explore
            </button>
          </div>
        </motion.div>
      </div>

      {/* Hero Bottom Glow */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950 to-transparent"></div>
    </section>
  );

  // Features Section
  const Features = () => {
    const features = [
      {
        icon: Users,
        title: "Local Connections",
        desc: "Find mentors and peers in your neighborhood, from Hebbal to Hosur road.",
        color: "blue"
      },
      {
        icon: TrendingUp,
        title: "Career Growth",
        desc: "Access exclusive opportunities in the hottest startups and tech giants.",
        color: "green"
      },
      {
        icon: Award,
        title: "Showcase Built",
        desc: "Get recognition for your local innovations on a global stage.",
        color: "blue"
      },
      {
        icon: Globe,
        title: "Global Reach",
        desc: "Connect Karnataka's talent with opportunities around the world.",
        color: "green"
      }
    ];

    return (
      <section id="features" className="py-32 bg-white dark:bg-slate-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <div className="sticky top-32">
              <h2 className="text-5xl font-black dark:text-white mb-8 leading-tight">
                Designed for the <br />
                <span className="text-primary">Next Generation</span>
              </h2>
              <p className="text-xl text-slate-500 dark:text-slate-400 mb-12 leading-relaxed">
                Elevating the tech culture in Karnataka by bridging the gap between talent and opportunity.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {features.map((f, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -5 }}
                    className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-white/5 group transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                      <f.icon size={24} />
                    </div>
                    <h3 className="font-bold dark:text-white mb-2">{f.title}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-500">{f.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl shadow-primary/20 border-8 border-white dark:border-slate-800 rotate-2">
              <img src={images.mgroad} alt="MG Road context" className="w-full h-[600px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent pointer-events-none"></div>
            </div>
            {/* Floating Card */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-10 -left-10 p-8 glass-card max-w-xs shadow-2xl"
            >
              <Zap className="text-yellow-400 mb-4" />
              <p className="font-bold dark:text-white text-lg">MG Road Community Meetup</p>
              <p className="text-sm text-slate-500 mb-4">Every Sunday, 4:00 PM</p>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200"></div>)}
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-[10px] text-white font-bold">+2k</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };

  // Growth Section
  const Growth = () => (
    <section id="growth" className="py-32 relative">
      <div className="absolute inset-0 h-[600px]">
        <img src={images.tech} alt="Electronic City" className="w-full h-full object-cover opacity-20 grayscale" />
        <div className="absolute inset-0 bg-gradient-to-b from-white dark:from-slate-950 via-transparent to-white dark:to-slate-950"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="bg-primary/5 dark:bg-primary/10 border border-primary/20 rounded-[4rem] p-12 md:p-24 backdrop-blur-xl text-center">
          <h2 className="text-4xl md:text-6xl font-black dark:text-white mb-8">Built in the Silicon Valley of India</h2>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12">
            Namma Dev is born and bred in Bengaluru. We understand the pulse of the tech scene better than anyone else.
          </p>
          <div className="flex justify-center gap-12 flex-wrap">
            <div>
              <p className="text-5xl font-black text-primary mb-2">50k+</p>
              <p className="text-slate-500 font-bold">Engineers</p>
            </div>
            <div className="w-px h-16 bg-slate-200 dark:bg-white/10 hidden md:block"></div>
            <div>
              <p className="text-5xl font-black text-accent mb-2">500+</p>
              <p className="text-slate-500 font-bold">Startups</p>
            </div>
            <div className="w-px h-16 bg-slate-200 dark:bg-white/10 hidden md:block"></div>
            <div>
              <p className="text-5xl font-black text-primary mb-2">20+</p>
              <p className="text-slate-500 font-bold">Local Hubs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Community Section
  const Community = () => (
    <section id="community" className="py-32 bg-slate-50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-black dark:text-white mb-4">Find your tribe. Build together.</h2>
        <p className="text-lg text-slate-500 mb-20">Join the communities that match your ambition.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { tag: "AI/ML", color: "from-blue-500 to-indigo-500", desc: "Building the future of intelligence in BLR." },
            { tag: "Web3", color: "from-purple-500 to-pink-500", desc: "Decentralizing the web with local talent." },
            { tag: "Open Source", color: "from-green-500 to-emerald-500", desc: "Contributing to the global commons." }
          ].map((c, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-xl border border-slate-100 dark:border-white/5 group"
            >
              <div className={`h-4 bg-gradient-to-r ${c.color}`}></div>
              <div className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-slate-700/50 mb-6 mx-auto flex items-center justify-center text-slate-500 group-hover:bg-primary/20 transition-all">
                  <Globe />
                </div>
                <h3 className="text-2xl font-bold dark:text-white mb-4">{c.tag}</h3>
                <p className="text-slate-500 dark:text-slate-400 mb-8">{c.desc}</p>
                <button className="w-full py-4 border-2 border-primary/20 hover:border-primary text-primary font-bold rounded-2xl transition-all">
                  View Community
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20">
          <img src={images.community} alt="Community meetup" className="w-full h-[500px] object-cover rounded-[3rem] shadow-2xl" />
        </div>
      </div>
    </section>
  );

  // Identity Section
  const Identity = () => (
    <section id="identity" className="relative py-48 overflow-hidden">
      <div className="absolute inset-0">
        <img src={images.vidhana_soudha} alt="Vidhana Soudha" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-950/80"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           className="p-12 md:p-24"
        >
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 drop-shadow-2xl">
            Rooted in Karnataka.<br />
            <span className="text-accent italic">Built for Engineers.</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-12">
            An ecosystem that honors its heritage while building the global tech of tomorrow. Join thousands of developers who call Namma Dev home.
          </p>
          <button className="bg-primary hover:bg-primary-dark text-white px-12 py-6 rounded-full font-black text-2xl shadow-2xl group transition-all transform hover:scale-105">
            Claim your profile <ChevronRight className="inline-block ml-2 group-hover:translate-x-2 transition-all" />
          </button>
        </motion.div>
      </div>

      {/* Aesthetic Accents */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 blur-[150px] rounded-full"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/10 blur-[150px] rounded-full"></div>
    </section>
  );

  const Footer = () => (
    <footer className="bg-white dark:bg-slate-950 border-t dark:border-white/5 pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shadow-xl shadow-primary/30">
                <Code size={28} />
              </div>
              <span className="font-black text-3xl tracking-tighter dark:text-white">Namma Dev</span>
            </div>
            <p className="text-xl text-slate-500 dark:text-slate-400 mb-10 leading-relaxed">
              Where Karnataka Engineers Unite. The definitive community for the silicon state of India.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:border-primary hover:text-primary transition-all hover:shadow-lg">
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-16">
             <div>
              <h4 className="font-black text-lg dark:text-white mb-8">Platform</h4>
              <ul className="space-y-4">
                {['Home', 'Features', 'Community', 'Projects'].map(item => (
                  <li key={item}><a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors font-medium">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-black text-lg dark:text-white mb-8">Hubs</h4>
              <ul className="space-y-4">
                {['Bengaluru', 'Mysuru', 'Hubballi', 'Mangaluru'].map(item => (
                  <li key={item}><a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors font-medium">{item}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-16 border-t dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <p className="text-slate-500 dark:text-slate-500 font-bold text-center md:text-left">
            &copy; {new Date().getFullYear()} Namma Dev. <span className="text-slate-300 dark:text-slate-800 mx-4">|</span> Made by Engineers in BLR 🚀
          </p>
          <div className="flex gap-8 text-sm font-bold text-slate-500">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-white transition-colors duration-500 dark:bg-slate-950 font-sans selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <Hero />
      <Features />
      <Growth />
      <Community />
      <Identity />
      <Footer />
    </div>
  );
};

export default LandingPage;
