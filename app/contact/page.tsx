'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { services } from '@/lib/data'

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Get form data
    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      service: formData.get('service'),
      message: formData.get('message'),
    }

    // Store in localStorage for demo (in production, this would go to an API)
    const existingInquiries = JSON.parse(localStorage.getItem('inquiries') || '[]')
    const newInquiry = {
      id: Date.now().toString(),
      ...data,
      createdAt: new Date().toISOString(),
      contacted: false,
    }
    localStorage.setItem('inquiries', JSON.stringify([...existingInquiries, newInquiry]))

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const phoneNumber = '919876543210'

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-primary">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-sans text-4xl font-bold text-primary-foreground sm:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Ready to capture your special moments? Get in touch with us today.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="font-sans text-2xl">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <Send className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Thank You!
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      We&apos;ve received your inquiry and will get back to you shortly.
                    </p>
                    <Button
                      className="mt-6"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Select Service</Label>
                      <Select name="service" required>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service.id} value={service.title}>
                              {service.title}
                            </SelectItem>
                          ))}
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your requirements..."
                        rows={4}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-sans text-2xl font-bold text-foreground">
                  Get In Touch
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Have questions? We&apos;d love to hear from you. Reach out through any of the channels below.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <a
                      href="tel:+919876543210"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 9838630282
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <a
                      href="mailto:hello@garimastudio.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      garimastudiodev@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Location</h3>
                    <p className="text-muted-foreground">
                      Garima Studio, Kudraha, Basti<br />
                      Uttar pradesh 400001
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="pt-6 space-y-4">
                <h3 className="font-semibold text-foreground">Quick Actions</h3>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button asChild className="flex-1">
                    <a
                      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent('Hello! I am interested in your services.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      WhatsApp
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="flex-1">
                    <a href={`tel:+${phoneNumber}`}>
                      <Phone className="mr-2 h-5 w-5" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </div>

              {/* Business Hours */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-foreground mb-4">
                    Business Hours
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span className="font-medium">9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday</span>
                      <span className="font-medium">10:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="font-medium">By Appointment</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
