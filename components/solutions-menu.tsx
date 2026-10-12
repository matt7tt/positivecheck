"use client"

import Link from 'next/link'
import { useId, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { solutionGroups } from '@/lib/solution-catalog'

export function SolutionsMenu({ active }: { active: boolean }) {
  const [open, setOpen] = useState(false)
  const id = useId()
  const button = useRef<HTMLButtonElement>(null)
  return <div className="relative flex items-center" onBlur={e => {
    if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false)
  }} onKeyDown={e => {
    if (e.key === 'Escape' && open) { setOpen(false); button.current?.focus() }
  }}>
    <Link href="/solutions" className={`text-base font-medium ${active ? 'text-[#1a2642] font-bold border-b-2 border-[#1a2642]' : 'text-gray-600 hover:text-[#1a2642]'}`}>Solutions</Link>
    <button ref={button} type="button" aria-label="Explore solutions" aria-expanded={open} aria-controls={id} className="flex h-11 w-11 items-center justify-center rounded hover:bg-purple-50" onClick={() => setOpen(v => !v)}><ChevronDown aria-hidden="true" className={`h-4 w-4 ${open ? 'rotate-180' : ''}`} /></button>
    {open && <div id={id} className="absolute left-0 top-full z-50 grid w-[540px] grid-cols-2 gap-6 rounded-lg border bg-white p-6 shadow-lg">
      {solutionGroups.map(group => <section key={group.name}><h2 className="mb-3 font-semibold text-gray-900">{group.name}</h2><ul className="space-y-1">{group.items.map(item => <li key={item.href}><Link href={item.href} onClick={() => setOpen(false)} className="block rounded px-2 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-800">{item.name}</Link></li>)}</ul></section>)}
    </div>}
  </div>
}
