import Link from 'next/link'
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-sans text-xl font-bold">GarimaStudio</h3>
            <p className="text-sm text-background/70">
              Capture your moments, create your memories. Professional photography and videography services for all occasions.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/70 transition-colors hover:text-accent"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/70 transition-colors hover:text-accent"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-background/70 transition-colors hover:text-accent">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-background/70 transition-colors hover:text-accent">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-background/70 transition-colors hover:text-accent">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-background/70 transition-colors hover:text-accent">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/wedding-booking" className="text-background/70 transition-colors hover:text-accent">
                  Wedding Booking
                </Link>
              </li>
              <li>
                <Link href="/services/photo-shooting" className="text-background/70 transition-colors hover:text-accent">
                  Photo Shooting
                </Link>
              </li>
              <li>
                <Link href="/services/party-event-booking" className="text-background/70 transition-colors hover:text-accent">
                  Party/Event Booking
                </Link>
              </li>
              <li>
                <Link href="/services/album-services" className="text-background/70 transition-colors hover:text-accent">
                  Album Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-background/70">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+91 9838630282</span><span>+91 7800017055</span>
              </li>
              <li className="flex items-center gap-2 text-background/70">
                <Mail className="h-4 w-4 shrink-0" />
                <span>garimastudiodev@gmail.com</span>
              </li>
              <li className="flex items-start gap-2 text-background/70">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span> Garima Studio, Kudraha, Basti,Uttar pradesh, 272301</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-background/20 pt-8">
          <p className="text-center text-sm text-background/60">
            &copy; {new Date().getFullYear()} GarimaStudio Multiservice. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
