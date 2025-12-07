"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-[#0b1220] bg-cover bg-center bg-hpBrown relative overflow-hidden">
      {/* Magical Floating Orbs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4, y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute top-10 left-10 w-40 h-40 bg-hpGold/20 rounded-full blur-3xl"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4, y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 7 }}
        className="absolute bottom-20 right-20 w-52 h-52 bg-hpRed/20 rounded-full blur-3xl"
      ></motion.div>

      {/* Header */}
      <header className="w-full py-10 text-center bg-hpRed/70 shadow-lg backdrop-blur-md border-b-2 border-hpGold">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-white tracking-wide drop-shadow-xl"
        >
          Welcome to the Hogwarts Library
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-3 text-xl text-white/90 drop-shadow"
        >
          Your magical adventure begins here
        </motion.p>
      </header>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-20 flex flex-col md:flex-row gap-8"
      >
        <Link href="/dashboard">
          <motion.button
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.97 }}
            className="bg-hpGray/60 border-2 border-hpGold text-white font-bold py-4 px-10 rounded-xl shadow-xl hover:bg-hpGray/80 backdrop-blur-md transition text-lg tracking-wide"
          >
            🪄 Dashboard
          </motion.button>
        </Link>

        <Link href="/login">
          <motion.button
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.97 }}
            className="bg-hpGray/60 border-2 border-hpGold text-white font-bold py-4 px-10 rounded-xl shadow-xl hover:bg-hpGray/80 backdrop-blur-md transition text-lg tracking-wide"
          >
            🔐 Login
          </motion.button>
        </Link>

        <Link href="/register">
          <motion.button
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.97 }}
            className="bg-hpGray/60 border-2 border-hpGold text-white font-bold py-4 px-10 rounded-xl shadow-xl hover:bg-hpGray/80 backdrop-blur-md transition text-lg tracking-wide"
          >
            📜 Register
          </motion.button>
        </Link>
      </motion.div>

      {/* Footer */}
      <footer className="mt-24 py-6 w-full text-center bg-hpGray/60 border-t-2 border-hpGold backdrop-blur-md shadow-inner">
        <p className="text-white/90 tracking-wide text-sm">© 2025 Hogwarts Library. All magic reserved.</p>
      </footer>
    </div>
  );
}