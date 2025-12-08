'use client';

import { useRouter } from 'next/navigation';
import { useState, FormEvent } from 'react';
import { API_BASE } from '@/lib/config';
import { motion } from 'framer-motion';

const palette = {
  night: "bg-[#0b1220] text-[#e6e6e6]",
  card: "bg-[#0f1724]",
  gold: "bg-[#C9A31D] text-[#2b2b2b]",
};

export default function RegisterPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleRegister(e: FormEvent) {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);

    try {
      const res = await fetch(`${API_BASE}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, age }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.message || 'Registration failed');
        setIsLoading(false);
        return;
      }

      setSuccess('Account created! Redirecting to login...');
      setTimeout(() => {
        router.push('/login');
      }, 1500);
    } catch (err) {
      setError('Connection error. Please try again.');
      setIsLoading(false);
    }
  }

  return (
    <div className={`${palette.night} min-h-screen flex items-center justify-center p-4`}>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-yellow-300 to-orange-500 flex items-center justify-center text-4xl font-bold shadow-lg">
            HP
          </div>
          <h1 className="text-3xl font-extrabold mb-2">Join The Wizarding Library</h1>
          <p className="text-sm opacity-80">Create your account to start your magical reading journey</p>
        </div>

        {/* Register Card */}
        <div className={`${palette.card} rounded-2xl p-8 shadow-2xl`}>
          <h2 className="text-2xl font-bold mb-6">Create Account</h2>

          <form onSubmit={handleRegister} className="space-y-5">
            {/* Username */}
            <div>
              <label className="block text-sm font-semibold mb-2 opacity-90">
                Username
              </label>
              <input
                type="text"
                placeholder="Choose your wizarding name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/30 transition"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold mb-2 opacity-90">
                Password
              </label>
              <input
                type="password"
                placeholder="Create a secret spell"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/30 transition"
              />
            </div>

            {/* Age */}
            <div>
              <label className="block text-sm font-semibold mb-2 opacity-90">
                Age
              </label>
              <input
                type="number"
                placeholder="Your age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/30 transition"
              />
            </div>

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm"
              >
                ⚠️ {error}
              </motion.div>
            )}

            {/* Success Message */}
            {success && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-sm"
              >
                ✨ {success}
              </motion.div>
            )}

            {/* Register Button */}
            <button
              type="submit"
              disabled={isLoading || success !== ''}
              className={`w-full py-3 rounded-lg font-bold ${palette.gold} hover:scale-[1.02] active:scale-[0.98] transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {isLoading ? '🪄 Creating account...' : success ? '✅ Success!' : '✨ Create Wizard Account'}
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-6 text-center">
            <p className="text-sm opacity-80 mb-2">Already have an account?</p>
            <button
              onClick={() => router.push('/login')}
              className="text-yellow-400 hover:text-yellow-300 font-semibold transition"
            >
              ← Back to Login
            </button>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-xs opacity-60 mt-6">
          By registering, you agree to protect magical knowledge 📚✨
        </p>
      </motion.div>
    </div>
  );
}