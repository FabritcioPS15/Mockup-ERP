'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  Users,
  FileText,
  Kanban,
  Package,
  DollarSign,
  Users2,
  FolderOpen,
  CreditCard,
  Receipt,
  LogOut,
  LineChart,
  PieChart,
  Megaphone,
  LifeBuoy,
  ShoppingCart,
  Truck,
  Wallet,
  Calculator,
  UserPlus,
  Award,
  Store,
  FileEdit,
  ClipboardList,
  PackageCheck,
  RotateCcw,
  PackageOpen,
  Send,
  FileSignature,
  CarFront,
  Map,
  MapPin,
} from 'lucide-react'

export const navSections = [
  {
    id: 'principal',
    label: 'Principal',
    icon: LayoutDashboard,
    href: '/principal/dashboard',
    items: [
      { href: '/principal/dashboard', label: 'Panel Principal', icon: LayoutDashboard },
      { href: '/principal/analytics', label: 'Analíticas', icon: LineChart },
      { href: '/principal/reports', label: 'Reportes', icon: PieChart },
    ],
  },
  {
    id: 'crm',
    label: 'CRM',
    icon: Users,
    href: '/crm/clients',
    items: [
      { href: '/crm/clients', label: 'Clientes', icon: Users },
      { href: '/crm/quotations', label: 'Cotizaciones', icon: FileText },
      { href: '/crm/pipeline', label: 'Pipeline', icon: Kanban },
      { href: '/crm/campaigns', label: 'Campañas', icon: Megaphone },
      { href: '/crm/support', label: 'Soporte', icon: LifeBuoy },
    ],
  },
  {
    id: 'operaciones',
    label: 'Operaciones',
    icon: Package,
    href: '/operaciones/inventory',
    items: [
      { href: '/operaciones/inventory', label: 'Inventario', icon: Package },
      { href: '/operaciones/projects', label: 'Proyectos', icon: FolderOpen },
    ],
  },
  {
    id: 'logistica',
    label: 'Logística',
    icon: Truck,
    href: '/logistics/dispatches',
    items: [
      { href: '/logistics/dispatches', label: 'Despachos', icon: PackageOpen },
      { href: '/logistics/shipments', label: 'Envíos', icon: Send },
      { href: '/logistics/waybills', label: 'Guías', icon: FileSignature },
      { href: '/logistics/carriers', label: 'Transportistas', icon: CarFront },
      { href: '/logistics/routes', label: 'Rutas', icon: Map },
      { href: '/logistics/tracking', label: 'Seguimiento', icon: MapPin },
    ],
  },
  {
    id: 'compras',
    label: 'Compras',
    icon: ShoppingCart,
    href: '/purchasing/suppliers',
    items: [
      { href: '/purchasing/suppliers', label: 'Proveedores', icon: Store },
      { href: '/purchasing/requests', label: 'Solicitudes', icon: FileEdit },
      { href: '/purchasing/orders', label: 'Órdenes', icon: ClipboardList },
      { href: '/purchasing/receipts', label: 'Recepción', icon: PackageCheck },
      { href: '/purchasing/returns', label: 'Devoluciones', icon: RotateCcw },
    ],
  },
  {
    id: 'finanzas',
    label: 'Finanzas',
    icon: DollarSign,
    href: '/finanzas/invoicing',
    items: [
      { href: '/finanzas/invoicing', label: 'Facturación', icon: Receipt },
      { href: '/finanzas/accounting', label: 'Contabilidad', icon: DollarSign },
      { href: '/finanzas/budgets', label: 'Presupuestos', icon: Wallet },
      { href: '/finanzas/expenses', label: 'Gastos', icon: Calculator },
    ],
  },
  {
    id: 'rrhh',
    label: 'RRHH',
    icon: Users2,
    href: '/rrhh/employees',
    items: [
      { href: '/rrhh/employees', label: 'Empleados', icon: Users2 },
      { href: '/rrhh/payroll', label: 'Nómina', icon: CreditCard },
      { href: '/rrhh/recruitment', label: 'Reclutamiento', icon: UserPlus },
      { href: '/rrhh/evaluations', label: 'Evaluaciones', icon: Award },
    ],
  },
]

export function Sidebar({ onClose }: { onClose?: () => void }) {
  const pathname = usePathname()

  // Find the active section based on the current pathname
  const activeSection = navSections.find((section) =>
    section.items.some((item) => pathname === item.href || pathname.startsWith(item.href + '/'))
  ) || navSections[0]

  return (
    <aside className="h-screen w-60 shrink-0 bg-sidebar dark:bg-sidebar text-sidebar-foreground border-r border-sidebar-border flex flex-col relative z-10 shadow-xl md:shadow-none">
      <div className="p-6 border-b border-sidebar-border h-[88px] flex flex-col justify-center">
        <h1 className="text-xl font-bold text-white">Krea & Terra Hub</h1>
        <p className="text-xs text-sidebar-foreground/70 mt-1">Plataforma de Negocios</p>
      </div>

      <div className="px-6 pt-4 pb-2 flex justify-between items-center">
        <h2 className="text-xs font-semibold text-sidebar-foreground/50 uppercase tracking-wider">
          {activeSection.label}
        </h2>
      </div>

      <nav className="flex-1 overflow-y-auto px-4 pb-6">
        <div className="space-y-1">
          {activeSection.items.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => onClose?.()}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-sidebar-primary text-sidebar-primary-foreground font-medium shadow-sm'
                    : 'text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-foreground'
                }`}
              >
                <Icon size={18} className={isActive ? 'opacity-100' : 'opacity-70'} />
                <span className="text-sm">{item.label}</span>
              </Link>
            )
          })}
        </div>
      </nav>

      <div className="p-4 border-t border-sidebar-border space-y-3">
        <div className="px-4 py-3 bg-sidebar-accent/20 rounded-lg">
          <p className="text-xs font-medium text-sidebar-foreground">Usuario Admin</p>
          <p className="text-xs text-sidebar-foreground/70">admin@krea-terra.com</p>
        </div>
        <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-foreground rounded-lg transition-colors font-medium text-sm">
          <LogOut size={18} className="opacity-70" />
          Cerrar Sesión
        </button>
      </div>
    </aside>
  )
}


