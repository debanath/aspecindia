import { GraduationCap, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#05291f] border-t border-[#083a2d] text-stone-300 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Institute Info */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-[#064e3b] border border-emerald-600/40 text-amber-300 rounded flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                ASPEC
              </span>
            </div>
            <p className="text-xs text-amber-300/90 font-medium mb-3">
              After School Professional Education Center
            </p>
            <p className="text-xs text-stone-400 leading-relaxed mb-4">
              A computer learning institute offering accredited diploma certifications, practical computer lab training, 24/7 online study material access, and verifiable credentials.
            </p>
            <div className="text-xs text-stone-400">
              <span className="font-semibold text-white">Center Hours:</span> Mon – Sat: 8:00 AM – 7:30 PM (Sunday Closed)
            </div>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
              Diploma Programs
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  ADCA - Advance Diploma in Computer Applications
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  BCA - Bachelor of Computer Applications Curriculum
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  PGDCA - Post Graduate Diploma in Computer Applications
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  DCA - Diploma in Computer Applications
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  iCA - Industrial Computer Accounting (Tally Prime & GST)
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  Short-Term Technical Crash Courses & Bootcamps
                </a>
              </li>
            </ul>
          </div>

          {/* Student Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
              Student Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#portal" className="hover:text-white transition-colors">
                  Student Login & Study Portal
                </a>
              </li>
              <li>
                <a href="#portal" className="hover:text-white transition-colors">
                  Online Fee Payment Portal
                </a>
              </li>
              <li>
                <a href="#verification" className="hover:text-white transition-colors">
                  Certificate Legitimacy Verification
                </a>
              </li>
              <li>
                <a href="#inquiry" className="hover:text-white transition-colors">
                  New Admission Pre-Registration
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  Curriculum Syllabus & Course Eligibility
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
              Contact Center
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2 text-stone-300">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>ASPEC Computer Center, Main Campus, India</span>
              </li>
              <li className="flex items-center gap-2 text-stone-300">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="mailto:contact@aspecindia.com" className="hover:text-white transition-colors">
                  contact@aspecindia.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-stone-300">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Admissions Helpline: +91 (Available on WhatsApp)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-[#093d30] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} ASPEC (After School Professional Education Center). All rights reserved.</p>
          <p className="text-emerald-300/80">Official Web Portal Launch In Progress</p>
        </div>
      </div>
    </footer>
  );
}
