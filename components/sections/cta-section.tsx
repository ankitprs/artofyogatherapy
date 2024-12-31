import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 px-4 bg-accent">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Begin Your Journey Today</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you're seeking relief from physical pain, emotional balance, or spiritual growth, 
              our experienced instructors will guide you on your path to wellness.
            </p>
            <Button asChild size="lg">
              <Link href="/workshops">Explore Our Workshops</Link>
            </Button>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1599447421416-3414500d18a5?q=80&w=2070"
              alt="Yoga class"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}