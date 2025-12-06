"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Login() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/dark-hogwarts.jpg')" }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gray bg-opacity-90 p-10 rounded-3xl w-96 shadow-[0_0_20px_rgba(255,215,0,0.7)] border-2 border-gold"
      >
        <h1 className="text-3xl text-gold font-extrabold mb-6 text-center tracking-widest drop-shadow-lg">
          Welcome Back, Wizard!
        </h1>

        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-md bg-black bg-opacity-70 border border-gold placeholder-gold text-white focus:outline-none focus:ring-2 focus:ring-gold shadow-inner"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded-md bg-black bg-opacity-70 border border-gold placeholder-gold text-white focus:outline-none focus:ring-2 focus:ring-gold shadow-inner"
          />

          <button
            type="submit"
            className="mt-4 bg-gold text-black font-bold py-3 rounded-md hover:bg-yellow-400 transition shadow-md"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-gold">
          Don't have an account?{" "}
          <Link href="/register" className="underline hover:text-yellow-400">
            Register
          </Link>
        </p>

        {/* Back to Home */}
        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-gold underline hover:text-yellow-400 text-sm tracking-wide"
          >
            ← Back to Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
