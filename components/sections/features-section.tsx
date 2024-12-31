import { Card, CardContent } from "@/components/ui/card"
import { Heart, Flower, Sparkles, Users } from "lucide-react"

const features = [
  {
    icon: Flower,
    title: "Traditional Wisdom",
    description: "Ancient yoga practices adapted for modern healing",
  },
  {
    icon: Heart,
    title: "Holistic Healing",
    description: "Address physical, mental, and emotional well-being",
  },
  {
    icon: Users,
    title: "Expert Guidance",
    description: "Experienced instructors dedicated to your growth",
  },
  {
    icon: Sparkles,
    title: "Personalized Care",
    description: "Tailored approaches for your unique needs",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">Why Choose Art of Yoga Therapy?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  {feature.icon ? (
            <feature.icon className="w-6 h-6 text-primary" />
          ) : (
            <div>No Icon</div> // Fallback in case of undefined
          )}
                </div>
                <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}