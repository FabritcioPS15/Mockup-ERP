'use client'

import { Badge, Button } from '@/components/ui-primitives'
import { PageHeader, SearchFilter, StatsGrid, DataTable } from '@/components/page-layout'
import { Download } from 'lucide-react'
import { useState } from 'react'

// Mapa de estados para traducción
const statusMap: { [key: string]: string } = {
  'Pending': 'Pendiente',
  'Approved': 'Aprobada',
  'Sent': 'Enviada',
  'Negotiating': 'Negociando',
  'Expired': 'Expirada'
}

// Datos de ejemplo de cotizaciones
const quotations = [
  { id: 'CT-001', client: 'Tech Solutions Inc.', amount: '$45,000', items: 12, status: 'Pending', validUntil: '15 Mar 2024', createdDate: '1 Mar 2024' },
  { id: 'CT-002', client: 'Global Industries', amount: '$32,500', items: 8, status: 'Approved', validUntil: '13 Mar 2024', createdDate: '27 Feb 2024' },
  { id: 'CT-003', client: 'StartUp Labs', amount: '$8,900', items: 4, status: 'Sent', validUntil: '12 Mar 2024', createdDate: '26 Feb 2024' },
  { id: 'CT-004', client: 'Fortune 500 Co.', amount: '$125,000', items: 24, status: 'Negotiating', validUntil: '20 Mar 2024', createdDate: '28 Feb 2024' },
  { id: 'CT-005', client: 'Innovation Hub', amount: '$67,500', items: 16, status: 'Approved', validUntil: '18 Mar 2024', createdDate: '2 Mar 2024' },
  { id: 'CT-006', client: 'Digital Solutions', amount: '$22,300', items: 6, status: 'Expired', validUntil: '20 Feb 2024', createdDate: '6 Feb 2024' },
]

// Filas de la tabla
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

  const filterButtons = (
    <>
      <Button variant="outline" className="flex-1 sm:flex-none">Filtrar por Estado</Button>
      <Button variant="outline" className="flex-1 sm:flex-none flex items-center justify-center gap-2">
        <Download size={16} />
        Exportar
      </Button>
    </>
  )

  const stats = [
    { label: 'Total Cotizaciones', value: quotations.length },
    { label: 'Valor Total', value: '$301,200' },
    { label: 'Aprobadas', value: quotations.filter(q => q.status === 'Approved').length },
    { label: 'Pendientes', value: quotations.filter(q => q.status === 'Pending').length },
  ]

  return (
    <div className="space-y-6">
      <PageHeader
        title="Cotizaciones"
        description="Crea y gestiona cotizaciones de clientes"
        buttonText="Crear Cotización"
      />

      <div className="bg-card rounded-xl border border-border/60 p-6 shadow-md hover:shadow-lg transition-all duration-300">
        <SearchFilter
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          placeholder="Buscar cotizaciones..."
          filterButtons={filterButtons}
        />
      </div>

      <DataTable
        headers={['ID Cotización', 'Cliente', 'Monto', 'Artículos', 'Estado', 'Válida Hasta', 'Creada']}
        rows={tableRows}
      />

      <StatsGrid stats={stats} />
    </div>
  )
}
