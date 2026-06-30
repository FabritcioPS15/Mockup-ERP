'use client'

import { Card, Button, Badge, Table, Input } from '@/components/ui-primitives'
import { Plus, Search, FileCheck } from 'lucide-react'
import { useState } from 'react'

const reconciliations = [
  { id: 'REC-001', account: 'ACC-001', period: 'Enero 2024', bankBalance: 50000, systemBalance: 50000, difference: 0, status: 'Conciliado' },
  { id: 'REC-002', account: 'ACC-002', period: 'Enero 2024', bankBalance: 75000, systemBalance: 74800, difference: 200, status: 'Pendiente' },
  { id: 'REC-003', account: 'ACC-003', period: 'Enero 2024', bankBalance: 25000, systemBalance: 25000, difference: 0, status: 'Conciliado' },
]

const tableRows = reconciliations.map(rec => [
  rec.id,
  rec.account,
  rec.period,
  `$${rec.bankBalance.toLocaleString()}`,
  `$${rec.systemBalance.toLocaleString()}`,
  `$${rec.difference.toLocaleString()}`,
  <Badge key={rec.id} variant={rec.status === 'Conciliado' ? 'success' : 'warning'}>
    {rec.status}
  </Badge>,
])

export default function ReconciliationPage() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Conciliación Bancaria</h1>
            <p className="text-muted-foreground mt-1">Gestiona la conciliación de cuentas bancarias</p>
          </div>
          <Button variant="primary" size="lg" className="w-full sm:w-auto flex items-center justify-center gap-2">
            <Plus size={18} />
            Nueva Conciliación
          </Button>
        </div>

        <Card>
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              placeholder="Buscar conciliaciones..."
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              className="flex-1 w-full"
            />
            <Button variant="outline" className="w-full sm:w-auto">Filtrar</Button>
          </div>
        </Card>

        <Card>
          <Table
            headers={['ID', 'Cuenta', 'Período', 'Balance Banco', 'Balance Sistema', 'Diferencia', 'Estado']}
            rows={tableRows}
          />
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <p className="text-sm text-muted-foreground">Total Conciliaciones</p>
            <p className="text-3xl font-bold text-foreground mt-2">{reconciliations.length}</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">Conciliadas</p>
            <p className="text-3xl font-bold text-foreground mt-2">{reconciliations.filter(r => r.status === 'Conciliado').length}</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">Diferencia Total</p>
            <p className="text-3xl font-bold text-foreground mt-2">${reconciliations.reduce((sum, r) => sum + r.difference, 0).toLocaleString()}</p>
          </Card>
        </div>
      </div>
    </div>
  )
}
