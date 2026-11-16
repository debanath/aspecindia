"use client";

import { useState } from "react";
import { CheckCircle, Send } from "lucide-react";

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
    <section id="inquiry" className="py-16 bg-[#faf8f5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto border border-stone-300 rounded-lg p-6 sm:p-10 bg-white shadow-xs">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#064e3b] block mb-1">
              Admission Registration
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
              Pre-Register for the Upcoming Academic Batch
            </h2>
            <p className="mt-2 text-sm text-stone-600">
              Submit your details to receive the comprehensive course syllabus, fee schedule, and batch timings. An ASPEC counselor will reach out to guide you.
            </p>
          </div>

          {submitted ? (
            <div className="bg-[#faf8f5] border border-emerald-300 rounded-lg p-8 text-center">
              <div className="w-12 h-12 bg-emerald-50 text-[#064e3b] border border-emerald-200 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-1">
                Inquiry Received, {formData.name}
              </h3>
              <p className="text-sm text-stone-600 max-w-md mx-auto mb-4 leading-relaxed">
                Your admission inquiry for <strong className="text-stone-900">{formData.course}</strong> has been recorded. Our coordinator will contact you on <strong className="text-stone-900">{formData.phone}</strong>.
              </p>
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
                className="text-xs font-semibold text-[#064e3b] hover:underline"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">
                    Student Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-3 py-2 text-sm border border-stone-300 rounded bg-[#faf8f5] text-stone-900 focus:outline-none focus:border-[#064e3b]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 9876543210"
                    className="w-full px-3 py-2 text-sm border border-stone-300 rounded bg-[#faf8f5] text-stone-900 focus:outline-none focus:border-[#064e3b]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-3 py-2 text-sm border border-stone-300 rounded bg-[#faf8f5] text-stone-900 focus:outline-none focus:border-[#064e3b]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">
                    Course Program *
                  </label>
                  <select
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-stone-300 rounded bg-[#faf8f5] text-stone-900 focus:outline-none focus:border-[#064e3b]"
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
                <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">
                  Preferred Batch Timing
                </label>
                <select
                  value={formData.timing}
                  onChange={(e) => setFormData({ ...formData, timing: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-stone-300 rounded bg-[#faf8f5] text-stone-900 focus:outline-none focus:border-[#064e3b]"
                >
                  <option value="Morning Batch (8:00 AM - 11:00 AM)">Morning Batch (8:00 AM - 11:00 AM)</option>
                  <option value="Afternoon Batch (12:00 PM - 3:00 PM)">Afternoon Batch (12:00 PM - 3:00 PM)</option>
                  <option value="Evening Batch (4:00 PM - 7:00 PM)">Evening Batch (4:00 PM - 7:00 PM)</option>
                  <option value="Weekend Batch (Saturday & Sunday)">Weekend Batch (Saturday & Sunday)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">
                  Any Specific Question or Note (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Ask about batch start date, installment options, or lab timings..."
                  className="w-full px-3 py-2 text-sm border border-stone-300 rounded bg-[#faf8f5] text-stone-900 focus:outline-none focus:border-[#064e3b]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 rounded bg-[#064e3b] hover:bg-[#075944] text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
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
