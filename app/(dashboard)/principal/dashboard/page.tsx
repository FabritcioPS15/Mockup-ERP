'use client'

import { Card, Stat, Button, Badge, Table } from '@/components/ui-primitives'
import {
  TrendingUp,
  DollarSign,
  Users,
  FileText,
  AlertCircle,
  Calendar,
  ArrowRight,
} from 'lucide-react'

const stats = [
  { label: 'Ingresos Totales', value: '$2.4M', change: '+12.5% respecto al mes anterior', icon: DollarSign },
  { label: 'Clientes Activos', value: '342', change: '+8 del mes anterior', icon: Users },
  { label: 'Cotizaciones Pendientes', value: '18', change: '5 vencen esta semana', icon: FileText },
  { label: 'Valor del Pipeline', value: '$5.8M', change: '+22% respecto al mes anterior', icon: TrendingUp },
]

const recentQuotations = [
  ['Tech Solutions Inc.', 'Paquete Empresarial', '$45,000', 'Pendiente', '5 Mar'],
  ['Global Industries', 'Integración Personalizada', '$32,500', 'Aprobada', '3 Mar'],
  ['StartUp Labs', 'Nivel Básico', '$8,900', 'Enviada', '2 Mar'],
  ['Fortune 500 Co.', 'Suite Premium', '$125,000', 'Negociando', '28 Feb'],
  ['Innovation Hub', 'Desarrollo', '$67,500', 'Aprobada', '27 Feb'],
]

const recentInvoices = [
  ['FAC-2024-001', 'Acme Corp', '$52,000', 'Pagada', '20 Feb'],
  ['FAC-2024-002', 'Tech Systems', '$38,500', 'Pendiente', '22 Feb'],
  ['FAC-2024-003', 'Global Tech', '$71,200', 'Vencida', '10 Feb'],
  ['FAC-2024-004', 'Digital Solutions', '$45,900', 'Pagada', '25 Feb'],
]

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Bienvenido de vuelta, Admin</h1>
        <p className="text-muted-foreground mt-1">Aquí está lo que sucede en tu negocio hoy</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <Stat key={i} {...stat} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quotations */}
        <div className="lg:col-span-2">
          <Card>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <h2 className="text-lg font-semibold text-foreground">Cotizaciones Recientes</h2>
              <Button variant="outline" size="sm" className="w-full sm:w-auto flex items-center justify-center gap-2">
                Ver Todo
                <ArrowRight size={16} />
              </Button>
            </div>
            <Table
              headers={['Cliente', 'Descripción', 'Monto', 'Estado', 'Fecha']}
              rows={recentQuotations}
            />
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="space-y-4">
          <Card>
            <h3 className="font-semibold text-foreground mb-4">Acciones Rápidas</h3>
            <div className="space-y-3">
              <Button variant="primary" size="md" className="w-full justify-start">
                Crear Cotización
              </Button>
              <Button variant="secondary" size="md" className="w-full justify-start">
                Agregar Factura
              </Button>
              <Button variant="outline" size="md" className="w-full justify-start">
                Nuevo Cliente
              </Button>
            </div>
          </Card>

          {/* Alerts */}
          <Card className="bg-amber-50 dark:bg-amber-950 border-amber-200 dark:border-amber-900">
            <div className="flex gap-3">
              <AlertCircle className="text-amber-600 dark:text-amber-400 flex-shrink-0" size={20} />
              <div>
                <h4 className="font-semibold text-amber-900 dark:text-amber-100">Tareas Pendientes</h4>
                <p className="text-sm text-amber-700 dark:text-amber-300 mt-1">5 cotizaciones vencen esta semana</p>
                <Button variant="outline" size="sm" className="mt-3 text-amber-900 dark:text-amber-100">
                  Revisar Ahora
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Invoices */}
      <Card>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <h2 className="text-lg font-semibold text-foreground">Facturas Recientes</h2>
          <Button variant="outline" size="sm" className="w-full sm:w-auto flex items-center justify-center gap-2">
            Ver Todo
            <ArrowRight size={16} />
          </Button>
        </div>
        <Table
          headers={['ID de Factura', 'Cliente', 'Monto', 'Estado', 'Fecha']}
          rows={recentInvoices}
        />
      </Card>
    </div>
  )
}
