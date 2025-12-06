"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Register() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/hogwarts-bg.jpg')" }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gray bg-opacity-70 p-10 rounded-3xl w-96 shadow-lg border-2 border-gold"
      >
        <h1 className="text-3xl text-gold font-bold mb-6 text-center tracking-wide">
          Join the Hogwarts!
        </h1>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 rounded-md bg-black bg-opacity-50 border border-gold placeholder-gold text-white focus:outline-none focus:ring-2 focus:ring-gold"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-md bg-black bg-opacity-50 border border-gold placeholder-gold text-white focus:outline-none focus:ring-2 focus:ring-gold"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded-md bg-black bg-opacity-50 border border-gold placeholder-gold text-white focus:outline-none focus:ring-2 focus:ring-gold"
          />

          <button
            type="submit"
            className="mt-4 bg-gold text-black font-bold py-3 rounded-md hover:bg-yellow-400 transition"
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-center text-gold">
          Already have an account?{" "}
          <Link href="/login" className="underline hover:text-yellow-400">
            Login
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
