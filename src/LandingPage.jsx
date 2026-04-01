import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Code, 
  Zap, 
  ChevronRight, 
  Github, 
  Twitter, 
  Linkedin, 
  Sun, 
  Moon, 
  Menu, 
  X,
  Rocket,
  ArrowRight,
  TrendingUp,
  Globe,
  Award,
  Calendar,
  MapPin,
  MessageSquare,
  Star,
  ExternalLink
} from 'lucide-react';
import logo from './assets/logo.png';

const Navbar = ({ isDarkMode, activeSection, toggleDarkMode, isMenuOpen, setIsMenuOpen, scrollToSection, handleAction }) => (
  <nav className="fixed top-0 w-full z-50 bg-white/5 backdrop-blur-xl border-b border-white/10 dark:border-white/5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-primary/20">
            <img src={logo} alt="Namma Dev Logo" className="w-full h-full object-cover" />
          </div>
          <span className="font-bold text-2xl tracking-tighter dark:text-white">Namma Dev</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-10">
          {['Features', 'Events', 'Growth', 'Community', 'Testimonials'].map((item) => (
            <button 
              key={item} 
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`text-sm font-semibold transition-all ${
                activeSection === item.toLowerCase() 
                  ? 'text-primary scale-110' 
                  : 'text-slate-600 dark:text-slate-300 hover:text-primary cursor-pointer border-none bg-transparent'
              }`}
            >
              {item}
            </button>
          ))}
          <button 
            onClick={toggleDarkMode}
            className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition-colors cursor-pointer border-none"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            onClick={() => handleAction('Join Community')}
            className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-xl shadow-primary/25 hover:scale-105 active:scale-95 cursor-pointer border-none"
          >
            Join Community
          </button>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleDarkMode} className="p-2 text-slate-600 dark:text-slate-300 cursor-pointer border-none bg-transparent">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 dark:text-slate-300 cursor-pointer border-none bg-transparent">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </div>

    <AnimatePresence>
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          exit={{ opacity: 0, scaleY: 0 }}
          className="md:hidden bg-white dark:bg-slate-900 border-b dark:border-white/5 origin-top"
        >
          <div className="px-6 py-8 flex flex-col gap-6">
            {['Features', 'Events', 'Growth', 'Community', 'Testimonials'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase())} 
                className="text-xl font-bold text-slate-700 dark:text-slate-200 text-left cursor-pointer border-none bg-transparent"
              >
                {item}
              </button>
            ))}
            <hr className="border-slate-100 dark:border-white/5" />
            <button 
              onClick={() => handleAction('Join Community Mobile')}
              className="w-full bg-primary text-white py-4 rounded-2xl font-black text-lg shadow-lg cursor-pointer border-none"
            >
              Join Community
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </nav>
);

const Hero = ({ images, handleAction, scrollToSection }) => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
          Namma <span className="text-primary drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]">Dev</span>
        </h1>

        <p className="text-2xl md:text-3xl font-bold text-slate-200 mb-6 drop-shadow-md">
          Where Karnataka Engineers Unite.
        </p>

        <p className="max-w-2xl mx-auto text-lg text-slate-300 mb-12 leading-relaxed">
          Connect with engineers across Karnataka, showcase projects, and grow together in India's most vibrant tech ecosystem.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <button 
            onClick={() => handleAction('Hero Join Community')}
            className="btn px-10 py-5 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-black text-lg flex items-center gap-3 shadow-2xl shadow-primary/40 hover:scale-105 group transition-all cursor-pointer border-none"
          >
            Join Community <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </button>
          <button 
            onClick={() => scrollToSection('features')}
            className="btn px-10 py-5 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md rounded-full font-black text-lg transition-all cursor-pointer"
          >
            Explore
          </button>
        </div>
      </motion.div>
    </div>

    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950 to-transparent"></div>
  </section>
);

const Features = ({ images }) => {
  const features = [
    { icon: Users, title: "Local Connections", desc: "Find mentors and peers in your neighborhood, from Hebbal to Hosur road." },
    { icon: TrendingUp, title: "Career Growth", desc: "Access exclusive opportunities in the hottest startups and tech giants." },
    { icon: Award, title: "Showcase Built", desc: "Get recognition for your local innovations on a global stage." },
    { icon: Globe, title: "Global Reach", desc: "Connect Karnataka's talent with opportunities around the world." }
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
              {features.map((f) => (
                <motion.div 
                  key={f.title}
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

const Events = () => {
  const events = [
    { 
      title: "Bengaluru Dev Summit", 
      date: "April 15, 2026", 
      location: "Electronic City, BLR", 
      type: "Conference",
      img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800"
    },
    { 
      title: "Mysuru AI Workshop", 
      date: "May 2, 2026", 
      location: "Infosys Campus, Mysuru", 
      type: "Workshop",
      img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800"
    },
    { 
      title: "Hubballi Startup Meet", 
      date: "May 22, 2026", 
      location: "KLE Tech, Hubballi", 
      type: "Networking",
      img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="events" className="py-32 bg-slate-50 dark:bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl text-left">
            <h2 className="text-5xl font-black dark:text-white mb-6">Upcoming <span className="text-secondary italic">Happenings</span></h2>
            <p className="text-xl text-slate-500 dark:text-slate-400">Join our physical meetups and virtual sessions happening across the state.</p>
          </div>
          <button className="flex items-center gap-2 font-bold text-primary hover:text-primary-dark transition-all cursor-pointer border-none bg-transparent">
            View All Events <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all group"
            >
              <div className="h-56 relative overflow-hidden">
                <img src={event.img} alt={event.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase">
                  {event.type}
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-primary font-bold text-sm mb-4">
                  <Calendar size={16} /> {event.date}
                </div>
                <h3 className="text-2xl font-bold dark:text-white mb-4 group-hover:text-primary transition-colors">{event.title}</h3>
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-8">
                  <MapPin size={16} /> {event.location}
                </div>
                <button className="w-full py-4 bg-slate-50 dark:bg-slate-700/50 hover:bg-primary hover:text-white dark:hover:bg-primary rounded-2xl font-bold transition-all flex items-center justify-center gap-2 cursor-pointer border-none">
                  Get Tickets <ExternalLink size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Growth = ({ images, counters }) => (
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
            <p className="text-5xl font-black text-primary mb-2">{counters.engineers}k+</p>
            <p className="text-slate-500 font-bold">Engineers</p>
          </div>
          <div className="w-px h-16 bg-slate-200 dark:bg-white/10 hidden md:block"></div>
          <div>
            <p className="text-5xl font-black text-accent mb-2">{counters.startups}+</p>
            <p className="text-slate-500 font-bold">Startups</p>
          </div>
          <div className="w-px h-16 bg-slate-200 dark:bg-white/10 hidden md:block"></div>
          <div>
            <p className="text-5xl font-black text-primary mb-2">{counters.hubs}+</p>
            <p className="text-slate-500 font-bold">Local Hubs</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Community = ({ images, handleAction }) => (
  <section id="community" className="py-32 bg-slate-50 dark:bg-slate-900/40">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <h2 className="text-4xl md:text-5xl font-black dark:text-white mb-4">Find your tribe. Build together.</h2>
      <p className="text-lg text-slate-500 mb-20">Join the communities that match your ambition.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          { id: 'ai', tag: "AI/ML", color: "from-blue-500 to-indigo-500", desc: "Building the future of intelligence in BLR." },
          { id: 'web3', tag: "Web3", color: "from-purple-500 to-pink-500", desc: "Decentralizing the web with local talent." },
          { id: 'oss', tag: "Open Source", color: "from-green-500 to-emerald-500", desc: "Contributing to the global commons." }
        ].map((c) => (
          <motion.div 
            key={c.id}
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
              <button 
                onClick={() => handleAction(`View ${c.tag} Community`)}
                className="w-full py-4 border-2 border-primary/20 hover:border-primary text-primary font-bold rounded-2xl transition-all cursor-pointer border-none"
              >
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

const Testimonials = () => {
  const testimonials = [
    {
      name: "Arjun Rao",
      role: "SDE-3 @ PhonePe",
      text: "Namma Dev is the community I wish I had when I started my career in Bengaluru. The networking opportunities are unmatched.",
      avatar: "https://i.pravatar.cc/150?u=arjun",
      rating: 5
    },
    {
      name: "Deepa Patil",
      role: "Founder, MysuruAI",
      text: "The support I got for my startup from fellow Kannada engineers was instrumental in our seed round. Truly a global-local culture.",
      avatar: "https://i.pravatar.cc/150?u=deepa",
      rating: 5
    },
    {
      name: "Karthik Gowda",
      role: "Open Source Contributor",
      text: "From weekend hackathons to career advice, Namma Dev is more than a platform—it's a movement.",
      avatar: "https://i.pravatar.cc/150?u=karthik",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-32 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black dark:text-white mb-6">Voices of the <span className="text-primary">Ecosystem</span></h2>
          <p className="text-xl text-slate-500">Don't take our word for it—hear from the engineers building the future.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="glass-card flex flex-col items-center text-center p-10"
            >
              <div className="flex gap-1 mb-6 text-yellow-400">
                {[...Array(t.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p className="text-lg text-slate-600 dark:text-slate-300 italic mb-8 leading-relaxed">"{t.text}"</p>
              <div className="mt-auto">
                <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-primary" />
                <h4 className="font-bold dark:text-white text-xl">{t.name}</h4>
                <p className="text-sm text-primary font-bold uppercase tracking-wider">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Identity = ({ images, handleAction }) => (
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
        <button 
          onClick={() => handleAction('Claim Profile')}
          className="bg-gradient-to-r from-accent to-primary hover:from-accent-dark hover:to-primary-dark text-white px-12 py-6 rounded-full font-black text-2xl shadow-2xl group transition-all transform hover:scale-105 cursor-pointer border-none"
        >
          Claim your profile <ChevronRight className="inline-block ml-2 group-hover:translate-x-2 transition-all" />
        </button>
      </motion.div>
    </div>

    <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 blur-[150px] rounded-full"></div>
    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/10 blur-[150px] rounded-full"></div>
  </section>
);

const Footer = ({ email, setEmail, subscribed, handleSubscribe, scrollToSection, handleAction }) => (
  <footer className="bg-white dark:bg-slate-950 border-t dark:border-white/5 pt-32 pb-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
        <div className="max-w-md">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-xl shadow-primary/30">
                <img src={logo} alt="Namma Dev Logo" className="w-full h-full object-cover" />
              </div>
            <span className="font-black text-3xl tracking-tighter dark:text-white">Namma Dev</span>
          </div>
          <p className="text-xl text-slate-500 dark:text-slate-400 mb-10 leading-relaxed">
            Where Karnataka Engineers Unite. The definitive community for the silicon state of India.
          </p>
          
          <form onSubmit={handleSubscribe} className="relative mb-8">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Stay updated via email"
              className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-white/10 px-6 py-4 rounded-2xl focus:outline-none focus:border-primary transition-all pr-32 font-bold dark:text-white"
              required
            />
            <button 
              type="submit"
              disabled={subscribed}
              className={`absolute right-2 top-2 bottom-2 px-6 rounded-xl font-black text-sm transition-all ${
                subscribed 
                  ? 'bg-accent text-white scale-95' 
                  : 'bg-primary text-white hover:bg-primary-dark cursor-pointer'
              }`}
            >
              {subscribed ? 'Subscribed!' : 'Subscribe'}
            </button>
          </form>

          <div className="flex gap-4">
            {[Twitter, Github, Linkedin].map((Icon, i) => (
              <button key={i} onClick={() => handleAction('Social Link')} className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:border-primary hover:text-primary transition-all hover:shadow-lg cursor-pointer">
                <Icon size={24} />
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-16">
           <div>
            <h4 className="font-black text-lg dark:text-white mb-8">Platform</h4>
            <ul className="space-y-4 list-none p-0">
              {['Home', 'Features', 'Events', 'Growth', 'Community', 'Testimonials'].map(item => (
                <li key={item}>
                  <button 
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors font-bold cursor-pointer border-none bg-transparent"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-black text-lg dark:text-white mb-8">Hubs</h4>
            <ul className="space-y-4 list-none p-0">
              {['Bengaluru', 'Mysuru', 'Hubballi', 'Mangaluru'].map(item => (
                <li key={item}>
                  <button 
                    onClick={() => handleAction(`City: ${item}`)}
                    className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors font-bold cursor-pointer border-none bg-transparent"
                  >
                    {item}
                  </button>
                </li>
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
          <button onClick={() => handleAction('Privacy')} className="hover:text-primary transition-colors cursor-pointer border-none bg-transparent">Privacy</button>
          <button onClick={() => handleAction('Terms')} className="hover:text-primary transition-colors cursor-pointer border-none bg-transparent">Terms</button>
        </div>
      </div>
    </div>
  </footer>
);

const LandingPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [counters, setCounters] = useState({ engineers: 0, startups: 0, hubs: 0 });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Intersection Observer for active section tracking
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -80% 0px',
      threshold: 0
    };

    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sections = ['features', 'events', 'growth', 'community', 'testimonials', 'identity'];
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Counter animation logic
  useEffect(() => {
    const targetValues = { engineers: 50, startups: 500, hubs: 20 };
    const duration = 2000;
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    
    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      
      setCounters({
        engineers: Math.floor(targetValues.engineers * progress),
        startups: Math.floor(targetValues.startups * progress),
        hubs: Math.floor(targetValues.hubs * progress)
      });

      if (frame === totalFrames) clearInterval(timer);
    }, frameRate);

    return () => clearInterval(timer);
  }, [activeSection === 'growth']); // Restart when growth section is active

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const handleAction = (action) => {
    console.log(`${action} triggered`);
    // Placeholder for future actions like opening a signup modal
    scrollToSection('community');
  };

  const images = {
    hero: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&q=80&w=2000",
    mgroad: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1500",
    tech: "https://images.unsplash.com/photo-1580508174046-170816f65662?auto=format&fit=crop&q=80&w=1500",
    community: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=1500",
    vidhana_soudha: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=1500"
  };

  return (
    <div className="min-h-screen bg-white transition-colors duration-500 dark:bg-slate-950 font-sans selection:bg-primary/20 selection:text-primary bg-mesh">
      <Navbar 
        isDarkMode={isDarkMode} 
        activeSection={activeSection} 
        toggleDarkMode={toggleDarkMode} 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        scrollToSection={scrollToSection} 
        handleAction={handleAction}
      />
      <Hero images={images} handleAction={handleAction} scrollToSection={scrollToSection} />
      <Features images={images} />
      <Events />
      <Growth images={images} counters={counters} />
      <Community images={images} handleAction={handleAction} />
      <Testimonials />
      <Identity images={images} handleAction={handleAction} />
      <Footer 
        email={email} 
        setEmail={setEmail} 
        subscribed={subscribed} 
        handleSubscribe={handleSubscribe} 
        scrollToSection={scrollToSection} 
        handleAction={handleAction}
      />
    </div>
  );
};

export default LandingPage;
