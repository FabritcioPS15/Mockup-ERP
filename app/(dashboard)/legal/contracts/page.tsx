'use client'

import { Card, Button, Badge, Table, Input } from '@/components/ui-primitives'
import { Plus, Search, FileText } from 'lucide-react'
import { useState } from 'react'

const contracts = [
  { id: 'CTR-001', name: 'Contrato Proveedor A', type: 'Proveedor', party: 'Tech Solutions', status: 'Activo', expiry: '31 Dic 2024' },
  { id: 'CTR-002', name: 'Contrato Cliente B', type: 'Cliente', party: 'Global Industries', status: 'Activo', expiry: '15 Jun 2024' },
  { id: 'CTR-003', name: 'Contrato Empleado', type: 'Empleado', party: 'Juan Pérez', status: 'Por Renovar', expiry: '20 Ene 2024' },
]

const tableRows = contracts.map(contract => [
  contract.id,
  contract.name,
  contract.type,
  contract.party,
  <Badge key={contract.id} variant={contract.status === 'Activo' ? 'success' : 'warning'}>
    {contract.status}
  </Badge>,
  contract.expiry,
])

export default function ContractsPage() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Contratos</h1>
            <p className="text-muted-foreground mt-1">Gestiona los contratos legales</p>
          </div>
          <Button variant="primary" size="lg" className="w-full sm:w-auto flex items-center justify-center gap-2">
            <Plus size={18} />
            Nuevo Contrato
          </Button>
        </div>

        <Card>
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              placeholder="Buscar contratos..."
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              className="flex-1 w-full"
            />
            <Button variant="outline" className="w-full sm:w-auto">Filtrar</Button>
          </div>
        </Card>

        <Card>
          <Table
            headers={['ID', 'Nombre', 'Tipo', 'Contraparte', 'Estado', 'Vencimiento']}
            rows={tableRows}
          />
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <p className="text-sm text-muted-foreground">Total Contratos</p>
            <p className="text-3xl font-bold text-foreground mt-2">{contracts.length}</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">Activos</p>
            <p className="text-3xl font-bold text-foreground mt-2">{contracts.filter(c => c.status === 'Activo').length}</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">Por Renovar</p>
            <p className="text-3xl font-bold text-foreground mt-2">{contracts.filter(c => c.status === 'Por Renovar').length}</p>
          </Card>
        </div>
      </div>
    </div>
  )
}
