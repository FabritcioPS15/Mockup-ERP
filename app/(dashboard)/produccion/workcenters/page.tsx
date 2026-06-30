'use client'

import { Card, Button, Badge, Table, Input } from '@/components/ui-primitives'
import { Plus, Search, Building2 } from 'lucide-react'
import { useState } from 'react'

const workcenters = [
  { id: 'WC-001', name: 'Línea de Ensamblaje A', location: 'Planta 1', capacity: 500, status: 'Operativo' },
  { id: 'WC-002', name: 'Línea de Ensamblaje B', location: 'Planta 1', capacity: 400, status: 'Operativo' },
  { id: 'WC-003', name: 'Centro de Pintura', location: 'Planta 2', capacity: 300, status: 'Mantenimiento' },
  { id: 'WC-004', name: 'Empaque y Embalaje', location: 'Planta 2', capacity: 600, status: 'Operativo' },
]

const tableRows = workcenters.map(wc => [
  wc.id,
  wc.name,
  wc.location,
  wc.capacity,
  <Badge key={wc.id} variant={wc.status === 'Operativo' ? 'success' : 'warning'}>
    {wc.status}
  </Badge>,
])

export default function WorkCentersPage() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Centros de Trabajo</h1>
            <p className="text-muted-foreground mt-1">Gestiona los centros de producción</p>
          </div>
          <Button variant="primary" size="lg" className="w-full sm:w-auto flex items-center justify-center gap-2">
            <Plus size={18} />
            Nuevo Centro
          </Button>
        </div>

        <Card>
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              placeholder="Buscar centros..."
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              className="flex-1 w-full"
            />
            <Button variant="outline" className="w-full sm:w-auto">Filtrar</Button>
          </div>
        </Card>

        <Card>
          <Table
            headers={['ID', 'Nombre', 'Ubicación', 'Capacidad', 'Estado']}
            rows={tableRows}
          />
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <p className="text-sm text-muted-foreground">Total Centros</p>
            <p className="text-3xl font-bold text-foreground mt-2">{workcenters.length}</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">Operativos</p>
            <p className="text-3xl font-bold text-foreground mt-2">{workcenters.filter(w => w.status === 'Operativo').length}</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">Capacidad Total</p>
            <p className="text-3xl font-bold text-foreground mt-2">{workcenters.reduce((sum, w) => sum + w.capacity, 0)}</p>
          </Card>
        </div>
      </div>
    </div>
  )
}
