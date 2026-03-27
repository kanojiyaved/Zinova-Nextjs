import React from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FoodFlow from "@/components/FoodFlow";
import ValueProposition from "@/components/ValueProposition";
import Features from "@/components/Features";
import ImpactCalculator from "@/components/ImpactCalculator";
import GlobalImpact from "@/components/GlobalImpact";
import CallToAction from "@/components/CallToAction";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <About />
      <FoodFlow />
      <ValueProposition />
      <div id="features">
        <Features />
      </div>
      <ImpactCalculator />
      <GlobalImpact />
      <CallToAction />
      <div id="contact">
        <Contact />
      </div>
    </main>
  );
}
