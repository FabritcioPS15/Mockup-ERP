'use client'

import { Card, Button, Badge, Table, Input } from '@/components/ui-primitives'
import { Plus, Search, ShieldCheck } from 'lucide-react'
import { useState } from 'react'

const complianceItems = [
  { id: 'CMP-001', requirement: 'GDPR Compliance', category: 'Privacidad', status: 'Cumple', lastAudit: '15 Ene 2024' },
  { id: 'CMP-002', requirement: 'SOX Compliance', category: 'Financiero', status: 'En Proceso', lastAudit: '18 Ene 2024' },
  { id: 'CMP-003', requirement: 'ISO 27001', category: 'Seguridad', status: 'No Cumple', lastAudit: '20 Ene 2024' },
]

const tableRows = complianceItems.map(item => [
  item.id,
  item.requirement,
  item.category,
  <Badge key={item.id} variant={item.status === 'Cumple' ? 'success' : item.status === 'En Proceso' ? 'warning' : 'danger'}>
    {item.status}
  </Badge>,
  item.lastAudit,
])

export default function CompliancePage() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Compliance</h1>
            <p className="text-muted-foreground mt-1">Gestiona el cumplimiento normativo</p>
          </div>
          <Button variant="primary" size="lg" className="w-full sm:w-auto flex items-center justify-center gap-2">
            <Plus size={18} />
            Nuevo Requisito
          </Button>
        </div>

        <Card>
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              placeholder="Buscar requisitos..."
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              className="flex-1 w-full"
            />
            <Button variant="outline" className="w-full sm:w-auto">Filtrar</Button>
          </div>
        </Card>

        <Card>
          <Table
            headers={['ID', 'Requisito', 'Categoría', 'Estado', 'Última Auditoría']}
            rows={tableRows}
          />
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <p className="text-sm text-muted-foreground">Total Requisitos</p>
            <p className="text-3xl font-bold text-foreground mt-2">{complianceItems.length}</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">Cumplen</p>
            <p className="text-3xl font-bold text-foreground mt-2">{complianceItems.filter(c => c.status === 'Cumple').length}</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">No Cumplen</p>
            <p className="text-3xl font-bold text-foreground mt-2">{complianceItems.filter(c => c.status === 'No Cumple').length}</p>
          </Card>
        </div>
      </div>
    </div>
  )
}
