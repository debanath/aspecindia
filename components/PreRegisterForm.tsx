"use client";

import { useState } from "react";
import { CheckCircle, MapPin, Phone, Send } from "lucide-react";

export default function PreRegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "ADCA - 1 Year Advance Diploma",
    timing: "Morning Batch (8:00 AM - 11:00 AM)",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section id="inquiry" className="py-16 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto border border-gray-200 rounded-lg p-6 sm:p-10 bg-white shadow-xs">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0066ff] block mb-1 font-mono">
              Inaugural Session 2027
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-950 tracking-tight">
              Pre-Register for the 2027 Batch
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Submit your details to receive the comprehensive course syllabus, fee schedule, and batch timings. An ASPEC counselor will reach out to guide you.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs text-gray-500 pt-3 border-t border-gray-100">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#0066ff] shrink-0" />
                <span>LP Road, Near Bajaj Finance, Lanka (PIN: 782446)</span>
              </span>
              <a
                href="tel:+919101158043"
                className="flex items-center gap-1.5 text-gray-700 hover:text-[#0066ff] font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-[#0066ff] shrink-0" />
                <span>+91 91011 58043</span>
              </a>
            </div>
          </div>

          {submitted ? (
            <div className="bg-gray-50 border border-emerald-200 rounded-lg p-8 text-center">
              <div className="w-11 h-11 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-950 mb-1">
                Inquiry Received, {formData.name}
              </h3>
              <p className="text-sm text-gray-600 max-w-md mx-auto mb-4 leading-relaxed">
                Your admission inquiry for <strong className="text-gray-950">{formData.course}</strong> (2027 Session) has been logged. Our Lanka center coordinator will contact you on <strong className="text-gray-950">{formData.phone}</strong>.
              </p>
              <div className="text-xs text-gray-500 mb-4">
                Have questions immediately? Call or WhatsApp us at <strong className="text-gray-900">+91 91011 58043</strong>.
              </div>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: "",
                    phone: "",
                    email: "",
                    course: "ADCA - 1 Year Advance Diploma",
                    timing: "Morning Batch (8:00 AM - 11:00 AM)",
                    message: "",
                  });
                }}
                className="text-xs font-medium text-[#0066ff] hover:underline cursor-pointer"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                    Student Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md bg-white text-gray-950 focus:outline-none focus:border-[#0066ff]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md bg-white text-gray-950 focus:outline-none focus:border-[#0066ff]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md bg-white text-gray-950 focus:outline-none focus:border-[#0066ff]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                    Course Program *
                  </label>
                  <select
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md bg-white text-gray-950 focus:outline-none focus:border-[#0066ff]"
                  >
                    <option value="ADCA - 1 Year Advance Diploma">ADCA (1 Year Advance Diploma in Computer Applications)</option>
                    <option value="BCA Foundation & Academic Curriculum">BCA (Bachelor of Computer Applications Curriculum)</option>
                    <option value="PGDCA - 1 Year Post Graduate Diploma">PGDCA (Post Graduate Diploma in Computer Applications)</option>
                    <option value="DCA - 6 Months Core Diploma">DCA (6 Months Diploma in Computer Applications)</option>
                    <option value="iCA - Industrial Accounting with Tally & GST">iCA (Industrial Computer Accounting & Tally Prime)</option>
                    <option value="Short-Term Technical Crash Course">Short-Term Technical Crash Course (Python, Web, Excel)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                  Preferred Batch Timing
                </label>
                <select
                  value={formData.timing}
                  onChange={(e) => setFormData({ ...formData, timing: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md bg-white text-gray-950 focus:outline-none focus:border-[#0066ff]"
                >
                  <option value="Morning Batch (8:00 AM - 11:00 AM)">Morning Batch (8:00 AM - 11:00 AM)</option>
                  <option value="Afternoon Batch (12:00 PM - 3:00 PM)">Afternoon Batch (12:00 PM - 3:00 PM)</option>
                  <option value="Evening Batch (4:00 PM - 7:00 PM)">Evening Batch (4:00 PM - 7:00 PM)</option>
                  <option value="Weekend Batch (Saturday & Sunday)">Weekend Batch (Saturday & Sunday)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                  Any Specific Question or Note (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Ask about batch start date, installment options, or lab timings..."
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md bg-white text-gray-950 focus:outline-none focus:border-[#0066ff]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2.5 rounded-md bg-[#0066ff] hover:bg-[#0052cc] text-white font-medium text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Admission Inquiry</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
