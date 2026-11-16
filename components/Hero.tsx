import { Award, BookOpen, CreditCard, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-[#faf8f5] border-b border-stone-200 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Academic Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded bg-amber-50 border border-amber-300 text-xs font-semibold text-amber-900 uppercase tracking-wider mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
            Admissions Opening Soon • Academic Session 2026–2027
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
            After School Professional Education Center (ASPEC)
          </h1>

          <p className="mt-4 text-lg text-stone-700 leading-relaxed font-normal">
            A premier computer training center providing accredited diploma certifications and technical career coaching. Master software tools, accounting, programming, and office suites through structured classroom guidance and practical laboratory sessions.
          </p>

          {/* Action buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#courses"
              className="px-6 py-3 rounded-lg text-sm font-semibold bg-[#064e3b] hover:bg-[#075944] text-white shadow-xs transition-colors"
            >
              Browse Course Catalog
            </a>
            <a
              href="#inquiry"
              className="px-6 py-3 rounded-lg text-sm font-semibold bg-white hover:bg-stone-100 text-stone-800 border border-stone-300 transition-colors shadow-xs"
            >
              Pre-Register for Next Batch
            </a>
            <a
              href="#verification"
              className="px-6 py-3 rounded-lg text-sm font-semibold bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-300 transition-colors"
            >
              Verify Certificate
            </a>
          </div>
        </div>

        {/* 4 Feature Pillars (clean stone & white boxed layout) */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 bg-white border border-stone-200 rounded-lg shadow-2xs">
            <div className="w-9 h-9 rounded bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#064e3b] mb-3">
              <Award className="w-5 h-5" />
            </div>
            <h2 className="text-sm font-bold text-stone-900">Recognized Diplomas</h2>
            <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
              BCA foundation, ADCA, DCA, PGDCA, and iCA certifications upon course completion.
            </p>
          </div>

          <div className="p-5 bg-white border border-stone-200 rounded-lg shadow-2xs">
            <div className="w-9 h-9 rounded bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#064e3b] mb-3">
              <BookOpen className="w-5 h-5" />
            </div>
            <h2 className="text-sm font-bold text-stone-900">Student Study Portal</h2>
            <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
              Online login portal for students to download study notes, lab sheets, and assignments.
            </p>
          </div>

          <div className="p-5 bg-white border border-stone-200 rounded-lg shadow-2xs">
            <div className="w-9 h-9 rounded bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-800 mb-3">
              <CreditCard className="w-5 h-5" />
            </div>
            <h2 className="text-sm font-bold text-stone-900">In-App Fee Payments</h2>
            <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
              Pay monthly tuition or course fees online via UPI or card with instant digital receipts.
            </p>
          </div>

          <div className="p-5 bg-white border border-stone-200 rounded-lg shadow-2xs">
            <div className="w-9 h-9 rounded bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#064e3b] mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h2 className="text-sm font-bold text-stone-900">Verifiable Certificates</h2>
            <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
              Every certificate has a unique code and verification URL so employers can verify authenticity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
