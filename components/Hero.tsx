import { Award, BookOpen, CreditCard, MapPin, Phone, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-white border-b border-gray-200 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Minimalist Tech Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-xs font-medium text-gray-700 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0066ff]" />
            Admissions Opening • Inaugural Academic Session 2027
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-950 leading-tight">
            After School Professional Education Center (ASPEC)
          </h1>

          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            A premier computer training institute launching in 2027, providing recognized diploma certifications and technical career coaching. Master software tools, accounting, programming, and office suites through structured classroom guidance and practical laboratory sessions.
          </p>

          {/* Action buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#courses"
              className="px-5 py-2.5 rounded-md text-sm font-medium bg-[#0066ff] hover:bg-[#0052cc] text-white shadow-xs transition-colors"
            >
              Browse Course Catalog
            </a>
            <a
              href="#inquiry"
              className="px-5 py-2.5 rounded-md text-sm font-medium bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 transition-colors shadow-xs"
            >
              Pre-Register for 2027 Batch
            </a>
            <a
              href="tel:+919101158043"
              className="px-5 py-2.5 rounded-md text-sm font-medium bg-gray-100 hover:bg-gray-200 text-gray-800 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#0066ff]" />
              <span>+91 91011 58043</span>
            </a>
          </div>

          {/* Location & Helpline Banner */}
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-gray-500 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#0066ff] shrink-0" />
              <span>LP Road, Near Bajaj Finance, Lanka (PIN: 782446)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#0066ff] shrink-0" />
              <span>Admissions Helpline: <strong className="text-gray-900 font-semibold">+91 91011 58043</strong></span>
            </div>
          </div>
        </div>

        {/* 4 Feature Pillars (Clean Stripe/Vercel Grid) */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
            <div className="w-9 h-9 rounded-md bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0066ff] mb-3">
              <Award className="w-4 h-4" />
            </div>
            <h2 className="text-sm font-bold text-gray-950">Recognized Diplomas</h2>
            <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
              BCA curriculum support, ADCA, DCA, PGDCA, and iCA certifications upon course completion.
            </p>
          </div>

          <div className="p-5 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
            <div className="w-9 h-9 rounded-md bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0066ff] mb-3">
              <BookOpen className="w-4 h-4" />
            </div>
            <h2 className="text-sm font-bold text-gray-950">Student Study Portal</h2>
            <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
              Online login portal for students to download study notes, lab sheets, and assignments.
            </p>
          </div>

          <div className="p-5 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
            <div className="w-9 h-9 rounded-md bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0066ff] mb-3">
              <CreditCard className="w-4 h-4" />
            </div>
            <h2 className="text-sm font-bold text-gray-950">In-App Fee Payments</h2>
            <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
              Pay monthly tuition or course fees online via UPI or card with instant digital receipts.
            </p>
          </div>

          <div className="p-5 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
            <div className="w-9 h-9 rounded-md bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0066ff] mb-3">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h2 className="text-sm font-bold text-gray-950">Verifiable Certificates</h2>
            <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
              Every certificate has a unique code and verification URL so employers can verify authenticity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
