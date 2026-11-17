import { Check } from "lucide-react";

interface Course {
  code: string;
  name: string;
  duration: string;
  eligibility: string;
  description: string;
  syllabus: string[];
}

const COURSES: Course[] = [
  {
    code: "ADCA",
    name: "Advance Diploma in Computer Applications",
    duration: "12 Months (1 Year)",
    eligibility: "10th / 12th Pass",
    description: "Our comprehensive one-year program covering fundamental computing, office automation, visual designing, website basics, and accounting.",
    syllabus: [
      "Computer Fundamentals & Windows OS",
      "MS Office (Word, Advanced Excel, PowerPoint, Access)",
      "Graphic Design (Photoshop & CorelDraw)",
      "Web Design Fundamentals (HTML, CSS, JS)",
      "Computerized Accounting with Tally Prime",
    ],
  },
  {
    code: "BCA",
    name: "Bachelor of Computer Applications Curriculum",
    duration: "Academic Guidance / Foundation",
    eligibility: "10+2 / College Students",
    description: "Structured computer science coaching covering programming logic, databases, web technologies, and software engineering concepts.",
    syllabus: [
      "Programming in C, C++, and Java",
      "Data Structures & Algorithms",
      "Relational Database Management (RDBMS / SQL)",
      "Web Technologies & Computer Networks",
      "Software Engineering & Lab Projects",
    ],
  },
  {
    code: "PGDCA",
    name: "Post Graduate Diploma in Computer Applications",
    duration: "1 Year",
    eligibility: "Graduation (Any Stream)",
    description: "Designed for graduates who want to build IT skills. Covers software applications, database handling, programming, and system design.",
    syllabus: [
      "Fundamentals of Information Technology",
      "Programming in Python & C++",
      "Database Systems & Query Optimization",
      "System Analysis & Project Implementation",
      "Internet Applications & Cyber Basics",
    ],
  },
  {
    code: "DCA",
    name: "Diploma in Computer Applications",
    duration: "6 Months",
    eligibility: "10th Pass or Higher",
    description: "A practical foundational diploma for learning core computer operations, document processing, spreadsheet calculations, and internet tools.",
    syllabus: [
      "Operating Systems & Desktop Navigation",
      "Microsoft Word (Documentation & Reports)",
      "Microsoft Excel (Data Entry & Formulas)",
      "PowerPoint (Presentations & Media)",
      "Internet, Email, & Basic Troubleshooting",
    ],
  },
  {
    code: "iCA",
    name: "Industrial Computer Accounting",
    duration: "6 Months",
    eligibility: "10+2 / Commerce or Any Stream",
    description: "Focused training on business accounting, GST invoicing, tax computation, payroll management, and computerized inventory tracking.",
    syllabus: [
      "Principles of Financial Accounting",
      "Tally Prime with GST & E-Way Billing",
      "TDS, TCS, & Tax Computation",
      "Inventory & Stock Management",
      "Payroll Systems & Balance Sheet Preparation",
    ],
  },
];

const CRASH_COURSES = [
  { name: "Python Programming Basics", duration: "4 Weeks", focus: "Logic, scripting, and automation" },
  { name: "Web Development Bootcamp", duration: "8 Weeks", focus: "HTML5, CSS3, JavaScript, and responsive design" },
  { name: "Advanced Excel & MIS Reporting", duration: "3 Weeks", focus: "VLOOKUP, XLOOKUP, Pivot Tables, and macros" },
  { name: "Graphic Design Crash Course", duration: "6 Weeks", focus: "Photo editing, banners, and vector design" },
  { name: "Tally Prime with GST Refresher", duration: "4 Weeks", focus: "Practical vouchers, GST returns, and reporting" },
  { name: "Typing & Office Speed Practice", duration: "2 Weeks", focus: "English/Hindi typing accuracy and speed building" },
];

export default function CoursesSection() {
  return (
    <section id="courses" className="py-16 bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0066ff] block mb-2 font-mono">
            Diploma & Certification Programs
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-950 tracking-tight">
            Academic Courses Offered at ASPEC
          </h2>
          <p className="mt-3 text-gray-600 text-base leading-relaxed">
            All diploma courses include hands-on computer lab sessions, syllabus textbooks, and an accredited verifiable completion certificate.
          </p>
        </div>

        {/* Main Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COURSES.map((course) => (
            <div
              key={course.code}
              className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col justify-between hover:border-gray-300 transition-colors shadow-2xs"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#0066ff] text-white">
                    {course.code}
                  </span>
                  <span className="text-xs font-medium px-2 py-0.5 rounded bg-gray-100 text-gray-700 border border-gray-200">
                    {course.duration}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-950 mb-1.5">
                  {course.name}
                </h3>

                <p className="text-xs text-gray-500 mb-3.5 font-medium">
                  Eligibility: {course.eligibility}
                </p>

                <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                  {course.description}
                </p>

                <div className="border-t border-gray-100 pt-4 mb-6">
                  <span className="text-xs font-semibold text-gray-700 block mb-2 uppercase tracking-wide">
                    Subjects Covered:
                  </span>
                  <ul className="space-y-1.5">
                    {course.syllabus.map((item, idx) => (
                      <li key={idx} className="text-xs text-gray-600 flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#0066ff] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <a
                  href="#inquiry"
                  className="w-full inline-block text-center py-2 px-3 rounded-md bg-gray-900 hover:bg-[#0066ff] text-white text-xs font-medium transition-colors"
                >
                  Inquire for {course.code} Admission
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Short Crash Courses Section */}
        <div className="mt-14 bg-white border border-gray-200 rounded-lg p-6 sm:p-8 shadow-2xs">
          <div className="mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0066ff] block mb-1 font-mono">
              Short-Term Practical Modules
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-950">
              Technical Crash Courses & Skill Workshops
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Short-duration intensive modules designed for rapid skill building in specific tools, accounting packages, and programming languages.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CRASH_COURSES.map((crash, idx) => (
              <div key={idx} className="p-4 bg-gray-50 border border-gray-200 rounded-md">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h4 className="text-sm font-bold text-gray-950">{crash.name}</h4>
                  <span className="text-xs font-medium text-gray-600 bg-white border border-gray-200 px-2 py-0.5 rounded shrink-0">
                    {crash.duration}
                  </span>
                </div>
                <p className="text-xs text-gray-500">{crash.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
