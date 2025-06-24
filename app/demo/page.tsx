import { DemoComponent } from "@/components/demo"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Demo Request - Positive Check',
  description: 'Request a demo of Positive Check wellness calls',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    noarchive: true,
    nosnippet: true,
    noimageindex: true,
  }
}

export default function DemoPage() {
  return <DemoComponent />
}