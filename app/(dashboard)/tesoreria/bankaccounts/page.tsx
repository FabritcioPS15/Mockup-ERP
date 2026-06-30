'use client'

import { Card, Button, Badge, Table, Input } from '@/components/ui-primitives'
import { Plus, Search, Building2 } from 'lucide-react'
import { useState } from 'react'

const accounts = [
  { id: 'ACC-001', bank: 'Banco Nacional', accountNumber: '1234-5678-9012', type: 'Corriente', balance: 50000, currency: 'USD', status: 'Activa' },
  { id: 'ACC-002', bank: 'Banco Internacional', accountNumber: '9876-5432-1098', type: 'Ahorros', balance: 75000, currency: 'USD', status: 'Activa' },
  { id: 'ACC-003', bank: 'Banco Local', accountNumber: '5555-4444-3333', type: 'Corriente', balance: 25000, currency: 'EUR', status: 'Inactiva' },
]

const tableRows = accounts.map(acc => [
  acc.id,
  acc.bank,
  acc.accountNumber,
  acc.type,
  `$${acc.balance.toLocaleString()}`,
  acc.currency,
  <Badge key={acc.id} variant={acc.status === 'Activa' ? 'success' : 'warning'}>
    {acc.status}
  </Badge>,
])

export default function BankAccountsPage() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Cuentas Bancarias</h1>
            <p className="text-muted-foreground mt-1">Gestiona las cuentas bancarias</p>
          </div>
          <Button variant="primary" size="lg" className="w-full sm:w-auto flex items-center justify-center gap-2">
            <Plus size={18} />
            Nueva Cuenta
          </Button>
        </div>

        <Card>
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              placeholder="Buscar cuentas..."
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              className="flex-1 w-full"
            />
            <Button variant="outline" className="w-full sm:w-auto">Filtrar</Button>
          </div>
        </Card>

        <Card>
          <Table
            headers={['ID', 'Banco', 'Número de Cuenta', 'Tipo', 'Balance', 'Moneda', 'Estado']}
            rows={tableRows}
          />
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <p className="text-sm text-muted-foreground">Total Cuentas</p>
            <p className="text-3xl font-bold text-foreground mt-2">{accounts.length}</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">Balance Total USD</p>
            <p className="text-3xl font-bold text-foreground mt-2">${accounts.filter(a => a.currency === 'USD').reduce((sum, a) => sum + a.balance, 0).toLocaleString()}</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">Cuentas Activas</p>
            <p className="text-3xl font-bold text-foreground mt-2">{accounts.filter(a => a.status === 'Activa').length}</p>
          </Card>
        </div>
      </div>
    </div>
  )
}
