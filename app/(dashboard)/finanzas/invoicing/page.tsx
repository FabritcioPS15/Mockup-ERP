'use client'

import { Card, Button, Badge, Table, Input, Stat } from '@/components/ui-primitives'
import { Plus, Download, AlertCircle, DollarSign, CheckCircle } from 'lucide-react'
import { useState } from 'react'

const statusMap: { [key: string]: string } = {
  'Paid': 'Pagada',
  'Pending': 'Pendiente',
  'Overdue': 'Vencida',
  'Draft': 'Borrador',
  'Sent': 'Enviada'
}

const invoices = [
  { id: 'FAC-2024-001', client: 'Acme Corp', amount: '$52,000', items: 8, status: 'Paid', issuedDate: '20 Feb 2024', dueDate: '20 Mar 2024', paidDate: '28 Feb 2024' },
  { id: 'FAC-2024-002', client: 'Tech Systems', amount: '$38,500', items: 6, status: 'Pending', issuedDate: '22 Feb 2024', dueDate: '22 Mar 2024', paidDate: '' },
  { id: 'FAC-2024-003', client: 'Global Tech', amount: '$71,200', items: 12, status: 'Overdue', issuedDate: '10 Feb 2024', dueDate: '10 Mar 2024', paidDate: '' },
  { id: 'FAC-2024-004', client: 'Digital Solutions', amount: '$45,900', items: 7, status: 'Paid', issuedDate: '25 Feb 2024', dueDate: '25 Mar 2024', paidDate: '1 Mar 2024' },
  { id: 'FAC-2024-005', client: 'Innovation Hub', amount: '$28,300', items: 4, status: 'Draft', issuedDate: '1 Mar 2024', dueDate: '1 Abr 2024', paidDate: '' },
  { id: 'FAC-2024-006', client: 'StartUp Labs', amount: '$15,600', items: 3, status: 'Sent', issuedDate: '2 Mar 2024', dueDate: '2 Abr 2024', paidDate: '' },
]

const tableRows = invoices.map(inv => [
  inv.id,
  inv.client,
  inv.amount,
  inv.items,
  <Badge key={inv.id} variant={inv.status === 'Paid' ? 'success' : inv.status === 'Overdue' ? 'danger' : inv.status === 'Draft' ? 'default' : 'warning'}>
    {statusMap[inv.status] || inv.status}
  </Badge>,
  inv.issuedDate,
  inv.dueDate,
])

export default function InvoicingPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const totalInvoiced = invoices.reduce((sum, inv) => sum + parseInt(inv.amount.replace('$', '').replace(',', '')), 0)
  const totalPaid = invoices.filter(inv => inv.status === 'Paid').reduce((sum, inv) => sum + parseInt(inv.amount.replace('$', '').replace(',', '')), 0)
  const totalPending = invoices.filter(inv => inv.status === 'Pending').reduce((sum, inv) => sum + parseInt(inv.amount.replace('$', '').replace(',', '')), 0)
  const totalOverdue = invoices.filter(inv => inv.status === 'Overdue').reduce((sum, inv) => sum + parseInt(inv.amount.replace('$', '').replace(',', '')), 0)

  return (
    <div>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Facturación</h1>
            <p className="text-muted-foreground mt-1">Crea y gestiona facturas</p>
          </div>
          <Button variant="primary" size="lg" className="w-full sm:w-auto flex items-center justify-center gap-2">
            <Plus size={18} />
            Crear Factura
          </Button>
        </div>

        {/* Alerts */}
        {totalOverdue > 0 && (
          <Card className="bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-900">
            <div className="flex gap-3">
              <AlertCircle className="text-red-600 dark:text-red-400 flex-shrink-0" size={20} />
              <div>
                <h4 className="font-semibold text-red-900 dark:text-red-100">Facturas Vencidas</h4>
                <p className="text-sm text-red-700 dark:text-red-300 mt-1">
                  {invoices.filter(inv => inv.status === 'Overdue').length} facturas vencidas totalizando ${(totalOverdue / 1000).toFixed(0)}K
                </p>
                <Button variant="outline" size="sm" className="mt-3 text-red-900 dark:text-red-100">
                  Enviar Recordatorios
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* Financial Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Stat label="Total Facturado" value={`$${(totalInvoiced / 1000).toFixed(0)}K`} icon={DollarSign} />
          <Stat label="Total Pagado" value={`$${(totalPaid / 1000).toFixed(0)}K`} icon={CheckCircle} />
          <Card>
            <p className="text-sm text-muted-foreground">Pago Pendiente</p>
            <p className="text-2xl font-bold text-amber-600 dark:text-amber-400 mt-2">${(totalPending / 1000).toFixed(0)}K</p>
          </Card>
          <Card className="bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-900">
            <p className="text-sm text-red-900 dark:text-red-100">Monto Vencido</p>
            <p className="text-2xl font-bold text-red-600 dark:text-red-400 mt-2">${(totalOverdue / 1000).toFixed(0)}K</p>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card>
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              placeholder="Buscar facturas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 w-full"
            />
            <div className="flex gap-2 w-full sm:w-auto">
              <Button variant="outline" className="flex-1 sm:flex-none">Filtrar por Estado</Button>
              <Button variant="outline" className="flex-1 sm:flex-none flex items-center justify-center gap-2">
                <Download size={16} />
                Exportar
              </Button>
            </div>
          </div>
        </Card>

        {/* Invoices Table */}
        <Card>
          <Table
            headers={['ID de Factura', 'Cliente', 'Monto', 'Artículos', 'Estado', 'Emitida', 'Fecha de Vencimiento']}
            rows={tableRows}
          />
        </Card>

        {/* Recent Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <h3 className="font-semibold text-foreground mb-4">Resumen de Estado</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-green-600 dark:text-green-400 font-medium">Pagadas</span>
                <span className="font-bold text-foreground">{invoices.filter(inv => inv.status === 'Paid').length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-amber-600 dark:text-amber-400 font-medium">Pendientes</span>
                <span className="font-bold text-foreground">{invoices.filter(inv => inv.status === 'Pending').length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-red-600 dark:text-red-400 font-medium">Vencidas</span>
                <span className="font-bold text-foreground">{invoices.filter(inv => inv.status === 'Overdue').length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">Borrador</span>
                <span className="font-bold text-foreground">{invoices.filter(inv => inv.status === 'Draft').length}</span>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="font-semibold text-foreground mb-4">Desglose Mensual</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Febrero</span>
                <span className="font-bold text-foreground">$235,600</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Marzo (YTD)</span>
                <span className="font-bold text-foreground">$43,900</span>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-border">
                <span className="text-sm font-semibold text-foreground">Total YTD</span>
                <span className="font-bold text-accent">$279,500</span>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="font-semibold text-foreground mb-4">Acciones Rápidas</h3>
            <div className="space-y-3">
              <Button variant="primary" size="md" className="w-full">
                Enviar Factura
              </Button>
              <Button variant="secondary" size="md" className="w-full">
                Registrar Pago
              </Button>
              <Button variant="outline" size="md" className="w-full">
                Ver Plantillas
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
