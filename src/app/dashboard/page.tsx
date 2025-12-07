"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const books = [
  { id: 1, title: "Harry Potter and the Sorcerer's Stone", year: 1997, pages: 223, progress: 80, cover: "/covers1.jpg", house: "Gryffindor" },
  { id: 2, title: "Harry Potter and the Chamber of Secrets", year: 1998, pages: 251, progress: 60, cover: "/covers2.jpg", house: "Gryffindor" },
  { id: 3, title: "Harry Potter and the Prisoner of Azkaban", year: 1999, pages: 317, progress: 40, cover: "/covers3.jpg", house: "Gryffindor" },
  { id: 4, title: "Harry Potter and the Goblet of Fire", year: 2000, pages: 636, progress: 15, cover: "/covers4.jpg", house: "Gryffindor" },
  { id: 5, title: "Harry Potter and the Order of the Phoenix", year: 2003, pages: 766, progress: 0, cover: "/covers5.jpg", house: "Gryffindor" },
  { id: 6, title: "Harry Potter and the Half-Blood Prince", year: 2005, pages: 607, progress: 0, cover: "/covers6.jpg", house: "Gryffindor" },
  { id: 7, title: "Harry Potter and the Deathly Hallows", year: 2007, pages: 607, progress: 0, cover: "/covers7.jpg", house: "Gryffindor" },
];

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

  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold shadow-sm">
      <span className="text-lg">{icons[house]}</span>
      <span>{house}</span>
    </span>
  );
}

function ProgressBar({ value }: { value: number }) {
  return (
    <div className="w-full bg-white/10 rounded-full h-2">
      <div
        className="h-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-600"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

export default function HarryPotterDashboard() {
  const totalPages = books.reduce((s, b) => s + b.pages, 0);
  const avgProgress = Math.round(books.reduce((s, b) => s + b.progress, 0) / books.length);

  return (
    <div className={`${palette.night} min-h-screen p-8 font-sans`}>
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6">

        {/* SIDEBAR */}
        <aside className={`col-span-3 rounded-2xl p-6 shadow-lg ${palette.parchment} grid grid-rows-[auto_auto_1fr_auto] gap-6`}>
          
          {/* HEADER */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-300 to-orange-500 flex items-center justify-center text-2xl font-bold">
              HP
            </div>
            <div>
              <h2 className="text-lg font-bold">The Wizarding Library</h2>
              <p className="text-sm opacity-80">Dashboard · Books Collection</p>
            </div>
          </div>

          {/* NAVIGATION */}
          <nav className="space-y-2">
            <button className="w-full text-left px-4 py-2 rounded-lg hover:scale-[1.01] transition flex items-center gap-3">
              <span>📚</span>
              <span>All Books</span>
              <span className="ml-auto text-xs bg-white/10 px-2 py-0.5 rounded">{books.length}</span>
            </button>

            <button className="w-full text-left px-4 py-2 rounded-lg hover:scale-[1.01] transition flex items-center gap-3">
              <span>🪄</span>
              <span>Currently Reading</span>
              <span className="ml-auto text-xs bg-white/10 px-2 py-0.5 rounded">
                {books.filter(b => b.progress > 0 && b.progress < 100).length}
              </span>
            </button>

            <button className="w-full text-left px-4 py-2 rounded-lg hover:scale-[1.01] transition flex items-center gap-3">
              <span>⭐</span>
              <span>Favorites</span>
            </button>

            {/* BACK TO HOME */}
            <Link
              href="/"
              className="w-full block px-4 py-2 rounded-lg hover:scale-[1.01] transition flex items-center gap-3"
            >
              <span>🏠</span>
              <span>Home</span>
            </Link>
          </nav>

          {/* STATS */}
          <div>
            <h3 className="text-sm font-semibold mb-2">Reading Stats</h3>
            <div className="text-sm opacity-90">
              Total pages: <strong>{totalPages}</strong>
            </div>
            <div className="mt-2 text-sm opacity-90">
              Avg progress: <strong>{avgProgress}%</strong>
            </div>

            <div className="mt-4">
              <h4 className="text-xs uppercase opacity-80 mb-2">House</h4>
              <div className="flex gap-2 flex-wrap">
                <HouseBadge house="Gryffindor" />
                <HouseBadge house="Slytherin" />
                <HouseBadge house="Ravenclaw" />
                <HouseBadge house="Hufflepuff" />
              </div>
            </div>
          </div>

          <div></div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="col-span-9">
          <header className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-extrabold">Books — Harry Potter Collection</h1>
              <p className="text-sm opacity-80">
                A themed dashboard inspired by classic book aesthetics.
              </p>
            </div>

            <div className="flex items-center gap-3">
              {/* BACK TO HOME TOP BUTTON */}
              <Link
                href="/"
                className="px-4 py-2 rounded-lg font-semibold bg-white/10 hover:bg-white/20 transition"
              >
                ← Home
              </Link>

              <button className={`px-4 py-2 rounded-lg font-semibold ${palette.gold}`}>
                Add Book
              </button>
              <div className="w-10 h-10 rounded-full bg-white/8 flex items-center justify-center">🔍</div>
            </div>
          </header>

          {/* STAT CARDS */}
          <section className="grid grid-cols-3 gap-6 mb-6">
            <motion.div initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="rounded-2xl p-5 shadow-lg bg-gradient-to-br from-[#0f1724] to-[#0b1220]">
              <h4 className="text-sm opacity-80">Books in Collection</h4>
              <div className="mt-3 text-2xl font-bold">{books.length}</div>
            </motion.div>

            <motion.div initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="rounded-2xl p-5 shadow-lg bg-gradient-to-br from-[#0f1724] to-[#0b1220]">
              <h4 className="text-sm opacity-80">Average Progress</h4>
              <div className="mt-3 flex items-center gap-4">
                <div className="text-2xl font-bold">{avgProgress}%</div>
                <div className="flex-1">
                  <ProgressBar value={avgProgress} />
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="rounded-2xl p-5 shadow-lg bg-gradient-to-br from-[#0f1724] to-[#0b1220]">
              <h4 className="text-sm opacity-80">Pages to Read</h4>
              <div className="mt-3 text-2xl font-bold">
                {Math.round(totalPages * (1 - avgProgress / 100))}
              </div>
            </motion.div>
          </section>

          {/* BOOK LIST */}
          <section className="rounded-2xl p-6 shadow-lg bg-gradient-to-tr from-[#071024] to-[#071622]">
            <h3 className="text-xl font-bold mb-4">Books</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {books.map(book => (
                <article key={book.id} className="flex gap-4 items-center p-3 rounded-xl bg-white/3">
                  <img
                    src={book.cover}
                    alt={`${book.title} cover`}
                    className="w-20 h-28 object-cover rounded-md shadow-inner"
                  />

                  <div className="flex-1">
                    <div className="flex items-start gap-3">
                      <div>
                        <h4 className="font-semibold">{book.title}</h4>
                        <div className="text-xs opacity-80">
                          {book.year} · {book.pages} pages
                        </div>
                      </div>

                      <div className="ml-auto flex flex-col items-end gap-2">
                        <HouseBadge house={book.house as House} />
                        <div className="text-sm opacity-90">{book.progress}%</div>
                      </div>
                    </div>

                    <div className="mt-3">
                      <ProgressBar value={book.progress} />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <footer className="mt-6 text-sm opacity-80 text-right">
            Theme inspired by book aesthetics. Add your own covers in <code>/public/covers/</code>.
          </footer>
        </main>
      </div>
    </div>
  );
}
