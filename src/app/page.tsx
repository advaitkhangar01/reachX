import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Achievements from "@/components/sections/Achievements";

const CampaignsShowcase = dynamic(() => import("@/components/sections/CampaignsShowcase"), { ssr: true });
const Services = dynamic(() => import("@/components/sections/Services"), { ssr: true });
const Team = dynamic(() => import("@/components/sections/Team"), { ssr: true });
const CaseStudies = dynamic(() => import("@/components/sections/CaseStudies"), { ssr: true });
const Contact = dynamic(() => import("@/components/sections/Contact"), { ssr: true });
const FAQ = dynamic(() => import("@/components/sections/FAQ"), { ssr: true });
const Footer = dynamic(() => import("@/components/layout/Footer"), { ssr: true });
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <main className="relative bg-white min-h-screen">
      <CustomCursor />
      <Navbar />
      <Hero />
      <Achievements />
      <CampaignsShowcase />
      <Services />
      <Team />
      <CaseStudies />
      <Contact />
      <FAQ />
      <Footer />
    </main>
  );
}
