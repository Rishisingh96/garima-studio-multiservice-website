'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, Camera, Video } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { portfolioItems, PortfolioItem } from '@/lib/data'
import { cn } from '@/lib/utils'

type Category = 'all' | 'photo' | 'video'

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('all')
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null)

  const filteredItems =
    activeCategory === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory)

  const categories: { value: Category; label: string; icon: typeof Camera }[] = [
    { value: 'all', label: 'All Work', icon: Camera },
    { value: 'photo', label: 'Photos', icon: Camera },
    { value: 'video', label: 'Videos', icon: Video },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-primary">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-sans text-4xl font-bold text-primary-foreground sm:text-5xl">
            Our Portfolio
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Explore our collection of beautiful moments captured through our lens
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <Button
                key={cat.value}
                variant={activeCategory === cat.value ? 'default' : 'outline'}
                onClick={() => setActiveCategory(cat.value)}
                className="min-w-[120px]"
              >
                <cat.icon className="mr-2 h-4 w-4" />
                {cat.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group relative aspect-square overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/0 transition-colors group-hover:bg-foreground/40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                  <span
                    className={cn(
                      'mb-2 rounded-full px-3 py-1 text-xs font-medium',
                      item.category === 'photo'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-accent text-accent-foreground'
                    )}
                  >
                    {item.category === 'photo' ? 'Photo' : 'Video'}
                  </span>
                  <p className="text-center font-medium text-background px-4">
                    {item.title}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-muted-foreground">No items found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-background hover:text-accent transition-colors focus:outline-none"
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>

          <div
            className="relative max-h-[90vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.fullSize}
              alt={selectedImage.title}
              width={1200}
              height={800}
              className="max-h-[85vh] w-auto rounded-lg object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-4 rounded-b-lg">
              <p className="text-center text-lg font-medium text-background">
                {selectedImage.title}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-sans text-3xl font-bold text-foreground sm:text-4xl">
            Want Similar Photos for Your Event?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Let us capture your special moments with the same quality and attention to detail.
          </p>
          <Button asChild size="lg" className="mt-8">
            <a href="/contact">Book a Session</a>
          </Button>
        </div>
      </section>
    </div>
  )
}
