'use client'

import { useState, useEffect } from 'react'
import { Check, Trash2, Phone, MessageCircle, Calendar } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import type { Inquiry } from '@/lib/data'

export default function LeadsPage() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([])

  useEffect(() => {
    const storedInquiries = JSON.parse(localStorage.getItem('inquiries') || '[]')
    setInquiries(storedInquiries.sort(
      (a: Inquiry, b: Inquiry) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    ))
  }, [])

  const handleMarkContacted = (id: string) => {
    const updated = inquiries.map((inquiry) =>
      inquiry.id === id ? { ...inquiry, contacted: !inquiry.contacted } : inquiry
    )
    setInquiries(updated)
    localStorage.setItem('inquiries', JSON.stringify(updated))
  }

  const handleDelete = (id: string) => {
    const updated = inquiries.filter((inquiry) => inquiry.id !== id)
    setInquiries(updated)
    localStorage.setItem('inquiries', JSON.stringify(updated))
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-sans text-3xl font-bold text-foreground">Leads</h1>
        <p className="mt-1 text-muted-foreground">
          Manage customer inquiries and leads
        </p>
      </div>

      {inquiries.length === 0 ? (
        <Card>
          <CardContent className="py-16 text-center">
            <p className="text-muted-foreground">
              No inquiries yet. They will appear here once customers submit the contact form.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {inquiries.map((inquiry) => (
            <Card key={inquiry.id}>
              <CardHeader className="pb-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                      {inquiry.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{inquiry.name}</CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {formatDate(inquiry.createdAt)}
                      </div>
                    </div>
                  </div>
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                      inquiry.contacted
                        ? 'bg-chart-1/10 text-chart-1'
                        : 'bg-accent/10 text-accent'
                    }`}
                  >
                    {inquiry.contacted ? 'Contacted' : 'Pending'}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Phone</p>
                    <p className="text-foreground">{inquiry.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Service</p>
                    <p className="text-foreground">{inquiry.service}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-muted-foreground">Message</p>
                  <p className="text-foreground mt-1">{inquiry.message}</p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2 border-t">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleMarkContacted(inquiry.id)}
                  >
                    <Check className="mr-2 h-4 w-4" />
                    {inquiry.contacted ? 'Mark as Pending' : 'Mark as Contacted'}
                  </Button>

                  <Button variant="outline" size="sm" asChild>
                    <a href={`tel:${inquiry.phone}`}>
                      <Phone className="mr-2 h-4 w-4" />
                      Call
                    </a>
                  </Button>

                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={`https://wa.me/${inquiry.phone.replace(/\D/g, '')}?text=${encodeURIComponent(`Hello ${inquiry.name}, this is regarding your inquiry about ${inquiry.service} at GarimaStudio.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp
                    </a>
                  </Button>

                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive" size="sm">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Delete Inquiry</AlertDialogTitle>
                        <AlertDialogDescription>
                          Are you sure you want to delete this inquiry from {inquiry.name}? This action cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => handleDelete(inquiry.id)}>
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
