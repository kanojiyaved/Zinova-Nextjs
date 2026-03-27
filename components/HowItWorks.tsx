"use client";
import React from "react";
import { Search, Zap, Heart } from "lucide-react";

export default function HowItWorks() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-6 inline-block relative">
            How Zinova Works
            <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-accent rounded-full"></span>
          </h2>
          
          <p className="text-lg text-muted-foreground mt-8 mb-4">
            Zinova is an innovative platform that tackles food waste and hunger using cutting-edge technology. We create a seamless connection between those with surplus food and communities in need.
          </p>
          <p className="text-lg text-muted-foreground">
            By leveraging AI-driven matching algorithms, blockchain transparency, and real-time logistics optimization, we ensure that no edible food goes to waste while helping feed those who need it most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Identify Card */}
          <div className="bg-muted p-8 rounded-2xl flex flex-col items-center text-center transition-transform hover:scale-105 duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <Search className="text-primary w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Identify</h3>
            <p className="text-muted-foreground">
              We identify surplus food from restaurants, farms, and grocery stores
            </p>
          </div>

          {/* Match Card */}
          <div className="bg-muted p-8 rounded-2xl flex flex-col items-center text-center transition-transform hover:scale-105 duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <Zap className="text-primary w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Match</h3>
            <p className="text-muted-foreground">
              Our AI matches surplus food with communities in need instantly
            </p>
          </div>

          {/* Deliver Card */}
          <div className="bg-muted p-8 rounded-2xl flex flex-col items-center text-center transition-transform hover:scale-105 duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <Heart className="text-primary w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Deliver</h3>
            <p className="text-muted-foreground">
              Optimized logistics ensure fresh food reaches those who need it
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

