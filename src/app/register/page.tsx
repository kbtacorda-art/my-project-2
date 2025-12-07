"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Register() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative overflow-hidden"
      style={{ backgroundImage: "url('/hogwarts-bg.jpg')" }}
    >
      {/* Floating Lights (Magic Particles) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-yellow-300 rounded-full absolute opacity-60"
            initial={{ x: Math.random() * 1400, y: Math.random() * 900 }}
            animate={{
              y: -50,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              repeatDelay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-black/60 backdrop-blur-xl p-10 rounded-3xl w-96 shadow-2xl border border-yellow-500/40"
      >
        {/* Glow Border */}
        <div className="absolute inset-0 rounded-3xl border-2 border-yellow-300 opacity-20 blur-md pointer-events-none"></div>

        <h1 className="text-3xl text-yellow-300 font-extrabold mb-6 text-center tracking-widest drop-shadow-lg">
          Join the Wizarding World
        </h1>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 rounded-md bg-black/40 border border-yellow-500 placeholder-yellow-400 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-md bg-black/40 border border-yellow-500 placeholder-yellow-400 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          {/* AGE — numeric-only, no up/down arrows */}
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder="Age"
            className="p-3 rounded-md bg-black/40 border border-yellow-500 placeholder-yellow-400 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded-md bg-black/40 border border-yellow-500 placeholder-yellow-400 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          {/* Magic Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px #FFD700" }}
            className="mt-4 bg-yellow-400 text-black font-bold py-3 rounded-md shadow-md hover:bg-yellow-300 transition flex justify-center items-center gap-2"
          >
            ✨ Register
          </motion.button>
        </form>

        <p className="mt-5 text-center text-yellow-300">
          Already have an account?{" "}
          <Link href="/login" className="underline hover:text-yellow-200">
            Login
          </Link>
        </p>

        {/* Back to Home */}
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
