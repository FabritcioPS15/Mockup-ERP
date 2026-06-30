'use client'

import { Card, Button, Badge, Table, Input } from '@/components/ui-primitives'
import { Plus, Search, AlertTriangle } from 'lucide-react'
import { useState } from 'react'

const nonconformities = [
  { id: 'NC-001', description: 'Defecto en soldadura', severity: 'Alta', status: 'Abierto', date: '15 Ene 2024', responsible: 'Juan Pérez' },
  { id: 'NC-002', description: 'Dimensiones incorrectas', severity: 'Media', status: 'En Proceso', date: '18 Ene 2024', responsible: 'María López' },
  { id: 'NC-003', description: 'Falta de acabado', severity: 'Baja', status: 'Cerrado', date: '20 Ene 2024', responsible: 'Carlos Ruiz' },
]

const tableRows = nonconformities.map(nc => [
  nc.id,
  nc.description,
  <Badge key={nc.id} variant={nc.severity === 'Alta' ? 'danger' : nc.severity === 'Media' ? 'warning' : 'success'}>
    {nc.severity}
  </Badge>,
  <Badge key={nc.id + '-status'} variant={nc.status === 'Cerrado' ? 'success' : nc.status === 'En Proceso' ? 'warning' : 'danger'}>
    {nc.status}
  </Badge>,
  nc.date,
  nc.responsible,
])

export default function NonconformitiesPage() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">No Conformidades</h1>
            <p className="text-muted-foreground mt-1">Gestiona las no conformidades</p>
          </div>
          <Button variant="primary" size="lg" className="w-full sm:w-auto flex items-center justify-center gap-2">
            <Plus size={18} />
            Nueva No Conformidad
          </Button>
        </div>

        <Card>
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              placeholder="Buscar no conformidades..."
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              className="flex-1 w-full"
            />
            <Button variant="outline" className="w-full sm:w-auto">Filtrar</Button>
          </div>
        </Card>

        <Card>
          <Table
            headers={['ID', 'Descripción', 'Severidad', 'Estado', 'Fecha', 'Responsable']}
            rows={tableRows}
          />
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <p className="text-sm text-muted-foreground">Total NC</p>
            <p className="text-3xl font-bold text-foreground mt-2">{nonconformities.length}</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">Abiertas</p>
            <p className="text-3xl font-bold text-foreground mt-2">{nonconformities.filter(n => n.status === 'Abierto').length}</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">Cerradas</p>
            <p className="text-3xl font-bold text-foreground mt-2">{nonconformities.filter(n => n.status === 'Cerrado').length}</p>
          </Card>
        </div>
      </div>
    </div>
  )
}
