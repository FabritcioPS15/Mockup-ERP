'use client'

import { Card, Button, Table, Input } from '@/components/ui-primitives'
import { Plus, Search, TrendingUp } from 'lucide-react'
import { useState } from 'react'

const cashflow = [
  { id: 'CF-001', period: 'Enero 2024', inflow: 150000, outflow: 120000, balance: 30000, status: 'Positivo' },
  { id: 'CF-002', period: 'Febrero 2024', inflow: 180000, outflow: 160000, balance: 20000, status: 'Positivo' },
  { id: 'CF-003', period: 'Marzo 2024', inflow: 140000, outflow: 150000, balance: -10000, status: 'Negativo' },
]

const tableRows = cashflow.map(cf => [
  cf.id,
  cf.period,
  `$${cf.inflow.toLocaleString()}`,
  `$${cf.outflow.toLocaleString()}`,
  `$${cf.balance.toLocaleString()}`,
  cf.status,
])

export default function CashflowPage() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Flujo de Caja</h1>
            <p className="text-muted-foreground mt-1">Gestiona el flujo de caja</p>
          </div>
          <Button variant="primary" size="lg" className="w-full sm:w-auto flex items-center justify-center gap-2">
            <Plus size={18} />
            Nuevo Registro
          </Button>
        </div>

        <Card>
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              placeholder="Buscar registros..."
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              className="flex-1 w-full"
            />
            <Button variant="outline" className="w-full sm:w-auto">Filtrar</Button>
          </div>
        </Card>

        <Card>
          <Table
            headers={['ID', 'Período', 'Ingresos', 'Egresos', 'Balance', 'Estado']}
            rows={tableRows}
          />
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <p className="text-sm text-muted-foreground">Total Ingresos</p>
            <p className="text-3xl font-bold text-foreground mt-2">${cashflow.reduce((sum, c) => sum + c.inflow, 0).toLocaleString()}</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">Total Egresos</p>
            <p className="text-3xl font-bold text-foreground mt-2">${cashflow.reduce((sum, c) => sum + c.outflow, 0).toLocaleString()}</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">Balance Neto</p>
            <p className="text-3xl font-bold text-foreground mt-2">${cashflow.reduce((sum, c) => sum + c.balance, 0).toLocaleString()}</p>
          </Card>
        </div>
      </div>
    </div>
  )
}
