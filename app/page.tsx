"use client";
import probillingLogo from '../app/probilling.png';
import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import { 
  ShieldCheck, Activity, FileText, PieChart, Users, 
  CheckCircle2, ArrowRight, BarChart3, Database, 
  Globe, HeartPulse, ClipboardCheck, Briefcase,
  Mail, Phone, MapPin, Building2, Laptop
} from "lucide-react";
import { useState, useEffect } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  },
  viewport: { once: true }
};

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

  const services = [
    { title: "Charge Entry", description: "Accurate and timely entry of all patient encounters into your billing system.", icon: <FileText className="w-6 h-6" /> },
    { title: "Insurance Verification", description: "Verifying patient coverage and benefits before services are rendered to ensure payment.", icon: <ShieldCheck className="w-6 h-6" /> },
    { title: "Claim Submission", description: "Daily electronic submission of CMS-1500 and UB-04 claims with first-pass acceptance focus.", icon: <ClipboardCheck className="w-6 h-6" /> },
    { title: "Payment Posting", description: "Precise posting of ERA and EOB payments to maintain accurate patient accounts.", icon: <Activity className="w-6 h-6" /> },
    { title: "AR Follow-ups", description: "Aggressive follow-up on outstanding claims to maximize revenue and reduce aging.", icon: <PieChart className="w-6 h-6" /> },
    { title: "Denial Management", description: "Thorough analysis and resolution of denied claims to recover lost revenue.", icon: <BarChart3 className="w-6 h-6" /> },
    { title: "Appeals & Analysis", description: "Handling complex appeals and underpayment analysis to ensure fair reimbursement.", icon: <ArrowRight className="w-6 h-6" /> },
    { title: "Patient Billing", description: "Clear and professional patient statements and compassionate billing support.", icon: <Users className="w-6 h-6" /> },
  ];

  const software = ["Kareo", "AdvancedMD", "Athena", "eClinicalWorks", "NextGen"];
  const portals = ["Availity", "UnitedHealthcare", "Aetna", "Blue Cross Blue Shield"];
  const specialties = ["Family Practice", "Internal Medicine", "Mental Health", "Pediatrics", "Inpatient & Outpatient", "Home Health"];
  
  const codingExpertise = [
    { code: "CPT", desc: "E/M, Inpatient, Outpatient" },
    { code: "ICD-10-CM", desc: "Clinical Diagnosis Coding" },
    { code: "HCPCS", desc: "Supplies and Procedures" },
    { code: "Modifiers", desc: "25, 26, 59, TC" }
  ];

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#fefefe] text-[#112b5d] selection:bg-[#1579b7]/20 overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#1579b7] origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#fefefe]/80 backdrop-blur-md border-b border-[#112b5d]/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 cursor-pointer group"
          >
  

<div className="relative w-10 h-10 sm:w-24 sm:h-20 md:w-26 md:h-26 transition-transform group-hover:scale-110">
  <Image
    src="/probilling.png"
    alt="Pro Billing Circle Logo"
    fill
    className="object-contain"
    priority
  />
</div>


            
          </motion.div>
          <div className="hidden md:flex gap-8 text-sm font-semibold text-[#112b5d]/70">
            {["Services", "Expertise", "Specialties", "Software", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#1579b7] transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1579b7] transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact" 
            className="px-6 py-2.5 rounded-full bg-[#112b5d] text-white text-sm font-bold hover:bg-[#1579b7] transition-all shadow-md"
          >
            Get Started
          </motion.a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 md:pt-52 md:pb-32 px-6 overflow-hidden">
        {/* Subtle Background Blobs */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#1579b7]/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 -left-20 w-96 h-96 bg-[#112b5d]/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1579b7]/10 text-[#1579b7] text-xs font-bold mb-8 border border-[#1579b7]/20"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1579b7] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1579b7]"></span>
            </span>
            2+ Years of Excellence in RCM
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-7xl font-bold text-[#112b5d] mb-8 tracking-tight"
          >
            Streamlined <span className="text-[#1579b7]">Revenue Cycle</span> <br/>Management for Providers
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#112b5d]/70 text-lg md:text-xl max-w-3xl leading-relaxed mb-12"
          >
            Pro Billing Circle specializes in complete Revenue Cycle Management services for US healthcare providers. 
            We ensure your practice thrives through reduced denials and improved first-pass acceptance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <motion.a 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#contact" 
              className="px-8 py-4 rounded-full bg-[#1579b7] text-white font-bold flex items-center gap-2 hover:bg-[#112b5d] transition-all shadow-xl shadow-[#1579b7]/20"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#services" 
              className="px-8 py-4 rounded-full border-2 border-[#112b5d]/10 text-[#112b5d] font-bold hover:bg-[#112b5d]/5 transition-all"
            >
              Our Services
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#112b5d] text-white relative">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {[
            { label: "Practices Served", value: "100+", icon: <Building2 className="w-8 h-8 text-[#1579b7]" /> },
            { label: "Client Satisfaction", value: "98%", icon: <Users className="w-8 h-8 text-[#1579b7]" /> },
            { label: "Hands-on Experience", value: "2+ Years", icon: <Briefcase className="w-8 h-8 text-[#1579b7]" /> },
          ].map((stat) => (
            <motion.div 
              variants={fadeInUp}
              key={stat.label} 
              className="flex flex-col items-center text-center group"
            >
              <motion.div 
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="mb-4"
              >
                {stat.icon}
              </motion.div>
              <div className="text-4xl md:text-5xl font-bold mb-2 tabular-nums">{stat.value}</div>
              <div className="text-sm uppercase tracking-widest text-white/60 font-semibold">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-[#1579b7] font-bold uppercase tracking-widest text-sm mb-4">Core Solutions</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-[#112b5d]">Complete RCM Services</h3>
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service) => (
              <motion.div
                variants={fadeInUp}
                key={service.title}
                whileHover={{ y: -10 }}
                className="p-8 rounded-2xl bg-white border border-[#112b5d]/10 hover:border-[#1579b7] hover:shadow-2xl hover:shadow-[#1579b7]/10 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1579b7]/10 flex items-center justify-center text-[#1579b7] mb-6 group-hover:bg-[#1579b7] group-hover:text-white transition-all">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-[#112b5d] mb-4">{service.title}</h4>
                <p className="text-[#112b5d]/60 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-24 px-6 bg-[#112b5d]/5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-[#1579b7] font-bold uppercase tracking-widest text-sm mb-4">Our Expertise</h2>
              <h3 className="text-4xl font-bold text-[#112b5d] mb-8">Specialized Medical Coding & Compliance</h3>
              <p className="text-[#112b5d]/70 text-lg mb-8 leading-relaxed">
                We focus on reducing denials and improving first-pass claim acceptance through meticulous coding and thorough insurance portal management.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {codingExpertise.map((item, idx) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    key={item.code} 
                    className="p-4 rounded-xl bg-white shadow-sm border border-[#112b5d]/5 hover:shadow-md transition-shadow"
                  >
                    <div className="font-bold text-[#1579b7] text-lg mb-1">{item.code}</div>
                    <div className="text-xs text-[#112b5d]/60 font-semibold">{item.desc}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-[#112b5d] rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#1579b7]/20 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
              <h4 className="text-2xl font-bold mb-8 relative z-10">Insurance Portals Managed</h4>
              <div className="space-y-6 relative z-10">
                {portals.map((portal, idx) => (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    key={portal} 
                    className="flex items-center gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#1579b7]/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="text-[#1579b7] w-5 h-5" />
                    </div>
                    <span className="text-lg font-medium">{portal}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Software & Specialties */}
      <section id="software" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            <motion.div {...fadeInUp}>
              <h3 className="text-3xl font-bold text-[#112b5d] mb-10 flex items-center gap-3">
                <Laptop className="text-[#1579b7]" /> Software Experience
              </h3>
              <div className="flex flex-wrap gap-4">
                {software.map((sw, idx) => (
                  <motion.span 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, backgroundColor: "#1579b7", color: "#fff" }}
                    key={sw} 
                    className="px-6 py-3 rounded-full bg-white border-2 border-[#112b5d]/5 text-[#112b5d] font-bold shadow-sm cursor-default transition-colors"
                  >
                    {sw}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            <motion.div id="specialties" {...fadeInUp}>
              <h3 className="text-3xl font-bold text-[#112b5d] mb-10 flex items-center gap-3">
                <Activity className="text-[#1579b7]" /> Supported Specialties
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {specialties.map((spec, idx) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    key={spec} 
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#1579b7]/5 transition-colors group"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#1579b7] group-hover:scale-150 transition-transform" />
                    <span className="font-semibold text-[#112b5d]/80">{spec}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Onboarding Section */}
      <section className="py-24 px-6 bg-[#1579b7] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#fff_1px,_transparent_1px)] [background-size:40px_40px]" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 {...fadeInUp} className="text-white/80 font-bold uppercase tracking-widest text-sm mb-6">Process</motion.h2>
          <motion.h3 {...fadeInUp} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-bold mb-12">Seamless Client Onboarding</motion.h3>
          <motion.p {...fadeInUp} transition={{ delay: 0.2 }} className="text-xl mb-16 text-white/90 leading-relaxed">
            Once you confirm <span className="font-bold underline italic">“Let’s start,”</span> we require simple access to begin optimizing your revenue cycle:
          </motion.p>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 text-left"
          >
            {[
              { title: "EMR/Billing Access", desc: "Standard login for charge entry and claim review." },
              { title: "Clearinghouse", desc: "Access to manage electronic claim submissions." },
              { title: "Insurance Portals", desc: "Standard access for verification and follow-ups." },
            ].map((step, i) => (
              <motion.div 
                variants={fadeInUp}
                key={step.title} 
                whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.15)" }}
                className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 transition-colors"
              >
                <div className="text-4xl font-bold text-white/20 mb-4">0{i+1}</div>
                <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                <p className="text-sm text-white/70">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 px-6 bg-[#fefefe]">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2.5rem] border border-[#112b5d]/10 shadow-2xl p-8 md:p-16 flex flex-col md:flex-row gap-16 relative overflow-hidden"
          >
            <div className="flex-1 relative z-10">
              <h3 className="text-4xl font-bold text-[#112b5d] mb-6">Let&apos;s Optimize Your Practice</h3>
              <p className="text-[#112b5d]/60 mb-10 text-lg">
                Ready to reduce denials and increase your revenue? Contact us today for a free practice analysis.
              </p>
       <div className="space-y-6">
  {[
    { icon: <Mail className="w-5 h-5" />, label: "Email Us", value: "harun_hanif@outlook.com" },
    { icon: <Globe className="w-5 h-5" />, label: "Location", value: "Remote Operations, Pakistan" },
    { 
      icon: <Phone className="w-5 h-5" />, 
      label: "WhatsApp", 
      value: "+92 321 5513687",
      link: "https://wa.me/923215513687" // WhatsApp link
    }
  ].map((item, idx) => (
    <motion.div 
      whileHover={{ x: 10 }}
      key={idx} 
      className="flex items-center gap-4 group"
    >
      <a 
        href={item.link ? item.link : "#"} 
        target={item.link ? "_blank" : undefined} 
        rel={item.link ? "noopener noreferrer" : undefined}
        className="w-12 h-12 rounded-full bg-[#1579b7]/10 flex items-center justify-center text-[#1579b7] group-hover:bg-[#1579b7] group-hover:text-white transition-all"
      >
        {item.icon}
      </a>
      <div>
        <div className="text-xs font-bold text-[#112b5d]/40 uppercase tracking-widest">{item.label}</div>
        <div className="font-bold text-[#112b5d]">{item.value}</div>
      </div>
    </motion.div>
  ))}
</div>


            </div>
            <div className="flex-1 bg-[#112b5d]/5 rounded-3xl p-8 relative z-10">
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Practice Name" 
                  className="w-full px-6 py-4 rounded-xl border border-[#112b5d]/10 focus:border-[#1579b7] bg-white outline-none transition-all shadow-sm"
                />
                <input 
                  type="email" 
                  placeholder="Professional Email" 
                  className="w-full px-6 py-4 rounded-xl border border-[#112b5d]/10 focus:border-[#1579b7] bg-white outline-none transition-all shadow-sm"
                />
                <textarea 
                  placeholder="Tell us about your needs..." 
                  rows={4}
                  className="w-full px-6 py-4 rounded-xl border border-[#112b5d]/10 focus:border-[#1579b7] bg-white outline-none transition-all resize-none shadow-sm"
                />
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl bg-[#1579b7] text-white font-bold hover:bg-[#112b5d] transition-all shadow-lg shadow-[#1579b7]/20"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[#112b5d]/5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-sm font-semibold text-[#112b5d]/40">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <div className="relative w-20 h-20">
              <Image 
                src="/probilling.png" 
                alt="Pro Billing Circle Logo" 
                fill
                className="object-contain"
              />
            </div>
            <span className="text-[#112b5d] font-bold text-lg">Pro Billing Circle</span>
          </motion.div>
          <div>© {new Date().getFullYear()} Pro Billing Circle. All rights reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-[#1579b7] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#1579b7] transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
