'use client'

import { Card, Button, Badge, Table, Input } from '@/components/ui-primitives'
import { Plus, Search, Send } from 'lucide-react'
import { useState } from 'react'

const transfers = [
  { id: 'TRF-001', fromAccount: 'ACC-001', toAccount: 'ACC-002', amount: 10000, currency: 'USD', date: '15 Ene 2024', status: 'Completada' },
  { id: 'TRF-002', fromAccount: 'ACC-002', toAccount: 'ACC-003', amount: 5000, currency: 'USD', date: '18 Ene 2024', status: 'Pendiente' },
  { id: 'TRF-003', fromAccount: 'ACC-001', toAccount: 'ACC-003', amount: 7500, currency: 'EUR', date: '20 Ene 2024', status: 'En Proceso' },
]

const tableRows = transfers.map(trf => [
  trf.id,
  trf.fromAccount,
  trf.toAccount,
  `$${trf.amount.toLocaleString()}`,
  trf.currency,
  trf.date,
  <Badge key={trf.id} variant={trf.status === 'Completada' ? 'success' : trf.status === 'En Proceso' ? 'warning' : 'default'}>
    {trf.status}
  </Badge>,
])

export default function TransfersPage() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Transferencias</h1>
            <p className="text-muted-foreground mt-1">Gestiona las transferencias entre cuentas</p>
          </div>
          <Button variant="primary" size="lg" className="w-full sm:w-auto flex items-center justify-center gap-2">
            <Plus size={18} />
            Nueva Transferencia
          </Button>
        </div>

        <Card>
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              placeholder="Buscar transferencias..."
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              className="flex-1 w-full"
            />
            <Button variant="outline" className="w-full sm:w-auto">Filtrar</Button>
          </div>
        </Card>

        <Card>
          <Table
            headers={['ID', 'Desde', 'Hacia', 'Monto', 'Moneda', 'Fecha', 'Estado']}
            rows={tableRows}
          />
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <p className="text-sm text-muted-foreground">Total Transferencias</p>
            <p className="text-3xl font-bold text-foreground mt-2">{transfers.length}</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">Monto Total Transferido</p>
            <p className="text-3xl font-bold text-foreground mt-2">${transfers.reduce((sum, t) => sum + t.amount, 0).toLocaleString()}</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">Completadas</p>
            <p className="text-3xl font-bold text-foreground mt-2">{transfers.filter(t => t.status === 'Completada').length}</p>
          </Card>
        </div>
      </div>
    </div>
  )
}
