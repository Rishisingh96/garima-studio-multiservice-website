'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Users, MessageSquare, TrendingUp, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import type { Inquiry } from '@/lib/data'

export default function AdminDashboard() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([])

  useEffect(() => {
    const storedInquiries = JSON.parse(localStorage.getItem('inquiries') || '[]')
    setInquiries(storedInquiries)
  }, [])

  const totalInquiries = inquiries.length
  const contactedCount = inquiries.filter((i) => i.contacted).length
  const pendingCount = totalInquiries - contactedCount

  const recentInquiries = inquiries
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 5)

  const stats = [
    {
      title: 'Total Inquiries',
      value: totalInquiries,
      icon: MessageSquare,
      color: 'text-primary',
      bg: 'bg-primary/10',
    },
    {
      title: 'Pending',
      value: pendingCount,
      icon: Users,
      color: 'text-accent',
      bg: 'bg-accent/10',
    },
    {
      title: 'Contacted',
      value: contactedCount,
      icon: TrendingUp,
      color: 'text-chart-1',
      bg: 'bg-chart-1/10',
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-sans text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="mt-1 text-muted-foreground">
          Welcome to the GarimaStudio admin panel
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-full ${stat.bg}`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Inquiries */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="font-sans">Recent Inquiries</CardTitle>
          <Button asChild variant="ghost" size="sm">
            <Link href="/admin/leads">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardHeader>
        <CardContent>
          {recentInquiries.length === 0 ? (
            <p className="text-center py-8 text-muted-foreground">
              No inquiries yet. They will appear here once customers submit the contact form.
            </p>
          ) : (
            <div className="space-y-4">
              {recentInquiries.map((inquiry) => (
                <div
                  key={inquiry.id}
                  className="flex items-center justify-between border-b pb-4 last:border-0"
                >
                  <div>
                    <p className="font-medium text-foreground">{inquiry.name}</p>
                    <p className="text-sm text-muted-foreground">{inquiry.service}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">{inquiry.phone}</p>
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                        inquiry.contacted
                          ? 'bg-chart-1/10 text-chart-1'
                          : 'bg-accent/10 text-accent'
                      }`}
                    >
                      {inquiry.contacted ? 'Contacted' : 'Pending'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
