"use client";

import { useState } from "react";
import { Check, Copy, Search, ShieldCheck } from "lucide-react";

interface CertificateRecord {
  code: string;
  studentName: string;
  course: string;
  rollNo: string;
  issueDate: string;
  grade: string;
  status: "Authentic & Verified" | "Invalid";
}

const SAMPLE_DATABASE: Record<string, CertificateRecord> = {
  "ASPEC/2026/ADCA-108": {
    code: "ASPEC/2026/ADCA-108",
    studentName: "Rahul Sharma",
    course: "Advance Diploma in Computer Applications (ADCA)",
    rollNo: "ASPEC-26-4401",
    issueDate: "15 November 2026",
    grade: "Grade A+ (94%)",
    status: "Authentic & Verified",
  },
  "ASPEC/2026/BCA-042": {
    code: "ASPEC/2026/BCA-042",
    studentName: "Priya Mukherjee",
    course: "BCA Foundation & Programming Curriculum",
    rollNo: "ASPEC-26-1022",
    issueDate: "20 October 2026",
    grade: "Grade A (88%)",
    status: "Authentic & Verified",
  },
  "ASPEC/2026/ICA-205": {
    code: "ASPEC/2026/ICA-205",
    studentName: "Amitabh Verma",
    course: "Industrial Computer Accounting (iCA with Tally Prime)",
    rollNo: "ASPEC-26-3819",
    issueDate: "05 September 2026",
    grade: "Grade A+ (96%)",
    status: "Authentic & Verified",
  },
};

export default function CertificateVerifierPreview() {
  const [certInput, setCertInput] = useState("ASPEC/2026/ADCA-108");
  const [record, setRecord] = useState<CertificateRecord | null>(
    SAMPLE_DATABASE["ASPEC/2026/ADCA-108"]
  );
  const [copied, setCopied] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = certInput.trim();
    if (SAMPLE_DATABASE[query]) {
      setRecord(SAMPLE_DATABASE[query]);
    } else if (query.length > 3) {
      setRecord({
        code: query,
        studentName: "Enrolled Student Name",
        course: "Computer Diploma Program",
        rollNo: "ASPEC-26-XXXX",
        issueDate: "Valid Session",
        grade: "Accredited Grade A",
        status: "Authentic & Verified",
      });
    } else {
      setRecord(null);
    }
  };

  const copyUrl = () => {
    if (!record) return;
    const url = `https://aspecindia.com/verify/${encodeURIComponent(record.code)}`;
    navigator.clipboard?.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16 bg-[#f5f2eb] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#064e3b] block mb-2">
            Verification Tool Demo
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
            Online Certificate Verification
          </h2>
          <p className="mt-2 text-sm sm:text-base text-stone-700">
            Preview how employers and institutions will verify the authenticity of ASPEC certificates using a unique certificate roll number.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Search Box */}
          <div className="lg:col-span-5 bg-white border border-stone-200 rounded-lg p-6 shadow-2xs">
            <h3 className="text-base font-bold text-stone-900 mb-1">
              Certificate Search
            </h3>
            <p className="text-xs text-stone-600 mb-4">
              Enter the certificate identification code printed on the diploma.
            </p>

            <form onSubmit={handleSearch} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">
                  Certificate Code
                </label>
                <input
                  type="text"
                  value={certInput}
                  onChange={(e) => setCertInput(e.target.value)}
                  placeholder="e.g. ASPEC/2026/ADCA-108"
                  className="w-full px-3 py-2 text-sm border border-stone-300 rounded bg-white text-stone-900 font-mono focus:outline-none focus:border-[#064e3b]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded bg-[#064e3b] hover:bg-[#075944] text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Search className="w-4 h-4" />
                <span>Verify Now</span>
              </button>
            </form>

            <div className="mt-6 pt-4 border-t border-stone-200">
              <span className="text-xs font-semibold text-stone-500 block mb-2">
                Try clicking a sample code:
              </span>
              <div className="flex flex-col gap-1.5">
                {Object.keys(SAMPLE_DATABASE).map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => {
                      setCertInput(key);
                      setRecord(SAMPLE_DATABASE[key]);
                    }}
                    className={`text-left text-xs font-mono px-3 py-2 rounded border transition-colors ${
                      certInput === key
                        ? "bg-emerald-50 border-emerald-400 text-[#064e3b] font-semibold"
                        : "bg-[#faf8f5] border-stone-200 text-stone-700 hover:bg-stone-100"
                    }`}
                  >
                    {key}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Certificate Result Sheet */}
          <div className="lg:col-span-7 bg-white border border-stone-200 rounded-lg p-6 sm:p-7 shadow-2xs">
            {record ? (
              <div>
                {/* Status Bar */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-stone-200">
                  <div className="flex items-center gap-2 text-[#064e3b] bg-emerald-50 border border-emerald-300 px-3 py-1 rounded text-xs font-bold">
                    <ShieldCheck className="w-4 h-4 text-[#064e3b]" />
                    <span>STATUS: {record.status.toUpperCase()}</span>
                  </div>
                  <span className="text-xs text-stone-500">
                    Issuer: ASPEC Computer Center
                  </span>
                </div>

                {/* Verification Table */}
                <table className="w-full text-left text-xs sm:text-sm border border-stone-200 mb-6">
                  <tbody>
                    <tr className="border-b border-stone-200 bg-[#faf8f5]">
                      <th className="py-2.5 px-3 font-semibold text-stone-700 w-1/3">
                        Student Name
                      </th>
                      <td className="py-2.5 px-3 font-bold text-stone-900">
                        {record.studentName}
                      </td>
                    </tr>
                    <tr className="border-b border-stone-200">
                      <th className="py-2.5 px-3 font-semibold text-stone-700">
                        Course Program
                      </th>
                      <td className="py-2.5 px-3 text-stone-800">
                        {record.course}
                      </td>
                    </tr>
                    <tr className="border-b border-stone-200 bg-[#faf8f5]">
                      <th className="py-2.5 px-3 font-semibold text-stone-700">
                        Roll / Reg Number
                      </th>
                      <td className="py-2.5 px-3 font-mono text-stone-900">
                        {record.rollNo}
                      </td>
                    </tr>
                    <tr className="border-b border-stone-200">
                      <th className="py-2.5 px-3 font-semibold text-stone-700">
                        Certificate Code
                      </th>
                      <td className="py-2.5 px-3 font-mono font-bold text-[#064e3b]">
                        {record.code}
                      </td>
                    </tr>
                    <tr className="border-b border-stone-200 bg-[#faf8f5]">
                      <th className="py-2.5 px-3 font-semibold text-stone-700">
                        Performance Grade
                      </th>
                      <td className="py-2.5 px-3 font-semibold text-[#064e3b]">
                        {record.grade}
                      </td>
                    </tr>
                    <tr>
                      <th className="py-2.5 px-3 font-semibold text-stone-700">
                        Issue Date
                      </th>
                      <td className="py-2.5 px-3 text-stone-700">
                        {record.issueDate}
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* Unique Verification Link */}
                <div className="p-3.5 bg-[#faf8f5] border border-stone-200 rounded flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                  <div>
                    <span className="text-stone-500 block text-[11px] font-medium">
                      Direct Verification URL for Resumes & Portfolios:
                    </span>
                    <span className="font-mono text-stone-800 font-semibold break-all">
                      https://aspecindia.com/verify/{record.code}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={copyUrl}
                    className="px-3 py-1.5 bg-white border border-stone-300 rounded font-medium text-stone-700 hover:bg-stone-100 shrink-0 flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-700" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Link</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ) : (
              <div className="py-12 text-center text-stone-500">
                <p className="text-sm">No certificate found for this query.</p>
                <p className="text-xs text-stone-400 mt-1">
                  Please verify the format or choose a sample certificate code on the left.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
