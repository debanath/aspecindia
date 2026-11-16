import { Check, CreditCard, QrCode, UserCheck } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section id="portal" className="py-16 bg-[#faf8f5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#064e3b] block mb-2">
            Student Services & Platform Features
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Integrated Learning & Campus Management
          </h2>
          <p className="mt-3 text-stone-700 text-base leading-relaxed">
            ASPEC provides students with full digital tools: uninterrupted access to study materials, simple online fee payments, and verifiable credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1: Student Account & Study Material */}
          <div className="border border-stone-200 rounded-lg p-6 bg-white shadow-2xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 bg-emerald-50 border border-emerald-200 text-[#064e3b] rounded-lg flex items-center justify-center mb-4">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">
                1. Student Portal & Study Notes
              </h3>
              <p className="text-sm text-stone-600 mb-4 leading-relaxed">
                Registered students receive unique login credentials to access chapter notes, lab worksheets, and study references from home or mobile.
              </p>
              <ul className="space-y-2 text-xs text-stone-600">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#064e3b] shrink-0 mt-0.5" />
                  <span>Downloadable PDF chapter notes and practical lab exercises</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#064e3b] shrink-0 mt-0.5" />
                  <span>Batch schedules, exam dates, and notice board announcements</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#064e3b] shrink-0 mt-0.5" />
                  <span>Lab project submissions and attendance records</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 text-xs text-stone-500 font-medium">
              Launching with first batch admissions
            </div>
          </div>

          {/* Feature 2: In-App Fee Payments */}
          <div className="border border-stone-200 rounded-lg p-6 bg-white shadow-2xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 bg-amber-50 border border-amber-200 text-amber-800 rounded-lg flex items-center justify-center mb-4">
                <CreditCard className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">
                2. In-App Fee Payments
              </h3>
              <p className="text-sm text-stone-600 mb-4 leading-relaxed">
                Pay course admission, monthly fees, or exam fees securely online without needing to visit the cash counter in person.
              </p>
              <ul className="space-y-2 text-xs text-stone-600">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#064e3b] shrink-0 mt-0.5" />
                  <span>UPI payments via Google Pay, PhonePe, Paytm, and QR code</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#064e3b] shrink-0 mt-0.5" />
                  <span>Debit cards, credit cards, and net banking support</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#064e3b] shrink-0 mt-0.5" />
                  <span>Instant digital receipt with transaction ID downloadable as PDF</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 text-xs text-stone-500 font-medium">
              Secure automated receipt generation
            </div>
          </div>

          {/* Feature 3: Verifiable Digital Certificates */}
          <div className="border border-stone-200 rounded-lg p-6 bg-white shadow-2xs flex flex-col justify-between" id="verification">
            <div>
              <div className="w-10 h-10 bg-emerald-50 border border-emerald-200 text-[#064e3b] rounded-lg flex items-center justify-center mb-4">
                <QrCode className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">
                3. Certificate Legitimacy Verification
              </h3>
              <p className="text-sm text-stone-600 mb-4 leading-relaxed">
                Every certificate issued has a unique verification code and URL to prove authenticity to employers and educational institutes.
              </p>
              <ul className="space-y-2 text-xs text-stone-600">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#064e3b] shrink-0 mt-0.5" />
                  <span>Permanent verification URL (aspecindia.com/verify/[code])</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#064e3b] shrink-0 mt-0.5" />
                  <span>Printed QR code on physical certificate for instant mobile scan</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#064e3b] shrink-0 mt-0.5" />
                  <span>Displays student name, course name, roll number, and grade</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 text-xs text-stone-500 font-medium">
              Prevent forged credentials
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
