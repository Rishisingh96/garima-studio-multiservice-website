import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { services } from '@/lib/data'

export const metadata = {
  title: 'Our Services | GarimaStudio Multiservice',
  description: 'Explore our professional photography, videography, and event services. Wedding booking, photo shoots, parties, albums, and more.',
}

export default function ServicesPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-sans text-4xl font-bold text-primary-foreground sm:text-5xl">
            Our Services
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Professional services tailored to capture and celebrate your most precious moments
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.id} className="group overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h2 className="font-sans text-xl font-semibold text-background">
                      {service.title}
                    </h2>
                  </div>
                </div>
                <CardContent className="pt-4">
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {service.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.features.slice(0, 3).map((feature) => (
                      <span
                        key={feature}
                        className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Button asChild className="mt-4 w-full">
                    <Link href={`/services/${service.id}`}>
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-sans text-3xl font-bold text-foreground sm:text-4xl">
            Not Sure Which Service You Need?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Contact us for a free consultation. We&apos;ll help you choose the perfect package for your needs.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
