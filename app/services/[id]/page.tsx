import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Check, Phone, MessageCircle, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { services } from '@/lib/data'

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params
  const service = services.find((s) => s.id === id)
  
  if (!service) {
    return {
      title: 'Service Not Found | GarimaStudio',
    }
  }

  return {
    title: `${service.title} | GarimaStudio Multiservice`,
    description: service.description,
  }
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { id } = await params
  const service = services.find((s) => s.id === id)

  if (!service) {
    notFound()
  }

  const phoneNumber = '919876543210'
  const whatsappMessage = `Hello! I'm interested in your ${service.title} service.`

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center text-sm text-background/80 hover:text-background mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Link>
          <h1 className="font-sans text-4xl font-bold text-background sm:text-5xl">
            {service.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-background/90">
            {service.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {service.features.map((feature) => (
              <Badge
                key={feature}
                variant="secondary"
                className="bg-background/20 text-background border-background/30"
              >
                {feature}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-sans text-3xl font-bold text-foreground sm:text-4xl">
              Choose Your Package
            </h2>
            <p className="mt-4 text-muted-foreground">
              Select the perfect package that suits your needs and budget
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {service.packages.map((pkg) => (
              <Card
                key={pkg.name}
                className={`relative overflow-hidden ${
                  pkg.popular ? 'border-primary shadow-lg ring-2 ring-primary' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="font-sans text-xl">{pkg.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-foreground">
                      &#8377;{pkg.price}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className="w-full mt-6"
                    variant={pkg.popular ? 'default' : 'outline'}
                  >
                    <Link href="/contact">Book Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-secondary">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-sans text-3xl font-bold text-foreground sm:text-4xl">
            Ready to Book?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Get in touch with us today to discuss your requirements and book your session.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <a
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={`tel:+${phoneNumber}`}>
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
