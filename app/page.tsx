import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CoursesSection from "@/components/CoursesSection";
import FeaturesSection from "@/components/FeaturesSection";
import CertificateVerifierPreview from "@/components/CertificateVerifierPreview";
import PreRegisterForm from "@/components/PreRegisterForm";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5] text-stone-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <CoursesSection />
        <FeaturesSection />
        <CertificateVerifierPreview />
        <PreRegisterForm />
      </main>
      <Footer />
    </div>
  );
}
