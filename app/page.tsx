"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Problem from "@/components/Problem";
import Features from "@/components/Features";
import ForWho from "@/components/ForWho";
import Compare from "@/components/Compare";
import Pricing from "@/components/Pricing";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Problem />
        <Features />
        <ForWho />
        <Compare />
        <Pricing />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
