"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Login() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative overflow-hidden"
      style={{ backgroundImage: "url('/dark-hogwarts.jpg')" }}
    >
      {/* Floating Magical Lights */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-yellow-300 rounded-full absolute opacity-50"
            initial={{ x: Math.random() * 1200, y: Math.random() * 900 }}
            animate={{
              y: -60,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 4,
              repeat: Infinity,
              repeatDelay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative bg-black/70 backdrop-blur-xl p-10 rounded-3xl w-96 shadow-[0_0_25px_rgba(255,215,0,0.7)] border border-yellow-500/40"
      >
        <div className="absolute inset-0 rounded-3xl border-2 border-yellow-300 opacity-20 blur-md pointer-events-none"></div>

        <h1 className="text-3xl text-yellow-300 font-extrabold mb-6 text-center tracking-widest drop-shadow-lg">
          Welcome Back, Wizard!
        </h1>

        <form className="flex flex-col gap-4">
          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-md bg-black/60 border border-yellow-500 placeholder-yellow-400 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-inner"
          />

          {/* Age (NO ARROWS) */}
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder="Age"
            className="p-3 rounded-md bg-black/60 border border-yellow-500 placeholder-yellow-400 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-inner"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded-md bg-black/60 border border-yellow-500 placeholder-yellow-400 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-inner"
          />

          {/* Magic Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05, boxShadow: "0 0 18px #FFD700" }}
            transition={{ duration: 0.2 }}
            className="mt-4 bg-yellow-400 text-black font-bold py-3 rounded-md hover:bg-yellow-300 transition shadow-md tracking-wider"
          >
            ✨ Login
          </motion.button>
        </form>

        <p className="mt-5 text-center text-yellow-300">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="underline hover:text-yellow-200">
            Register
          </Link>
        </p>

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-yellow-300 underline hover:text-yellow-200 text-sm tracking-wide"
          >
            ← Back to Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
