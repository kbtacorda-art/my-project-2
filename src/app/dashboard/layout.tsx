"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const palette = {
  parchment: "bg-[#0b1220] text-white",
  maroon: "bg-[#5b1f1f] text-white",
  gold: "bg-[#C9A31D] text-[#2b2b2b]",
  night: "bg-[#0b1220] text-[#e6e6e6]",
};

type House = "Gryffindor" | "Slytherin" | "Ravenclaw" | "Hufflepuff";

function HouseBadge({ house }: { house: House }) {
  const icons: Record<House, string> = {
    Gryffindor: "🔥",
    Slytherin: "🐍",
    Ravenclaw: "🦅",
    Hufflepuff: "🦡",
  };

  const colors: Record<House, string> = {
    Gryffindor: "bg-red-600/20 text-red-300 border border-red-500/30",
    Slytherin: "bg-green-600/20 text-green-300 border border-green-500/30",
    Ravenclaw: "bg-blue-600/20 text-blue-300 border border-blue-500/30",
    Hufflepuff: "bg-yellow-600/20 text-yellow-300 border border-yellow-500/30",
  };

  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold shadow-sm ${colors[house]}`}>
      <span className="text-lg">{icons[house]}</span>
      <span>{house}</span>
    </span>
  );
}

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const navigationItems = [
    { icon: "📚", label: "All Books", href: "/books", count: 7 },
    { icon: "🪄", label: "Currently Reading", href: "/reading", count: 3 },
    { icon: "⭐", label: "Favorites", href: "/favorites" },
    { icon: "📊", label: "Statistics", href: "/stats" },
    { icon: "⚙️", label: "Settings", href: "/settings" },
  ];

  return (
    <div className={`${palette.night} min-h-screen p-8 font-sans`}>
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6">
        
        {/* SIDEBAR */}
        <aside className={`col-span-3 rounded-2xl p-6 shadow-lg ${palette.parchment} grid grid-rows-[auto_auto_1fr_auto] gap-6`}>
          
          {/* HEADER */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-300 to-orange-500 flex items-center justify-center text-2xl font-bold shadow-lg">
              HP
            </div>
            <div>
              <h2 className="text-lg font-bold">The Wizarding Library</h2>
              <p className="text-sm opacity-80">Dashboard · Collection</p>
            </div>
          </motion.div>

          {/* NAVIGATION */}
          <nav className="space-y-2">
            {navigationItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="w-full block px-4 py-2 rounded-lg hover:bg-white/10 hover:scale-[1.02] transition-all duration-200 flex items-center gap-3 group"
                >
                  <span className="group-hover:scale-110 transition-transform">{item.icon}</span>
                  <span>{item.label}</span>
                  {item.count && (
                    <span className="ml-auto text-xs bg-white/10 px-2 py-0.5 rounded group-hover:bg-white/20 transition-colors">
                      {item.count}
                    </span>
                  )}
                </Link>
              </motion.div>
            ))}

            {/* DIVIDER */}
            <div className="border-t border-white/10 my-4"></div>

            {/* BACK TO HOME */}
            <Link
              href="/"
              className="w-full block px-4 py-2 rounded-lg hover:bg-white/10 hover:scale-[1.02] transition-all duration-200 flex items-center gap-3 group"
            >
              <span className="group-hover:scale-110 transition-transform">🏠</span>
              <span>Home</span>
            </Link>
          </nav>

          {/* STATS SECTION */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-sm font-semibold mb-3 opacity-90">Quick Stats</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center">
                <span className="opacity-80">Total Books:</span>
                <strong>7</strong>
              </div>
              <div className="flex justify-between items-center">
                <span className="opacity-80">Completed:</span>
                <strong>1</strong>
              </div>
              <div className="flex justify-between items-center">
                <span className="opacity-80">In Progress:</span>
                <strong>3</strong>
              </div>
            </div>

            {/* PROGRESS BAR */}
            <div className="mt-4">
              <div className="flex justify-between text-xs opacity-80 mb-1">
                <span>Overall Progress</span>
                <span>28%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-600"
                  style={{ width: "28%" }}
                />
              </div>
            </div>

            {/* HOUSE SELECTION */}
            <div className="mt-6">
              <h4 className="text-xs uppercase opacity-80 mb-3 tracking-wide">Houses</h4>
              <div className="grid grid-cols-2 gap-2">
                <HouseBadge house="Gryffindor" />
                <HouseBadge house="Slytherin" />
                <HouseBadge house="Ravenclaw" />
                <HouseBadge house="Hufflepuff" />
              </div>
            </div>
          </motion.div>

          {/* USER PROFILE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="pt-4 border-t border-white/10"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-sm font-bold">
                W
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold">Wizard Reader</div>
                <div className="text-xs opacity-70">Gryffindor House</div>
              </div>
              <button className="opacity-60 hover:opacity-100 transition-opacity">
                ⚙️
              </button>
            </div>
          </motion.div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="col-span-9">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  );
}