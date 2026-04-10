import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Camera, Clock, Award, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { services, portfolioItems } from '@/lib/data'

const highlights = [
  {
    icon: Camera,
    title: 'Professional Shoot',
    description: 'Expert photographers with top-tier equipment for stunning results.',
  },
  {
    icon: Award,
    title: 'Affordable Pricing',
    description: 'Quality services that fit your budget without compromising excellence.',
  },
  {
    icon: Clock,
    title: 'Fast Delivery',
    description: 'Quick turnaround times so you can relive your moments sooner.',
  },
]

export default function HomePage() {
  const featuredServices = services.slice(0, 3)
  const featuredWork = portfolioItems.filter(item => item.category === 'photo').slice(0, 4)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80"
            alt="Wedding photography background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 text-center sm:px-6 lg:px-8">
          <h1 className="font-sans text-4xl font-bold tracking-tight text-background sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block">GarimaStudio</span>
            <span className="block text-accent">Multiservice</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-background/90 sm:text-xl md:text-2xl">
            Capture your moments, create your memories
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="text-base">
              <Link href="/services">
                View Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base bg-transparent text-background border-background hover:bg-background hover:text-foreground">
              <Link href="/portfolio">View Portfolio</Link>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="h-12 w-6 rounded-full border-2 border-background/50 p-1">
            <div className="h-2 w-1.5 mx-auto rounded-full bg-background/50" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-sans text-3xl font-bold text-foreground sm:text-4xl">
              Dedicated to Creativity & Excellence
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground leading-relaxed">
              GarimaStudio is your creative partner for all photography, videography, and event services. 
              We help you capture life&apos;s precious moments with artistry and professionalism. 
              From intimate portraits to grand celebrations, we bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {highlights.map((item) => (
              <Card key={item.title} className="border-none bg-muted/50 text-center">
                <CardContent className="pt-8 pb-6">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-sans text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-sans text-3xl font-bold text-foreground sm:text-4xl">
              Our Services
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Explore our range of professional services designed to capture and celebrate your special moments.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service) => (
              <Card key={service.id} className="group overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-sans text-xl font-semibold text-background">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <CardContent className="pt-4">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {service.description}
                  </p>
                  <Button asChild variant="link" className="mt-2 px-0">
                    <Link href={`/services/${service.id}`}>
                      View Details
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-sans text-3xl font-bold text-foreground sm:text-4xl">
              Featured Work
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              A glimpse into our portfolio of beautiful moments we&apos;ve captured.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featuredWork.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-square overflow-hidden rounded-lg"
              >
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/0 transition-colors group-hover:bg-foreground/40" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                  <p className="text-center font-medium text-background">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/portfolio">
                View Full Portfolio
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-accent text-accent" />
            ))}
          </div>
          <blockquote className="font-sans text-2xl font-medium italic sm:text-3xl">
            &ldquo;GarimaStudio captured our wedding beautifully. Every photo tells a story, and the team was incredibly professional. Highly recommended!&rdquo;
          </blockquote>
          <cite className="mt-6 block text-primary-foreground/80 not-italic">
            - Priya & Rahul, Wedding Clients
          </cite>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-sans text-3xl font-bold text-foreground sm:text-4xl">
            Ready to Create Something Beautiful?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Let&apos;s start planning your next shoot. Contact us today for a free consultation.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Get In Touch</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="tel:+919876543210">Call Us Now</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
