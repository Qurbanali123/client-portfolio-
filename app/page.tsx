"use client";
import { easeOut } from "framer-motion";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

import {
  ShieldCheck, Activity, FileText, PieChart, Users,
  CheckCircle2, ArrowRight, BarChart3,
  Globe, HeartPulse, ClipboardCheck, Briefcase,
  Mail, Phone, Building2, Laptop, Star,
  TrendingUp, Clock, Award, ChevronDown, Menu, X,
  Zap, Target, Shield
} from "lucide-react";

// ─── Animation Variants ──────────────────────────────────────────────────────
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: easeOut }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true }
};

const cardVariant = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: easeOut }
};

// ─── CountUp Component ────────────────────────────────────────────────────────
function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) { setCount(target); clearInterval(timer); }
          else setCount(Math.floor(current));
        }, duration / steps);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// ─── Floating Particle ────────────────────────────────────────────────────────
function Particle({ i }: { i: number }) {
  return (
    <motion.div
      animate={{ y: [0, -50, 0], x: [0, i % 2 === 0 ? 25 : -25, 0], opacity: [0, 0.7, 0] }}
      transition={{ duration: 4 + i * 0.7, repeat: Infinity, delay: i * 0.6, ease: "easeInOut" }}
      className="absolute w-1 h-1 rounded-full bg-[#1579b7]"
      style={{ left: `${8 + i * 13}%`, top: `${15 + (i % 4) * 20}%` }}
    />
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial(p => (p + 1) % 3), 4000);
    return () => clearInterval(t);
  }, []);

  const services = [
    { title: "Charge Entry", description: "Accurate and timely entry of all patient encounters into your billing system.", icon: <FileText className="w-6 h-6" /> },
    { title: "Insurance Verification", description: "Verifying patient coverage and benefits before services are rendered.", icon: <ShieldCheck className="w-6 h-6" /> },
    { title: "Claim Submission", description: "Daily electronic submission of CMS-1500 and UB-04 claims with first-pass focus.", icon: <ClipboardCheck className="w-6 h-6" /> },
    { title: "Payment Posting", description: "Precise posting of ERA and EOB payments to maintain accurate patient accounts.", icon: <Activity className="w-6 h-6" /> },
    { title: "AR Follow-ups", description: "Aggressive follow-up on outstanding claims to maximize revenue and reduce aging.", icon: <PieChart className="w-6 h-6" /> },
    { title: "Denial Management", description: "Thorough analysis and resolution of denied claims to recover lost revenue.", icon: <BarChart3 className="w-6 h-6" /> },
    { title: "Appeals & Analysis", description: "Handling complex appeals and underpayment analysis to ensure fair reimbursement.", icon: <TrendingUp className="w-6 h-6" /> },
    { title: "Patient Billing", description: "Clear and professional patient statements and compassionate billing support.", icon: <Users className="w-6 h-6" /> },
  ];

  const software = ["Kareo", "AdvancedMD", "Athena", "eClinicalWorks", "NextGen", "OfficeAlly", "ECW", "Simple Practice", "Session", "Optimentra"];
  const portals = ["Availity", "UnitedHealthcare", "Aetna", "Blue Cross Blue Shield"];
  const specialties = ["Family Practice", "Internal Medicine", "Mental Health", "Pediatrics", "Inpatient & Outpatient", "Home Health"];

  const codingExpertise = [
    { code: "CPT", desc: "E/M, Inpatient, Outpatient", icon: <FileText className="w-5 h-5" /> },
    { code: "ICD-10-CM", desc: "Clinical Diagnosis Coding", icon: <Target className="w-5 h-5" /> },
    { code: "HCPCS", desc: "Supplies and Procedures", icon: <Shield className="w-5 h-5" /> },
    { code: "Modifiers", desc: "25, 26, 59, TC", icon: <Zap className="w-5 h-5" /> }
  ];

  const testimonials = [
    { name: "Dr. Sarah Mitchell", role: "Family Practice, Texas", text: "Pro Billing Circle reduced our denials by 68% in just 3 months. Our revenue has never been healthier.", rating: 5 },
    { name: "Dr. James Okafor", role: "Internal Medicine, Florida", text: "The team is responsive, knowledgeable, and genuinely cares about our practice's financial health.", rating: 5 },
    { name: "Dr. Priya Sharma", role: "Mental Health, California", text: "Switching to Pro Billing Circle was the best decision we made. Clean claims, faster payments.", rating: 5 },
  ];

  const whyUs = [
    { icon: <Clock className="w-6 h-6" />, title: "24h Turnaround", desc: "Claims submitted within 24 hours of encounter, every time." },
    { icon: <Target className="w-6 h-6" />, title: "96% First-Pass Rate", desc: "Industry-leading clean claim rate means faster reimbursements." },
    { icon: <Shield className="w-6 h-6" />, title: "HIPAA Compliant", desc: "Full compliance with all data security and privacy regulations." },
    { icon: <Award className="w-6 h-6" />, title: "Certified Coders", desc: "CPC-certified medical coders for all specialties we serve." },
  ];

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#040d1a] text-white selection:bg-[#1579b7]/30 overflow-x-hidden">

      {/* ── Scroll Progress ── */}
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#1579b7] to-[#5bb8f5] origin-left z-[100]" style={{ scaleX }} />

      {/* ── Navigation ── */}
      <nav
  className="fixed top-0 w-full z-50 border-b border-white/5"
  style={{ background: "rgba(255, 255, 255, 0.95)", backdropFilter: "blur(20px)" }}
>
  <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 2 }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-3 cursor-pointer group"
    >
      <div className="relative w-32 h-20 transition-transform group-hover:scale-105">
        <Image
          src="/probilling.png"
          alt="Pro Billing Circle Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
    </motion.div>

    {/* Desktop Links */}
    <div className="hidden md:flex gap-8 text-sm font-semibold text-[#1579b7]">
      {["Services", "Expertise", "Specialties", "Software", "Contact"].map((item, i) => (
        <motion.a
          key={item}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * i }}
          href={`#${item.toLowerCase()}`}
          className="hover:text-[#0d5a8a] transition-colors relative group py-1"
        >
          {item}
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#1579b7] transition-all duration-300 group-hover:w-full rounded-full" />
        </motion.a>
      ))}
    </div>

    {/* Call-to-Action & Mobile Toggle */}
    <div className="flex items-center gap-4">
      <motion.a
        whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(21,121,183,0.4)" }}
        whileTap={{ scale: 0.95 }}
        href="#contact"
        className="hidden md:block px-6 py-2.5 rounded-full font-bold text-sm text-white relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1579b7, #0d5a8a)" }}
      >
        <motion.span
          animate={{ x: ["100%", "-100%"] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
        />
        <span className="relative z-10">Get Started</span>
      </motion.a>
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden text-[#1579b7] hover:text-[#0d5a8a]"
      >
        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  <AnimatePresence>
    {mobileMenuOpen && (
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className="md:hidden border-t border-white/5 overflow-hidden"
        style={{ background: "rgba(4,13,26,0.98)" }}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {["Services", "Expertise", "Specialties", "Software", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#1579b7] hover:text-[#0d5a8a] font-semibold py-2 border-b border-white/5 transition-colors"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 px-6 py-3 rounded-full bg-[#1579b7] text-white font-bold text-center"
          >
            Get Started
          </a>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
</nav>
      {/* ── Hero Section ── */}
      <section className="relative pt-40 pb-28 md:pt-52 md:pb-36 px-6 overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,#1579b730,transparent)]" />
          <div className="absolute inset-0 bg-[linear-gradient(#1579b706_1px,transparent_1px),linear-gradient(to_right,#1579b706_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>
        <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.12, 0.25, 0.12] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-15%] left-[-8%] w-[600px] h-[600px] rounded-full -z-10"
          style={{ background: "radial-gradient(circle, #1579b7 0%, transparent 70%)" }} />
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.18, 0.08] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-[-20%] right-[-8%] w-[700px] h-[700px] rounded-full -z-10"
          style={{ background: "radial-gradient(circle, #112b5d 0%, transparent 70%)" }} />
        {[...Array(8)].map((_, i) => <Particle key={i} i={i} />)}

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left */}
          <div>
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1579b7]/30 bg-[#1579b7]/10 mb-8">
              <motion.span animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-[#1579b7] inline-block" />
              <span className="text-xs font-bold text-[#1579b7] uppercase tracking-[0.2em]">Trusted by 100+ US Practices</span>
            </motion.div>

            {/* Animated ECG SVG */}
            <div className="mb-8 overflow-hidden">
              <svg viewBox="0 0 300 40" className="w-52 h-8 opacity-50">
                <motion.path d="M0,20 L40,20 L50,5 L60,35 L70,5 L80,20 L120,20 L130,10 L140,30 L150,10 L160,20 L300,20"
                  fill="none" stroke="#1579b7" strokeWidth="2"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "linear" }} />
              </svg>
            </div>

            <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
              Intelligent{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1579b7] to-[#5bb8f5]">Medical Billing</span>
                <motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 1.1 }}
                  className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#1579b7] to-[#5bb8f5] origin-left rounded-full" />
              </span>{" "}& RCM
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-white/50 mb-10 leading-relaxed max-w-lg">
              Faster reimbursements, fewer denials, and smarter financial reporting — built for US healthcare providers who demand results.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }} className="flex flex-wrap gap-4">
              <motion.a whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(21,121,183,0.5)" }}
                whileTap={{ scale: 0.95 }} href="#contact"
                className="relative px-8 py-4 rounded-full font-bold text-white overflow-hidden group"
                style={{ background: "linear-gradient(135deg, #1579b7, #0d5a8a)" }}>
                <motion.span animate={{ x: ["100%", "-100%"] }} transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                <span className="relative z-10 flex items-center gap-2">
                  Start Billing Smarter
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>
              <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#services"
                className="px-8 py-4 rounded-full border border-white/20 text-white/80 font-bold hover:bg-white/10 transition-all">
                View Services
              </motion.a>
            </motion.div>

            {/* Mini stats */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1, duration: 0.8 }}
              className="flex items-center gap-8 mt-10 pt-10 border-t border-white/10">
              {[{ val: "98%", label: "Satisfaction" },{ val: "100+", label: "Practices" }].map(item => (
                <div key={item.label} className="text-center">
                  <div className="text-2xl font-black text-[#1579b7]">{item.val}</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/30 font-semibold mt-0.5">{item.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right card */}
          <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.3 }} className="relative">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 rounded-3xl opacity-15"
              style={{ background: "conic-gradient(from 0deg, #1579b7, transparent 40%, #1579b7 70%, transparent)" }} />
            <motion.div animate={{ y: [0, -16, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-3xl overflow-hidden border border-white/10"
              style={{ background: "linear-gradient(145deg, #0a1628 0%, #0d1f3c 50%, #112b5d 100%)" }}>
              <motion.div animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 pointer-events-none" />
              <div className="p-10">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-white/30 font-bold mb-1">Revenue Dashboard</div>
                    <h3 className="text-xl font-black text-white">Monthly Performance</h3>
                  </div>
                  <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}
                    className="w-11 h-11 rounded-full bg-[#1579b7]/20 flex items-center justify-center">
                    <HeartPulse className="w-5 h-5 text-[#1579b7]" />
                  </motion.div>
                </div>
                <div className="space-y-6">
                  {[
                    { label: "Claims Processed", value: 95, color: "from-[#1579b7] to-[#5bb8f5]", delay: 0 },
                    { label: "Reimbursement Rate", value: 10, color: "from-[#0d5a8a] to-[#1579b7]", delay: 0.3 },
                    { label: "Denial Reduction", value: 72, color: "from-[#112b5d] to-[#1579b7]", delay: 0.6 },
                  ].map(bar => (
                    <div key={bar.label}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-white/50 font-medium">{bar.label}</span>
                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: bar.delay + 1.2 }}
                          className="text-white font-bold">{bar.value}%</motion.span>
                      </div>
                      <div className="h-2.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} animate={{ width: `${bar.value}%` }}
                          transition={{ duration: 1.5, delay: bar.delay + 0.6, ease: "easeOut" }}
                          className={`h-full rounded-full bg-gradient-to-r ${bar.color} relative`}>
                          <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: bar.delay }}
                            className="absolute right-0 top-0 h-full w-5 bg-white/50 rounded-full blur-sm" />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-3 gap-2 text-center">
                  {[{ label: "Turnaround", value: "24h" }, { label: "First-Pass", value: "96%" }, { label: "Clients", value: "100+" }].map(s => (
                    <div key={s.label}>
                      <div className="text-lg font-black text-[#1579b7]">{s.value}</div>
                      <div className="text-[9px] text-white/30 uppercase tracking-wider font-bold mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20">
          <span className="text-xs uppercase tracking-widest font-semibold">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── Stats Section ── */}
      <section className="py-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0a1628 0%, #112b5d 100%)" }}>
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "linear-gradient(rgba(21,121,183,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(21,121,183,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <motion.div animate={{ x: [0, 40, 0], y: [0, -30, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-[10%] w-64 h-64 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #1579b7, transparent)" }} />
        <motion.div animate={{ x: [0, -40, 0], y: [0, 30, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 right-[10%] w-80 h-80 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #1579b7, transparent)" }} />

        <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }}
          className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-8 relative z-10">
          {[
            { label: "Practices Served", numericValue: 100, suffix: "+", icon: <Building2 className="w-6 h-6 text-white" /> },
            { label: "Client Satisfaction", numericValue: 98, suffix: "%", icon: <Users className="w-6 h-6 text-white" /> },
            { label: "First-Pass Rate", numericValue: 96, suffix: "%", icon: <Target className="w-6 h-6 text-white" /> },
          
          ].map((stat, i) => (
            <motion.div variants={cardVariant} key={stat.label} className="flex flex-col items-center text-center group">
              <div className="relative mb-5">
                <motion.div animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.1, 0.3] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                  className="absolute inset-0 rounded-full bg-[#1579b7] blur-lg" />
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-2 rounded-full opacity-40"
                  style={{ background: "conic-gradient(from 0deg, #1579b7, transparent 50%, #1579b7 80%, transparent)" }} />
                <motion.div whileHover={{ scale: 1.1 }}
                  className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #1579b7, #0d5a8a)" }}>
                  {stat.icon}
                </motion.div>
              </div>
              <div className="text-4xl md:text-5xl font-black mb-1 tabular-nums"
                style={{ textShadow: "0 0 30px rgba(21,121,183,0.7)" }}>
                <CountUp target={stat.numericValue} suffix={stat.suffix} />
              </div>
              <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.15, duration: 0.5 }}
                className="w-8 h-0.5 bg-[#1579b7] my-2 origin-left rounded-full" />
              <div className="text-[11px] uppercase tracking-[0.2em] text-white/40 font-bold">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-24 px-6 bg-[#040d1a] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,#1579b70a,transparent)]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-[#1579b7] font-bold uppercase tracking-widest text-xs mb-4 block">Why Pro Billing Circle</span>
            <h3 className="text-4xl md:text-5xl font-black text-white">Built Different.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1579b7] to-[#5bb8f5]">Built Better.</span>
            </h3>
          </motion.div>
          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => (
              <motion.div variants={cardVariant} key={item.title} whileHover={{ y: -8, borderColor: "rgba(21,121,183,0.5)" }}
                className="p-8 rounded-2xl border border-white/8 relative overflow-hidden group transition-all duration-300"
                style={{ background: "linear-gradient(145deg, #0a1628, #0d1f3c)" }}>
                <motion.div animate={{ opacity: [0, 0.15, 0] }} transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                  className="absolute inset-0 bg-[#1579b7] rounded-2xl" />
                <div className="w-12 h-12 rounded-xl bg-[#1579b7]/15 flex items-center justify-center text-[#1579b7] mb-5
                  group-hover:bg-[#1579b7] group-hover:text-white transition-all duration-300 relative z-10">
                  {item.icon}
                </div>
                <h4 className="text-lg font-black text-white mb-2 relative z-10">{item.title}</h4>
                <p className="text-white/40 text-sm leading-relaxed relative z-10">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Services Section ── */}
      <section id="services" className="py-24 md:py-32 px-6 relative overflow-hidden"
        style={{ background: "linear-gradient(180deg, #040d1a 0%, #060f1f 100%)" }}>
        <div className="absolute inset-0 bg-[linear-gradient(#1579b705_1px,transparent_1px),linear-gradient(to_right,#1579b705_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <span className="text-[#1579b7] font-bold uppercase tracking-widest text-xs mb-4 block">Core Solutions</span>
            <h3 className="text-4xl md:text-5xl font-black text-white">Complete RCM Services</h3>
          </motion.div>
          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div variants={cardVariant} key={service.title} whileHover={{ y: -10 }}
                className="p-8 rounded-2xl border border-white/8 group relative overflow-hidden transition-all duration-300 cursor-default"
                style={{ background: "linear-gradient(145deg, #0a1628, #0d1f3c)" }}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "linear-gradient(145deg, rgba(21,121,183,0.08), transparent)" }} />
                <div className="w-12 h-12 rounded-xl bg-[#1579b7]/15 flex items-center justify-center text-[#1579b7] mb-6
                  group-hover:bg-[#1579b7] group-hover:text-white transition-all duration-300 relative z-10">
                  {service.icon}
                </div>
                <h4 className="text-lg font-black text-white mb-3 relative z-10">{service.title}</h4>
                <p className="text-white/40 text-sm leading-relaxed relative z-10">{service.description}</p>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-[#1579b7] to-[#5bb8f5] transition-all duration-500 rounded-b-2xl" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Expertise Section ── */}
      <section id="expertise" className="py-24 px-6 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #060f1f 0%, #0a1628 100%)" }}>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <span className="text-[#1579b7] font-bold uppercase tracking-widest text-xs mb-4 block">Our Expertise</span>
              <h3 className="text-4xl font-black text-white mb-8 leading-tight">Specialized Coding<br />& Compliance</h3>
              <p className="text-white/50 text-lg mb-10 leading-relaxed">
                We focus on reducing denials and improving first-pass claim acceptance through meticulous coding and thorough insurance portal management.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {codingExpertise.map((item, idx) => (
                  <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }} viewport={{ once: true }} key={item.code}
                    whileHover={{ x: 5 }}
                    className="p-5 rounded-xl border border-white/8 hover:border-[#1579b7]/40 transition-all group"
                    style={{ background: "linear-gradient(145deg, #0d1f3c, #112b5d)" }}>
                    <div className="text-[#1579b7] mb-3 group-hover:scale-110 transition-transform inline-block">{item.icon}</div>
                    <div className="font-black text-[#1579b7] text-lg mb-1">{item.code}</div>
                    <div className="text-xs text-white/40 font-semibold">{item.desc}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              className="rounded-3xl p-10 text-white relative overflow-hidden border border-white/10"
              style={{ background: "linear-gradient(145deg, #0d1f3c, #112b5d)" }}>
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -top-20 -right-20 w-60 h-60 rounded-full opacity-10"
                style={{ background: "conic-gradient(from 0deg, #1579b7, transparent)" }} />
              <h4 className="text-2xl font-black mb-8 relative z-10">Insurance Portals Managed</h4>
              <div className="space-y-5 relative z-10">
                {portals.map((portal, idx) => (
                  <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }} viewport={{ once: true }} key={portal}
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                    <div className="w-9 h-9 rounded-full bg-[#1579b7]/20 flex items-center justify-center shrink-0 group-hover:bg-[#1579b7]/40 transition-colors">
                      <CheckCircle2 className="text-[#1579b7] w-5 h-5" />
                    </div>
                    <span className="text-lg font-semibold text-white/80 group-hover:text-white transition-colors">{portal}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CEO / Leadership Section ── */}
      <section id="ceo" className="py-24 px-6 relative overflow-hidden"
        style={{ background: "linear-gradient(180deg, #040d1a 0%, #060f1f 100%)" }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_30%_50%,#1579b708,transparent)]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} className="flex justify-center order-2 lg:order-1">
              <div className="relative group">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-3 rounded-3xl opacity-20"
                  style={{ background: "conic-gradient(from 0deg, #1579b7, transparent 40%, #1579b7 70%, transparent)" }} />
                <div className="absolute inset-0 bg-[#1579b7]/15 rounded-3xl blur-2xl group-hover:bg-[#1579b7]/25 transition-all duration-700" />
                <video src="/pro.mp4" autoPlay loop muted playsInline
                  className="relative w-full max-w-sm h-auto object-cover rounded-3xl shadow-2xl border border-white/10" />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} className="order-1 lg:order-2">
              <span className="text-[#1579b7] font-bold uppercase tracking-widest text-xs mb-4 block">Leadership</span>
              <h3 className="text-4xl font-black text-white mb-6 leading-tight">
                Founder & Growth Strategist,<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1579b7] to-[#5bb8f5]">ProBilling Circle</span>
              </h3>
              <p className="text-white/50 text-lg leading-relaxed mb-6">
                As the Founder & Growth Strategist of <strong className="text-white">ProBilling Circle</strong>,
                I lead the company's vision and expansion by developing scalable strategies
                that drive revenue, optimize operations, and ensure long-term business growth.
              </p>
              <p className="text-white/50 text-lg leading-relaxed mb-10">
                Our leadership is driven by innovation, transparency, and a deep understanding of payer guidelines — ensuring long-term success for every partner.
              </p>
              <div className="flex flex-wrap gap-4">
                {["Revenue Optimization", "Payer Relations", "Compliance", "Team Leadership"].map(tag => (
                  <span key={tag} className="px-4 py-2 rounded-full border border-[#1579b7]/30 bg-[#1579b7]/10 text-[#1579b7] text-xs font-bold uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 px-6 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0a1628, #112b5d)" }}>
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle, #1579b7 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-[#1579b7] font-bold uppercase tracking-widest text-xs mb-4 block">Client Stories</span>
            <h3 className="text-4xl font-black text-white">What Our Clients Say</h3>
          </motion.div>

          <div className="relative min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.div key={activeTestimonial}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="p-10 rounded-3xl border border-white/10 relative"
                style={{ background: "linear-gradient(145deg, #0a1628, #0d1f3c)" }}>
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#FFD700] fill-[#FFD700]" />
                  ))}
                </div>
                <p className="text-white/80 text-xl leading-relaxed mb-8 italic">
                  "{testimonials[activeTestimonial].text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1579b7]/30 flex items-center justify-center text-[#1579b7] font-black text-lg">
                    {testimonials[activeTestimonial].name[0]}
                  </div>
                  <div>
                    <div className="font-black text-white">{testimonials[activeTestimonial].name}</div>
                    <div className="text-white/40 text-sm">{testimonials[activeTestimonial].role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setActiveTestimonial(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === activeTestimonial ? "bg-[#1579b7] w-8" : "bg-white/20 hover:bg-white/40"}`} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Software & Specialties ── */}
      <section id="software" className="py-24 px-6"
        style={{ background: "linear-gradient(180deg, #040d1a 0%, #060f1f 100%)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            <motion.div {...fadeInUp}>
              <div className="flex items-center gap-3 mb-10">
                <div className="w-10 h-10 rounded-xl bg-[#1579b7]/20 flex items-center justify-center text-[#1579b7]">
                  <Laptop className="w-5 h-5" />
                </div>
                <h3 className="text-3xl font-black text-white">Software Experience</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {software.map((sw, idx) => (
                  <motion.span initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }} viewport={{ once: true }}
                    whileHover={{ scale: 1.08, borderColor: "#1579b7", color: "#1579b7" }} key={sw}
                    className="px-5 py-2.5 rounded-full border border-white/10 text-white/60 font-bold text-sm cursor-default transition-all duration-200 hover:bg-[#1579b7]/10"
                    style={{ background: "rgba(255,255,255,0.03)" }}>
                    {sw}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div id="specialties" {...fadeInUp}>
              <div className="flex items-center gap-3 mb-10">
                <div className="w-10 h-10 rounded-xl bg-[#1579b7]/20 flex items-center justify-center text-[#1579b7]">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="text-3xl font-black text-white">Supported Specialties</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {specialties.map((spec, idx) => (
                  <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.06 }} viewport={{ once: true }} key={spec}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 p-4 rounded-xl border border-white/5 hover:border-[#1579b7]/30 transition-all group"
                    style={{ background: "rgba(255,255,255,0.02)" }}>
                    <motion.div animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                      className="w-2 h-2 rounded-full bg-[#1579b7] shrink-0" />
                    <span className="font-semibold text-white/60 group-hover:text-white/90 transition-colors text-sm">{spec}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Onboarding Section ── */}
      <section className="py-24 px-6 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0d1f3c, #1579b7)" }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#fff_1px,_transparent_1px)] [background-size:40px_40px]" />
        </div>
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-10 border-4 border-white" />
        <motion.div animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full opacity-10 border-4 border-white" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div {...fadeInUp}>
            <span className="text-white/60 font-bold uppercase tracking-widest text-xs mb-4 block">Process</span>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-6">Seamless Client Onboarding</h3>
            <p className="text-xl mb-16 text-white/80 leading-relaxed max-w-2xl mx-auto">
              Once you confirm <span className="font-black italic">"Let's start,"</span> we require simple access to begin optimizing your revenue cycle.
            </p>
          </motion.div>
          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { title: "EMR/Billing Access", desc: "Standard login for charge entry and claim review.", icon: <Laptop className="w-6 h-6" /> },
              { title: "Clearinghouse", desc: "Access to manage electronic claim submissions.", icon: <Globe className="w-6 h-6" /> },
              { title: "Insurance Portals", desc: "Standard access for verification and follow-ups.", icon: <ShieldCheck className="w-6 h-6" /> },
            ].map((step, i) => (
              <motion.div variants={cardVariant} key={step.title}
                whileHover={{ y: -6, background: "rgba(255,255,255,0.18)" }}
                className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl font-black text-white/15">0{i + 1}</div>
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white">{step.icon}</div>
                </div>
                <h4 className="text-xl font-black text-white mb-2">{step.title}</h4>
                <p className="text-sm text-white/60 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Contact Section ── */}
      <section id="contact" className="py-24 md:py-32 px-6"
        style={{ background: "linear-gradient(180deg, #040d1a 0%, #060f1f 100%)" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-[#1579b7] font-bold uppercase tracking-widest text-xs mb-4 block">Get In Touch</span>
            <h3 className="text-4xl md:text-5xl font-black text-white">Let's Optimize<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1579b7] to-[#5bb8f5]">Your Practice</span>
            </h3>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }} viewport={{ once: true }}
            className="rounded-3xl overflow-hidden border border-white/10 flex flex-col md:flex-row"
            style={{ background: "linear-gradient(145deg, #0a1628, #0d1f3c)" }}>

            {/* Left info */}
            <div className="flex-1 p-10 md:p-12 border-b md:border-b-0 md:border-r border-white/10">
              <h4 className="text-2xl font-black text-white mb-3">Ready to get started?</h4>
              <p className="text-white/40 mb-10 leading-relaxed">
                Contact us for a free practice analysis and discover how much revenue you're leaving on the table.
              </p>
              <div className="space-y-6">
                {[
                  { icon: <Mail className="w-5 h-5" />, label: "Email Us", value: "probillingcircle@gmail.com", link: "https://mail.google.com/mail/?view=cm&fs=1&to=info.harun.hanif@gmail.com" },
                  { icon: <Globe className="w-5 h-5" />, label: "Location", value: "Michigan United State of America", link: null },
                  { icon: <Phone className="w-5 h-5" />, label: "WhatsApp", value: "+1 5863018663", link: "https://alvo.chat/7lqF" },
                  { icon: <Globe className="w-5 h-5" />, label: "WhatsApp Channel", value: "Follow ProBilling Circle (PBC)", link: "https://whatsapp.com/channel/0029VbBz1I90VycFrd7AyF47" },
                ].map((item, idx) => (
                  <motion.div whileHover={{ x: 6 }} key={idx} className="flex items-center gap-4 group">
                    <a href={item.link || "#"} target={item.link?.startsWith("http") ? "_blank" : undefined}
                      rel={item.link?.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="w-11 h-11 rounded-full bg-[#1579b7]/15 flex items-center justify-center text-[#1579b7] group-hover:bg-[#1579b7] group-hover:text-white transition-all shrink-0">
                      {item.icon}
                    </a>
                    <div>
                      <div className="text-[10px] font-bold text-white/25 uppercase tracking-widest">{item.label}</div>
                      <div className="font-bold text-white/80 group-hover:text-white transition-colors text-sm">{item.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right form */}
            <div className="flex-1 p-10 md:p-12">
              <form className="space-y-4">
                {[
                  { type: "text", placeholder: "Practice Name" },
                  { type: "email", placeholder: "Professional Email" },
                  { type: "tel", placeholder: "Phone Number" },
                ].map(field => (
                  <input key={field.placeholder} type={field.type} placeholder={field.placeholder}
                    className="w-full px-5 py-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/25 focus:border-[#1579b7] focus:bg-white/8 outline-none transition-all text-sm font-medium" />
                ))}
                <textarea placeholder="Tell us about your billing challenges..." rows={4}
                  className="w-full px-5 py-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/25 focus:border-[#1579b7] outline-none transition-all resize-none text-sm font-medium" />
                <motion.button type="button"
                  whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(21,121,183,0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl font-black text-white relative overflow-hidden"
                  style={{ background: "linear-gradient(135deg, #1579b7, #0d5a8a)" }}>
                  <motion.span animate={{ x: ["100%", "-100%"] }} transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12" />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Send Message <ArrowRight className="w-4 h-4" />
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-12 border-t border-white/5 px-6" style={{ background: "#040d1a" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
            <motion.div whileHover={{ scale: 1.05 }} className="relative w-30 h-22">
              <Image src="/probilling.png" alt="Pro Billing Circle Logo" fill className="object-contain" />
            </motion.div>
            <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-white/25">
              {["Services", "Expertise", "Specialties", "Software", "Contact"].map(item => (
                <a key={item} href={`#${item.toLowerCase()}`}
                  className="hover:text-[#1579b7] transition-colors">{item}</a>
              ))}
            </div>
            <div className="flex gap-6 text-sm font-semibold text-white/25">
              <a href="#" className="hover:text-[#1579b7] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#1579b7] transition-colors">Terms of Service</a>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 text-center text-xs text-white/20 font-semibold">
            © {new Date().getFullYear()} Pro Billing Circle. All rights reserved. Built for US Healthcare Providers.
          </div>
        </div>
      </footer>

    </div>
  );
}
