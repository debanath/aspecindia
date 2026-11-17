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
  "ASPEC/2027/ADCA-108": {
    code: "ASPEC/2027/ADCA-108",
    studentName: "Rahul Sharma",
    course: "Advance Diploma in Computer Applications (ADCA)",
    rollNo: "ASPEC-27-4401",
    issueDate: "November 2027",
    grade: "Grade A+ (94%)",
    status: "Authentic & Verified",
  },
  "ASPEC/2027/BCA-042": {
    code: "ASPEC/2027/BCA-042",
    studentName: "Priya Mukherjee",
    course: "BCA Foundation & Programming Curriculum",
    rollNo: "ASPEC-27-1022",
    issueDate: "October 2027",
    grade: "Grade A (88%)",
    status: "Authentic & Verified",
  },
  "ASPEC/2027/ICA-205": {
    code: "ASPEC/2027/ICA-205",
    studentName: "Amitabh Verma",
    course: "Industrial Computer Accounting (iCA with Tally Prime)",
    rollNo: "ASPEC-27-3819",
    issueDate: "September 2027",
    grade: "Grade A+ (96%)",
    status: "Authentic & Verified",
  },
};

export default function CertificateVerifierPreview() {
  const [certInput, setCertInput] = useState("ASPEC/2027/ADCA-108");
  const [record, setRecord] = useState<CertificateRecord | null>(
    SAMPLE_DATABASE["ASPEC/2027/ADCA-108"]
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
        rollNo: "ASPEC-27-XXXX",
        issueDate: "Session 2027",
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
    <section className="py-16 bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0066ff] block mb-2 font-mono">
            Verification Tool Demo
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-950 tracking-tight">
            Online Certificate Verification
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600">
            Preview how employers and institutions will verify the authenticity of ASPEC certificates using a unique certificate roll number.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Search Box */}
          <div className="lg:col-span-5 bg-white border border-gray-200 rounded-lg p-6 shadow-2xs">
            <h3 className="text-base font-bold text-gray-950 mb-1">
              Certificate Search
            </h3>
            <p className="text-xs text-gray-500 mb-4">
              Enter the certificate identification code printed on the diploma.
            </p>

            <form onSubmit={handleSearch} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                  Certificate Code
                </label>
                <input
                  type="text"
                  value={certInput}
                  onChange={(e) => setCertInput(e.target.value)}
                  placeholder="e.g. ASPEC/2027/ADCA-108"
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md bg-white text-gray-900 font-mono focus:outline-none focus:border-[#0066ff]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-md bg-[#0066ff] hover:bg-[#0052cc] text-white font-medium text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Search className="w-4 h-4" />
                <span>Verify Now</span>
              </button>
            </form>

            <div className="mt-6 pt-4 border-t border-gray-100">
              <span className="text-xs font-medium text-gray-500 block mb-2">
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
                    className={`text-left text-xs font-mono px-3 py-2 rounded-md border transition-colors ${
                      certInput === key
                        ? "bg-blue-50 border-blue-300 text-[#0066ff] font-semibold"
                        : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {key}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Certificate Result Sheet */}
          <div className="lg:col-span-7 bg-white border border-gray-200 rounded-lg p-6 sm:p-7 shadow-2xs">
            {record ? (
              <div>
                {/* Status Bar */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-gray-100">
                  <div className="flex items-center gap-2 text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-md text-xs font-bold">
                    <ShieldCheck className="w-4 h-4 text-emerald-700" />
                    <span>STATUS: {record.status.toUpperCase()}</span>
                  </div>
                  <span className="text-xs text-gray-400 font-mono">
                    Issuer: ASPEC Lanka Center
                  </span>
                </div>

                {/* Verification Table */}
                <table className="w-full text-left text-xs sm:text-sm border border-gray-200 mb-6">
                  <tbody>
                    <tr className="border-b border-gray-200 bg-gray-50/70">
                      <th className="py-2.5 px-3 font-semibold text-gray-700 w-1/3">
                        Student Name
                      </th>
                      <td className="py-2.5 px-3 font-bold text-gray-950">
                        {record.studentName}
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <th className="py-2.5 px-3 font-semibold text-gray-700">
                        Course Program
                      </th>
                      <td className="py-2.5 px-3 text-gray-800">
                        {record.course}
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50/70">
                      <th className="py-2.5 px-3 font-semibold text-gray-700">
                        Roll / Reg Number
                      </th>
                      <td className="py-2.5 px-3 font-mono text-gray-950">
                        {record.rollNo}
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <th className="py-2.5 px-3 font-semibold text-gray-700">
                        Certificate Code
                      </th>
                      <td className="py-2.5 px-3 font-mono font-bold text-[#0066ff]">
                        {record.code}
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50/70">
                      <th className="py-2.5 px-3 font-semibold text-gray-700">
                        Performance Grade
                      </th>
                      <td className="py-2.5 px-3 font-semibold text-emerald-700">
                        {record.grade}
                      </td>
                    </tr>
                    <tr>
                      <th className="py-2.5 px-3 font-semibold text-gray-700">
                        Issue Date
                      </th>
                      <td className="py-2.5 px-3 text-gray-700">
                        {record.issueDate}
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* Unique Verification Link */}
                <div className="p-3.5 bg-gray-50 border border-gray-200 rounded-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                  <div>
                    <span className="text-gray-500 block text-[11px] font-medium">
                      Direct Verification URL for Resumes & Portfolios:
                    </span>
                    <span className="font-mono text-gray-800 font-semibold break-all">
                      https://aspecindia.com/verify/{record.code}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={copyUrl}
                    className="px-3 py-1.5 bg-white border border-gray-300 rounded-md font-medium text-gray-700 hover:bg-gray-50 shrink-0 flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-gray-500" />
                        <span>Copy Link</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ) : (
              <div className="py-12 text-center text-gray-400">
                <p className="text-sm">No certificate found for this query.</p>
                <p className="text-xs text-gray-400 mt-1">
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
