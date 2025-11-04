"use client"

import { Mail } from "lucide-react"
import Image from "next/image"

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen w-full bg-background text-foreground flex flex-col items-center justify-center overflow-hidden">
      {/* Animated background gradient elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-1/2 -right-1/2 w-full h-full rounded-full opacity-15 blur-3xl"
          style={{
            background: "radial-gradient(circle, oklch(0.65 0.15 290) 0%, transparent 70%)",
            animation: "float 8s ease-in-out infinite",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 mx-auto text-center">
        <div className="mb-8 sm:mb-12 flex justify-center">
          {/* Increased logo size from sm:w-20 sm:h-20 to w-32 h-32 sm:w-40 sm:h-40 */}
          <Image
            src="/logo.png"
            alt="Anywear community"
            width={200}
            height={200}
            className="w-32 h-32 sm:w-40 sm:h-40"
          />
        </div>

        {/* Logo/Brand */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tighter mb-2">
            <span className="text-primary">AnyWear</span>
          </h1>
          <div className="h-1 w-12 bg-primary mx-auto"></div>
        </div>

        {/* Main message */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <p className="text-xl sm:text-2xl lg:text-3xl font-light text-foreground/80 mb-6 leading-relaxed text-pretty">
            Something amazing is <span className="text-primary font-semibold">cooking</span>
          </p>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            We're crafting the perfect collection for you. The wait will be worth it.
          </p>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <a
            href="https://instagram.com/Anywear"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 sm:px-10 py-4 sm:py-5 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl"
          >
            <Mail className="w-5 h-5" />
            <span>Message on Instagram</span>
          </a>
        </div>

        {/* Footer text */}
        <div className="mt-16 sm:mt-20 pt-8 sm:pt-12 border-t border-muted/20">
          <p className="text-sm sm:text-base text-muted-foreground">
            Follow us on <span className="text-accent font-semibold">@Anywear</span> for early updates
          </p>
        </div>
      </div>

      {/* Floating animation */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(30px, -30px);
          }
        }
      `}</style>
    </main>
  )
}
