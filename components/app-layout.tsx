'use client'

import { Sidebar } from './navigation'
import { IconSidebar } from './icon-sidebar'
import dynamic from 'next/dynamic'
import { useState } from 'react'

const HeaderClient = dynamic(() => import('./header-client').then(mod => ({ default: mod.HeaderClient })), { ssr: false })

export function AppLayout({ children }: { children: React.ReactNode }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  return (
    <div className="flex h-screen bg-background overflow-hidden relative">
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity" 
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebars */}
      <div className={`fixed inset-y-0 left-0 z-50 flex transition-transform duration-300 ease-in-out md:translate-x-0 ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <IconSidebar />
        <Sidebar onClose={() => setIsMobileOpen(false)} />
      </div>

      <div className="flex-1 flex flex-col min-w-0 md:ml-80">
        <HeaderClient onMenuClick={() => setIsMobileOpen(true)} />
        <main className="flex-1 overflow-auto p-4 sm:p-6 md:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
