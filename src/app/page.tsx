"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-hpBrown"
      style={{ backgroundImage: "url('/wizard.jpg')" }}
    >
      {/* Header */}
      <header className="w-full py-6 text-center bg-hpRed bg-opacity-70 shadow-md">
        <h1 className="text-4xl font-extrabold text-hpCream tracking-wide drop-shadow-lg">
          Welcome to the Hogwarts Library
        </h1>
        <p className="mt-2 text-lg text-hpGold drop-shadow-md">
          Your magical adventure begins here
        </p>
      </header>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-16 flex flex-col md:flex-row gap-6"
      >
        <Link href="/dashboard">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-hpGray bg-opacity-70 border-2 border-hpGold text-hpGold font-bold py-3 px-8 rounded-md shadow-md hover:bg-opacity-90 transition"
          >
            Dashboard
          </motion.button>
        </Link>

        <Link href="/login">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-hpGray bg-opacity-70 border-2 border-hpGold text-hpGold font-bold py-3 px-8 rounded-md shadow-md hover:bg-opacity-90 transition"
          >
            Login
          </motion.button>
        </Link>

        <Link href="/register">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-hpGray bg-opacity-70 border-2 border-hpGold text-hpGold font-bold py-3 px-8 rounded-md shadow-md hover:bg-opacity-90 transition"
          >
            Register
          </motion.button>
        </Link>
      </motion.div>

      {/* Footer */}
      <footer className="mt-32 py-6 w-full text-center bg-hpGray bg-opacity-60 border-t border-hpGold">
        <p className="text-hpCream">
          © 2025 Hogwarts Library. All magic reserved.
        </p>
      </footer>
    </div>
  );
}
