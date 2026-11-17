"use client";

import { useState } from "react";
import { GraduationCap, Lock, MapPin, Phone, X } from "lucide-react";

export default function Navbar() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <>
      {/* Top Minimalist Notice Bar */}
      <div className="bg-[#09090b] text-white text-xs py-2 px-4 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-[11px] sm:text-xs">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0066ff] shrink-0" />
            <span>Inaugural Session Starting 2027 • LP Road, Near Bajaj Finance, Lanka (PIN 782446)</span>
          </div>
          <div className="flex items-center gap-4 text-gray-300">
            <a
              href="tel:+919101158043"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-[#0066ff]" />
              <span>+91 91011 58043</span>
            </a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          {/* Logo & Institute Identity */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#09090b] rounded-md flex items-center justify-center text-white shrink-0">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-xl tracking-tight text-gray-950">
                  ASPEC
                </span>
                <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-gray-100 text-gray-700 border border-gray-200">
                  Starting 2027
                </span>
              </div>
              <p className="text-xs text-gray-500 font-normal hidden sm:block">
                After School Professional Education Center • Lanka
              </p>
            </div>
          </a>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-gray-600">
            <a href="#courses" className="hover:text-[#0066ff] transition-colors">Courses</a>
            <a href="#portal" className="hover:text-[#0066ff] transition-colors">Student Portal</a>
            <a href="#verification" className="hover:text-[#0066ff] transition-colors">Verify Certificate</a>
            <a href="#inquiry" className="hover:text-[#0066ff] transition-colors">Admission Inquiry</a>
          </nav>

          {/* Action */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setShowLoginModal(true)}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md text-sm font-medium bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 transition-colors"
            >
              <Lock className="w-3.5 h-3.5 text-gray-500" />
              <span>Student Login</span>
            </button>
            <a
              href="#inquiry"
              className="hidden sm:inline-flex items-center px-4 py-1.5 rounded-md text-sm font-medium bg-[#0066ff] hover:bg-[#0052cc] text-white transition-colors"
            >
              Pre-Register (2027)
            </a>
          </div>
        </div>
      </header>

      {/* Login Information Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="relative w-full max-w-md bg-white border border-gray-200 rounded-lg p-6 shadow-xl">
            <button
              type="button"
              onClick={() => setShowLoginModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-11 h-11 bg-blue-50 border border-blue-100 rounded-md flex items-center justify-center text-[#0066ff] mb-4">
              <Lock className="w-5 h-5" />
            </div>

            <h3 className="text-lg font-bold text-gray-950 mb-2">Student Portal Access</h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              The student dashboard will open for our inaugural 2027 batch. Enrolled students will receive unique credentials to view study materials, lecture videos, and fee payment receipts.
            </p>

            <div className="p-3 bg-gray-50 border border-gray-200 rounded-md text-xs text-gray-700 mb-5 space-y-1">
              <div><strong className="text-gray-900">Center:</strong> LP Road, Near Bajaj Finance, Lanka (PIN 782446)</div>
              <div><strong className="text-gray-900">Helpline:</strong> +91 91011 58043</div>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => {
                  setShowLoginModal(false);
                  const el = document.getElementById("inquiry");
                  el?.scrollIntoView();
                }}
                className="w-full py-2 px-4 rounded-md bg-[#0066ff] hover:bg-[#0052cc] text-white font-medium text-sm transition-colors"
              >
                Go to Admission Inquiry
              </button>
              <button
                type="button"
                onClick={() => setShowLoginModal(false)}
                className="py-2 px-4 rounded-md bg-white hover:bg-gray-50 text-gray-700 font-medium text-sm border border-gray-300 transition-colors"
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
