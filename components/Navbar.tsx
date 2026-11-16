"use client";

import { useState } from "react";
import { GraduationCap, Lock, X } from "lucide-react";

export default function Navbar() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <>
      {/* Top Academic Announcement Bar */}
      <div className="bg-[#064e3b] text-white text-xs py-2 px-4 text-center font-medium border-b border-[#043d2e]">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <span>New Admissions & Batch Registration Opening Soon • Session 2026–2027</span>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo & Institute Identity */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-11 h-11 bg-[#064e3b] rounded-lg flex items-center justify-center text-amber-400 shrink-0 shadow-sm">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-2xl tracking-tight text-stone-900">
                  ASPEC
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-300">
                  Coming Soon
                </span>
              </div>
              <p className="text-xs text-stone-500 font-normal">
                After School Professional Education Center
              </p>
            </div>
          </a>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-700">
            <a href="#courses" className="hover:text-[#064e3b] transition-colors">Courses</a>
            <a href="#portal" className="hover:text-[#064e3b] transition-colors">Student Portal</a>
            <a href="#verification" className="hover:text-[#064e3b] transition-colors">Verify Certificate</a>
            <a href="#inquiry" className="hover:text-[#064e3b] transition-colors">Admission Inquiry</a>
          </nav>

          {/* Action */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setShowLoginModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-300 transition-colors"
            >
              <Lock className="w-3.5 h-3.5 text-stone-600" />
              <span>Student Login</span>
            </button>
            <a
              href="#inquiry"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-[#064e3b] hover:bg-[#075944] text-white transition-colors"
            >
              Pre-Register
            </a>
          </div>
        </div>
      </header>

      {/* Login Information Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs">
          <div className="relative w-full max-w-md bg-white border border-stone-300 rounded-xl p-6 shadow-xl">
            <button
              type="button"
              onClick={() => setShowLoginModal(false)}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-700"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center justify-center text-[#064e3b] mb-4">
              <Lock className="w-6 h-6" />
            </div>

            <h3 className="text-lg font-bold text-stone-900 mb-2">Student Portal Access</h3>
            <p className="text-sm text-stone-600 mb-4 leading-relaxed">
              The student dashboard is currently being set up for the new academic batch. Enrolled students will receive login credentials to download study notes, lecture videos, and digital fee receipts.
            </p>

            <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-lg text-xs text-amber-900 mb-5">
              To be notified the moment admissions begin, submit your details through the inquiry form below.
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => {
                  setShowLoginModal(false);
                  const el = document.getElementById("inquiry");
                  el?.scrollIntoView();
                }}
                className="w-full py-2.5 px-4 rounded-lg bg-[#064e3b] hover:bg-[#075944] text-white font-medium text-sm transition-colors"
              >
                Go to Admission Inquiry
              </button>
              <button
                type="button"
                onClick={() => setShowLoginModal(false)}
                className="py-2.5 px-4 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 font-medium text-sm border border-stone-300 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
