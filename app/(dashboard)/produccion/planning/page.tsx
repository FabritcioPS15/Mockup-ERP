'use client'

import { Card, Button, Table, Input } from '@/components/ui-primitives'
import { Plus, Search, TrendingUp } from 'lucide-react'
import { useState } from 'react'

const plans = [
  { id: 'PLAN-001', name: 'Plan Semanal Q1', period: '15-21 Ene 2024', status: 'Activo', efficiency: '92%' },
  { id: 'PLAN-002', name: 'Plan Mensual Enero', period: '1-31 Ene 2024', status: 'Activo', efficiency: '88%' },
  { id: 'PLAN-003', name: 'Plan Febrero', period: '1-28 Feb 2024', status: 'Pendiente', efficiency: '-' },
]

const tableRows = plans.map(plan => [
  plan.id,
  plan.name,
  plan.period,
  plan.status,
  plan.efficiency,
])

export default function ProductionPlanningPage() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Planificación de Producción</h1>
            <p className="text-muted-foreground mt-1">Gestiona los planes de producción</p>
          </div>
          <Button variant="primary" size="lg" className="w-full sm:w-auto flex items-center justify-center gap-2">
            <Plus size={18} />
            Nuevo Plan
          </Button>
        </div>

        <Card>
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              placeholder="Buscar planes..."
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              className="flex-1 w-full"
            />
            <Button variant="outline" className="w-full sm:w-auto">Filtrar</Button>
          </div>
        </Card>

        <Card>
          <Table
            headers={['ID', 'Nombre', 'Período', 'Estado', 'Eficiencia']}
            rows={tableRows}
          />
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <p className="text-sm text-muted-foreground">Planes Activos</p>
            <p className="text-3xl font-bold text-foreground mt-2">{plans.filter(p => p.status === 'Activo').length}</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">Eficiencia Promedio</p>
            <p className="text-3xl font-bold text-foreground mt-2">90%</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">Planes Pendientes</p>
            <p className="text-3xl font-bold text-foreground mt-2">{plans.filter(p => p.status === 'Pendiente').length}</p>
          </Card>
        </div>
      </div>
    </div>
  )
}
