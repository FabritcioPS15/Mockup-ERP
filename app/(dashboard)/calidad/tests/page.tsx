'use client'

import { Card, Button, Table, Input } from '@/components/ui-primitives'
import { Plus, Search, Scale } from 'lucide-react'
import { useState } from 'react'

const tests = [
  { id: 'TEST-001', name: 'Prueba de Resistencia', category: 'Mecánica', duration: '2h', status: 'Programado' },
  { id: 'TEST-002', name: 'Prueba Química', category: 'Química', duration: '4h', status: 'En Curso' },
  { id: 'TEST-003', name: 'Prueba de Durabilidad', category: 'Mecánica', duration: '24h', status: 'Completado' },
]

const tableRows = tests.map(test => [
  test.id,
  test.name,
  test.category,
  test.duration,
  test.status,
])

export default function TestsPage() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Pruebas de Calidad</h1>
            <p className="text-muted-foreground mt-1">Gestiona las pruebas de calidad</p>
          </div>
          <Button variant="primary" size="lg" className="w-full sm:w-auto flex items-center justify-center gap-2">
            <Plus size={18} />
            Nueva Prueba
          </Button>
        </div>

        <Card>
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              placeholder="Buscar pruebas..."
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              className="flex-1 w-full"
            />
            <Button variant="outline" className="w-full sm:w-auto">Filtrar</Button>
          </div>
        </Card>

        <Card>
          <Table
            headers={['ID', 'Nombre', 'Categoría', 'Duración', 'Estado']}
            rows={tableRows}
          />
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <p className="text-sm text-muted-foreground">Total Pruebas</p>
            <p className="text-3xl font-bold text-foreground mt-2">{tests.length}</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">En Curso</p>
            <p className="text-3xl font-bold text-foreground mt-2">{tests.filter(t => t.status === 'En Curso').length}</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">Completadas</p>
            <p className="text-3xl font-bold text-foreground mt-2">{tests.filter(t => t.status === 'Completado').length}</p>
          </Card>
        </div>
      </div>
    </div>
  )
}
