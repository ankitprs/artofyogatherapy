import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <Image
        src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070"
        alt="Yoga meditation"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Transform Your Life Through Yoga Therapy
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Experience the healing power of traditional yoga practices combined with modern therapeutic approaches
        </p>
        <div className="space-x-4">
          <Button asChild size="lg" variant="default">
            <Link href="/schedule">View Schedule</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}