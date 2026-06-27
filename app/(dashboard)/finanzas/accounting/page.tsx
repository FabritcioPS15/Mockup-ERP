'use client'

import { Card, Button, Badge, Table, Stat } from '@/components/ui-primitives'
import { Plus, TrendingUp, DollarSign, CreditCard, AlertCircle } from 'lucide-react'

const typeMap: { [key: string]: string } = {
  'Invoice': 'Factura',
  'Expense': 'Gasto',
  'Transfer': 'Transferencia'
}

const statusMap: { [key: string]: string } = {
  'Completed': 'Completada',
  'Pending': 'Pendiente'
}

const transactions = [
  { id: 'TXN-001', type: 'Invoice', description: 'FAC-2024-001 de Acme Corp', amount: '+$52,000', date: '20 Feb 2024', status: 'Completed' },
  { id: 'TXN-002', type: 'Expense', description: 'Licencias de software', amount: '-$2,500', date: '22 Feb 2024', status: 'Completed' },
  { id: 'TXN-003', type: 'Invoice', description: 'FAC-2024-002 de Tech Systems', amount: '+$38,500', date: '22 Feb 2024', status: 'Completed' },
  { id: 'TXN-004', type: 'Expense', description: 'Suministros de oficina', amount: '-$450', date: '23 Feb 2024', status: 'Pending' },
  { id: 'TXN-005', type: 'Transfer', description: 'Depósito de nómina', amount: '-$125,000', date: '25 Feb 2024', status: 'Completed' },
  { id: 'TXN-006', type: 'Invoice', description: 'FAC-2024-003 de Global Tech', amount: '+$71,200', date: '25 Feb 2024', status: 'Completed' },
]

const tableRows = transactions.map(t => [
  t.id,
  typeMap[t.type] || t.type,
  t.description,
  <span key={t.id} className={t.amount.startsWith('+') ? 'text-green-600 dark:text-green-400 font-semibold' : 'text-red-600 dark:text-red-400 font-semibold'}>
    {t.amount}
  </span>,
  t.date,
  <Badge key={t.id} variant={t.status === 'Completed' ? 'success' : 'warning'}>
    {statusMap[t.status] || t.status}
  </Badge>,
])

export default function AccountingPage() {
  return (
    <div>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Contabilidad</h1>
            <p className="text-muted-foreground mt-1">Resumen financiero y transacciones</p>
          </div>
          <Button variant="primary" size="lg" className="w-full sm:w-auto flex items-center justify-center gap-2">
            <Plus size={18} />
            Registrar Transacción
          </Button>
        </div>

        {/* Financial Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Stat label="Ingresos Totales" value="$418,200" change="+15% YoY" icon={TrendingUp} />
          <Stat label="Gastos Totales" value="$127,950" change="-5% YoY" icon={CreditCard} />
          <Stat label="Ganancia Neta" value="$290,250" change="+18% YoY" icon={DollarSign} />
          <Stat label="Saldo en Efectivo" value="$456,780" change="Actual" icon={DollarSign} />
        </div>

        {/* Alert */}
        <Card className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-900">
          <div className="flex gap-3">
            <AlertCircle className="text-blue-600 dark:text-blue-400 flex-shrink-0" size={20} />
            <div>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100">Resumen Financiero</h4>
              <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">Los ingresos de este mes son 12% superiores al mes anterior</p>
            </div>
          </div>
        </Card>

        {/* Recent Transactions */}
        <Card>
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-foreground">Transacciones Recientes</h2>
          </div>
          <Table
            headers={['ID', 'Tipo', 'Descripción', 'Monto', 'Fecha', 'Estado']}
            rows={tableRows}
          />
        </Card>

        {/* Cash Flow Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card>
            <h3 className="font-semibold text-foreground mb-4">Ingresos Mensuales</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Facturas</span>
                <span className="font-semibold text-foreground">$161,700</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Servicios</span>
                <span className="font-semibold text-foreground">$98,500</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Otros</span>
                <span className="font-semibold text-foreground">$158,000</span>
              </div>
              <div className="pt-3 border-t border-border flex justify-between items-center">
                <span className="text-sm font-semibold text-foreground">Total</span>
                <span className="font-bold text-accent">$418,200</span>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="font-semibold text-foreground mb-4">Gastos Mensuales</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Nómina</span>
                <span className="font-semibold text-foreground">$85,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Operaciones</span>
                <span className="font-semibold text-foreground">$28,950</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Otros</span>
                <span className="font-semibold text-foreground">$14,000</span>
              </div>
              <div className="pt-3 border-t border-border flex justify-between items-center">
                <span className="text-sm font-semibold text-foreground">Total</span>
                <span className="font-bold text-red-600 dark:text-red-400">$127,950</span>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="font-semibold text-foreground mb-4">Acciones Rápidas</h3>
            <div className="space-y-3">
              <Button variant="primary" size="md" className="w-full">
                Crear Factura
              </Button>
              <Button variant="secondary" size="md" className="w-full">
                Registrar Gasto
              </Button>
              <Button variant="outline" size="md" className="w-full">
                Ver Reportes
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
