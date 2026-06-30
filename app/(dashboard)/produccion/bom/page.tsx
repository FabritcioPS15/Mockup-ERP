'use client'

import { Card, Button, Table, Input } from '@/components/ui-primitives'
import { Plus, Search, FileCheck } from 'lucide-react'
import { useState } from 'react'

const boms = [
  { id: 'BOM-001', product: 'Producto A', version: 'v1.2', components: 15, lastUpdated: '15 Ene 2024' },
  { id: 'BOM-002', product: 'Producto B', version: 'v2.0', components: 22, lastUpdated: '18 Ene 2024' },
  { id: 'BOM-003', product: 'Producto C', version: 'v1.0', components: 8, lastUpdated: '10 Ene 2024' },
]

const tableRows = boms.map(bom => [
  bom.id,
  bom.product,
  bom.version,
  bom.components,
  bom.lastUpdated,
])

export default function BOMPage() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Listas de Materiales (BOM)</h1>
            <p className="text-muted-foreground mt-1">Gestiona las listas de materiales</p>
          </div>
          <Button variant="primary" size="lg" className="w-full sm:w-auto flex items-center justify-center gap-2">
            <Plus size={18} />
            Nueva BOM
          </Button>
        </div>

        <Card>
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              placeholder="Buscar BOMs..."
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              className="flex-1 w-full"
            />
            <Button variant="outline" className="w-full sm:w-auto">Filtrar</Button>
          </div>
        </Card>

        <Card>
          <Table
            headers={['ID', 'Producto', 'Versión', 'Componentes', 'Última Actualización']}
            rows={tableRows}
          />
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <p className="text-sm text-muted-foreground">Total BOMs</p>
            <p className="text-3xl font-bold text-foreground mt-2">{boms.length}</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">Total Componentes</p>
            <p className="text-3xl font-bold text-foreground mt-2">{boms.reduce((sum, b) => sum + b.components, 0)}</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">Promedio Componentes</p>
            <p className="text-3xl font-bold text-foreground mt-2">{Math.round(boms.reduce((sum, b) => sum + b.components, 0) / boms.length)}</p>
          </Card>
        </div>
      </div>
    </div>
  )
}
