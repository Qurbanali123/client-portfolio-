"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { 
  Github, Mail, Code, Briefcase, GraduationCap, 
  ExternalLink, Layout, Database, Smartphone, Globe, 
  Server, Search, CheckCircle2, ArrowRight
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const wordpressProjects = [
    { name: "Multiway - Construction & Logistics", url: "https://multiway.ae/", category: "Corporate" },
    { name: "Transport Services Australia", url: "https://aitools.space/transportaustralia/", category: "Services" },
    { name: "Moon Ventures", url: "https://moonventures.com/", category: "Ventures" },
    { name: "Small Wonder Preschool", url: "https://smallwonderpreschool.com/", category: "Education" },
    { name: "The Ring Security Services", url: "https://thering-securityservices.com/", category: "Security" },
    { name: "Silk and Stones", url: "https://aitools.space/silkandstones/", category: "Beauty" },
    { name: "Azya Perfume", url: "https://aitools.space/azyaperfume/", category: "Brand" },
    { name: "WillItCloud", url: "https://willitcloud.de/", category: "Tech" },
    { name: "Elotec Elektrotechnik", url: "https://www.elotec-elektrotechnik.de/", category: "Engineering" },
  ];

  const services = [
    {
      title: "MERN Stack Development",
      description: "Building robust, scalable, and secure full-stack web applications using MYSQL, Express, React, and Node.js.",
      icon: <Database className="w-6 h-6" />,
    },
    {
      title: "WordPress Development",
      description: "Custom theme and plugin development, WooCommerce integration, and performance optimization for business sites.",
      icon: <Layout className="w-6 h-6" />,
    },
    {
      title: "Frontend Excellence",
      description: "Crafting beautiful, responsive, and interactive user interfaces with Next.js, Tailwind CSS, and Framer Motion.",
      icon: <Smartphone className="w-6 h-6" />,
    },
    {
      title: "API Integration",
      description: "Seamlessly connecting third-party services, payment gateways, and developing custom RESTful APIs.",
      icon: <Server className="w-6 h-6" />,
    },
  ];

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#030712] text-slate-200 selection:bg-cyan-500/30 overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-cyan-500 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Decorative Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-600/10 blur-[100px] rounded-full" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#030712]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold tracking-tighter bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
          >
            QA.DEV
          </motion.span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            {["About", "Services", "Projects", "Education", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">
                {item}
              </a>
            ))}
          </div>
          <a 
            href="#contact" 
            className="px-5 py-2 rounded-full bg-white text-black text-sm font-bold hover:bg-cyan-400 transition-colors"
          >
            Hire Me
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 md:pt-60 md:pb-40 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Available for new opportunities
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-8xl font-black tracking-tight text-white mb-8"
          >
            Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">future</span> of web
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-12"
          >
            I&apos;m Qurban Ali, a Software Engineer specializing in MERN Stack and WordPress
             development, passionate about creating high-performance and scalable digital solutions.
              I leverage cutting-edge technologies to deliver secure, responsive, and impactful web experiences
               that meet modern business needs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <a href="#projects" className="group px-8 py-4 rounded-full bg-cyan-500 text-black font-bold flex items-center gap-2 hover:bg-cyan-400 transition-all shadow-xl shadow-cyan-500/20">
              Explore Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm font-bold hover:bg-white/10 transition-all">
              Contact Me
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Projects Completed", value: "20+" },
            { label: "Satisfied Clients", value: "15+" },
            { label: "WordPress Sites", value: "17+" },
            { label: "Technologies", value: "10+" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-slate-500 uppercase tracking-widest font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-cyan-500 font-bold uppercase tracking-widest text-sm mb-4 text-center">What I Offer</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white text-center">Expert Solutions for Your Business</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{service.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-3xl overflow-hidden border border-white/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Code className="w-24 h-24 text-cyan-500/50" />
              </div>
            </motion.div>
          <div>
  <h2 className="text-3xl font-bold text-white mb-6">
    Passionate about clean code and modern design.
  </h2>
  <div className="space-y-4 text-slate-400">
    <p>
      Dedicated to writing <span className="text-cyan-400">clean, efficient code</span> 
      and crafting <span className="text-cyan-400">modern, intuitive digital experiences</span> that users love.
    </p>
    <p>
      Experienced in <span className="text-cyan-400">MERN Stack and WordPress Development</span>, 
      building scalable, maintainable, and high-performance applications.
    </p>
    <p>
      Driven by a passion for <span className="text-cyan-400">innovative design</span> and 
      <span className="text-cyan-400">user-focused solutions</span>, bridging technical complexity with seamless experiences.
    </p>
  </div>
</div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <h2 className="text-cyan-500 font-bold uppercase tracking-widest text-sm mb-4">Portfolio</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white">Featured Projects</h3>
            </div>
            <p className="text-slate-400 max-w-md">
              A selection of my best work, ranging from complex blockchain solutions to elegant corporate WordPress sites.
            </p>
          </div>

          {/* Main Project Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative rounded-[2rem] bg-gradient-to-br from-cyan-500/10 to-blue-600/5 border border-white/5 overflow-hidden mb-16 p-8 md:p-12"
          >
            <div className="absolute top-0 right-0 p-8">
              <span className="px-4 py-1.5 bg-cyan-500 text-black text-xs font-black uppercase tracking-widest rounded-full">FYP Milestone</span>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Code className="text-cyan-400 mb-8 w-12 h-12" />
                <h4 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">Fake Product Detection <br/>using Blockchain</h4>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  Solving the multi-billion dollar counterfeit problem. A decentralized verification system 
                  that ensures product authenticity from factory to consumer.
                </p>
                <div className="flex flex-wrap gap-3 mb-10">
                  {["Solidity", "Next.js", "Node.js", "Ethereum"].map(tag => (
                    <span key={tag} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-300">{tag}</span>
                  ))}
                </div>
                <a href="https://fyp-frontend-iota-five.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cyan-400 font-bold hover:text-cyan-300 transition-colors group/link">
                  View Case Study <ExternalLink className="w-5 h-5 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </a>
              </div>
              <div className="relative aspect-video rounded-2xl bg-white/5 border border-white/10 overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center text-white/10 font-black text-6xl">FYP</div>
              </div>
            </div>
          </motion.div>

          <h4 className="text-2xl font-bold text-white mb-10 text-center">WordPress Showcase</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wordpressProjects.map((project, index) => (
              <motion.a
                key={project.url}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 hover:bg-white/[0.04] transition-all flex flex-col justify-between aspect-video"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-cyan-500 transition-colors">
                      {project.category}
                    </span>
                    <Globe className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                  </div>
                  <h5 className="text-lg font-bold text-slate-200 group-hover:text-white transition-colors">{project.name}</h5>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-cyan-500 opacity-0 group-hover:opacity-100 transition-all">
                  Visit Site <ArrowRight className="w-3 h-3" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills / Expertise (Visual) */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-white">Technical Skills</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {[
            "HTML5","JavaScript", "React.js", "Next.js",
            "Node.js", "Express.js", "MYSQL", "REST APIs", 
            "WordPress", "WooCommerce", "Tailwind CSS", "Git", "Blockchain"
          ].map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.03 }}
              viewport={{ once: true }}
              className="px-6 py-3 rounded-2xl bg-white/[0.02] border border-white/10 text-slate-300 font-medium hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:text-cyan-400 transition-all cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 md:py-32 px-6 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-2">Education Journey</h2>
            <div className="w-20 h-1.5 bg-cyan-500 rounded-full" />
          </div>
          <div className="space-y-12 relative before:absolute before:left-0 md:before:left-1/2 before:top-0 before:bottom-0 before:w-px before:bg-white/10">
            {[
              { 
                degree: "BS Software Engineering", 
                school: "SZABIST University Islamabad", 
                period: "2026",
                details: "Advancing knowledge in enterprise architecture and distributed systems. (CGPA: 3.2)",
                side: "left"
              },
              { 
                degree: "FSc (Pre-Engineering)", 
                school: "Public School Jutial Gilgit", 
                period: "2021",
                details: "Completed higher secondary education with major focus on Applied Physics & Mathematics.",
                side: "right"
              },
              { 
                degree: "Matriculation", 
                school: "DJ High School Shamaran", 
                period: "2019",
                details: "Secondary education with a passion for science and technology.",
                side: "left"
              }
            ].map((edu, index) => (
              <motion.div 
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row gap-8 ${edu.side === 'right' ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="absolute left-[-5px] md:left-1/2 md:translate-x-[-50%] top-0 w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] z-10" />
                <div className={`md:w-1/2 pl-8 md:pl-0 ${edu.side === 'left' ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="text-cyan-500 font-bold mb-1">{edu.period}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                  <div className="text-slate-300 text-sm font-medium mb-3">{edu.school}</div>
                  <p className="text-slate-500 text-xs leading-relaxed max-w-sm ml-auto mr-0">{edu.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section (Brief) */}
      <section id="experience" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center justify-between">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-white mb-6">Gained valuable experience at Horizon Tech </h2>
            <ul className="space-y-4">
              {[
                "Full-stack MERN application development",
                "Scalable WordPress & WooCommerce solutions",
                "SEO & Performance optimization",
                "Cross-functional team collaboration"
              ].map(item => (
                <li key={item} className="flex items-center gap-3 text-slate-400">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 rounded-3xl bg-cyan-500 text-black">
            <Briefcase className="w-12 h-12 mb-6" />
            <h3 className="text-2xl font-black mb-2 leading-tight">MERN & WordPress Developer</h3>
            <p className="font-bold opacity-80">Horizon Tech — Islamabad</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-40 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">Ready to work <br/> together?</h2>
          <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto">
            I&apos;m currently available for freelance projects and full-time engineering roles. 
            Let&apos;s build something extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="mailto:qurbanaliatish@gmail.com" 
              className="px-10 py-5 rounded-full bg-white text-black font-black text-lg hover:bg-cyan-400 transition-all flex items-center justify-center gap-3"
            >
              <Mail className="w-5 h-5" /> Say Hello
            </a>
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-10 py-5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md font-black text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3"
            >
              <Github className="w-5 h-5" /> My GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-bold tracking-tighter text-white">QA.DEV</div>
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Qurban Ali. Crafted with React & Framer Motion.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
            <a href="mailto:qurbanaliatish@gmail.com" className="text-slate-500 hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
