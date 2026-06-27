'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navSections } from './navigation';

export function IconSidebar() {
  const pathname = usePathname();

  // Find the active section based on the current pathname
  const activeSection = navSections.find((section) =>
    section.items.some((item) => pathname === item.href || pathname.startsWith(item.href + '/'))
  ) || navSections[0];

  return (
    <div className="h-screen w-20 shrink-0 bg-sidebar dark:bg-sidebar border-r border-sidebar-border flex flex-col items-center py-6 gap-2 relative z-20">
      <div className="w-10 h-10 mb-4 bg-sidebar-primary rounded-xl flex items-center justify-center shadow-lg">
        <span className="text-sidebar-primary-foreground font-bold text-xl">K</span>
      </div>
      
      <div className="w-8 h-px bg-sidebar-accent opacity-30 mb-2" />

      {navSections.map((section) => {
        const isActive = activeSection.id === section.id;
        const Icon = section.icon;

        return (
          <Link
            key={section.id}
            href={section.href}
            title={section.label}
            className={`p-3 rounded-xl transition-all duration-200 flex items-center justify-center relative group ${
              isActive
                ? 'bg-sidebar-primary text-sidebar-primary-foreground shadow-lg'
                : 'text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground'
            }`}
          >
            <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
            
            {/* Tooltip */}
            <div className="absolute left-full ml-4 px-2 py-1 bg-sidebar-accent text-sidebar-foreground text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap z-50 border border-sidebar-border">
              {section.label}
            </div>
            
            {/* Active indicator */}
            {isActive && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-sidebar-primary-foreground rounded-r-full" />
            )}
          </Link>
        );
      })}
    </div>
  );
}
