'use client'

import { Card, Button, Badge, Table, Input } from '@/components/ui-primitives'
import { Plus, Search, Download } from 'lucide-react'
import { useState } from 'react'

const statusMap: { [key: string]: string } = {
  'Pending': 'Pendiente',
  'Approved': 'Aprobada',
  'Sent': 'Enviada',
  'Negotiating': 'Negociando',
  'Expired': 'Expirada'
}

const quotations = [
  { id: 'CT-001', client: 'Tech Solutions Inc.', amount: '$45,000', items: 12, status: 'Pending', validUntil: '15 Mar 2024', createdDate: '1 Mar 2024' },
  { id: 'CT-002', client: 'Global Industries', amount: '$32,500', items: 8, status: 'Approved', validUntil: '13 Mar 2024', createdDate: '27 Feb 2024' },
  { id: 'CT-003', client: 'StartUp Labs', amount: '$8,900', items: 4, status: 'Sent', validUntil: '12 Mar 2024', createdDate: '26 Feb 2024' },
  { id: 'CT-004', client: 'Fortune 500 Co.', amount: '$125,000', items: 24, status: 'Negotiating', validUntil: '20 Mar 2024', createdDate: '28 Feb 2024' },
  { id: 'CT-005', client: 'Innovation Hub', amount: '$67,500', items: 16, status: 'Approved', validUntil: '18 Mar 2024', createdDate: '2 Mar 2024' },
  { id: 'CT-006', client: 'Digital Solutions', amount: '$22,300', items: 6, status: 'Expired', validUntil: '20 Feb 2024', createdDate: '6 Feb 2024' },
]

const tableRows = quotations.map(quote => [
  quote.id,
  quote.client,
  quote.amount,
  quote.items,
  <Badge key={quote.id} variant={quote.status === 'Approved' ? 'success' : quote.status === 'Pending' ? 'warning' : quote.status === 'Expired' ? 'danger' : 'default'}>
    {statusMap[quote.status] || quote.status}
  </Badge>,
  quote.validUntil,
  quote.createdDate,
])

export default function QuotationsPage() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Cotizaciones</h1>
            <p className="text-muted-foreground mt-1">Crea y gestiona cotizaciones de clientes</p>
          </div>
          <Button variant="primary" size="lg" className="w-full sm:w-auto flex items-center justify-center gap-2">
            <Plus size={18} />
            Crear Cotización
          </Button>
        </div>

        {/* Search and Filters */}
        <Card>
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              placeholder="Buscar cotizaciones..."
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
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

        {/* Quotations Table */}
        <Card>
          <Table
            headers={['ID Cotización', 'Cliente', 'Monto', 'Artículos', 'Estado', 'Válida Hasta', 'Creada']}
            rows={tableRows}
          />
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <p className="text-sm text-muted-foreground">Total Cotizaciones</p>
            <p className="text-3xl font-bold text-foreground mt-2">{quotations.length}</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">Valor Total</p>
            <p className="text-2xl font-bold text-foreground mt-2">$301,200</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">Aprobadas</p>
            <p className="text-3xl font-bold text-foreground mt-2">{quotations.filter(q => q.status === 'Approved').length}</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">Pendientes</p>
            <p className="text-3xl font-bold text-foreground mt-2">{quotations.filter(q => q.status === 'Pending').length}</p>
          </Card>
        </div>
      </div>
    </div>
  )
}
