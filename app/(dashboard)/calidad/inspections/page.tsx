'use client'

import { Card, Button, Badge, Table, Input } from '@/components/ui-primitives'
import { Plus, Search, ShieldCheck } from 'lucide-react'
import { useState } from 'react'

const inspections = [
  { id: 'INS-001', type: 'Calidad de Materiales', product: 'Producto A', result: 'Aprobado', date: '15 Ene 2024', inspector: 'Juan Pérez' },
  { id: 'INS-002', type: 'Inspección Final', product: 'Producto B', result: 'Rechazado', date: '18 Ene 2024', inspector: 'María López' },
  { id: 'INS-003', type: 'Control de Proceso', product: 'Producto C', result: 'Aprobado', date: '20 Ene 2024', inspector: 'Carlos Ruiz' },
]

const tableRows = inspections.map(insp => [
  insp.id,
  insp.type,
  insp.product,
  <Badge key={insp.id} variant={insp.result === 'Aprobado' ? 'success' : 'danger'}>
    {insp.result}
  </Badge>,
  insp.date,
  insp.inspector,
])

export default function InspectionsPage() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Inspecciones de Calidad</h1>
            <p className="text-muted-foreground mt-1">Gestiona las inspecciones de calidad</p>
          </div>
          <Button variant="primary" size="lg" className="w-full sm:w-auto flex items-center justify-center gap-2">
            <Plus size={18} />
            Nueva Inspección
          </Button>
        </div>

        <Card>
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              placeholder="Buscar inspecciones..."
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              className="flex-1 w-full"
            />
            <Button variant="outline" className="w-full sm:w-auto">Filtrar</Button>
          </div>
        </Card>

        <Card>
          <Table
            headers={['ID', 'Tipo', 'Producto', 'Resultado', 'Fecha', 'Inspector']}
            rows={tableRows}
          />
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <p className="text-sm text-muted-foreground">Total Inspecciones</p>
            <p className="text-3xl font-bold text-foreground mt-2">{inspections.length}</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">Aprobadas</p>
            <p className="text-3xl font-bold text-foreground mt-2">{inspections.filter(i => i.result === 'Aprobado').length}</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">Rechazadas</p>
            <p className="text-3xl font-bold text-foreground mt-2">{inspections.filter(i => i.result === 'Rechazado').length}</p>
          </Card>
        </div>
      </div>
    </div>
  )
}
