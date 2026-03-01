import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Building2, Users, Briefcase } from "lucide-react";

// Inside your component:
const stats = [
  { label: "Practices Served", value: 100, icon: <Building2 className="w-12 h-12 text-[#1579b7]" /> },
  { label: "Client Satisfaction", value: 98, icon: <Users className="w-12 h-12 text-[#1579b7]" /> },
  { label: "Hands-on Experience", value: 2, icon: <Briefcase className="w-12 h-12 text-[#1579b7]" /> },
];

// Top-level state for counters
const [counts, setCounts] = useState(stats.map(() => 0));

// Animate counts on mount
useEffect(() => {
  const duration = 2000; // 2 seconds
  stats.forEach((stat, idx) => {
    let start = 0;
    const end = stat.value;
    let currentTime = 0;

    const animate = () => {
      currentTime += 16;
      const progress = Math.min(currentTime / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const value = Math.floor(end * eased);
      setCounts(prev => {
        const newCounts = [...prev];
        newCounts[idx] = value;
        return newCounts;
      });
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  });
}, []);