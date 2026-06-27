'use client'

import { Card, Button, Badge, Table } from '@/components/ui-primitives'
import { Plus, FolderOpen, Calendar } from 'lucide-react'
import { useState } from 'react'

const statusMap: { [key: string]: string } = {
  'In Progress': 'En Progreso',
  'Completed': 'Completada',
  'Planning': 'Planificación'
}

const projects = [
  { id: 'PRJ-001', name: 'Rediseño de Sitio Web', client: 'Tech Solutions Inc.', status: 'In Progress', progress: 65, startDate: '15 Ene 2024', dueDate: '30 Abr 2024', budget: '$45,000', spent: '$28,500' },
  { id: 'PRJ-002', name: 'Desarrollo de Aplicación Móvil', client: 'Global Industries', status: 'In Progress', progress: 45, startDate: '1 Feb 2024', dueDate: '30 Jun 2024', budget: '$78,000', spent: '$35,000' },
  { id: 'PRJ-003', name: 'Integración de API', client: 'StartUp Labs', status: 'Completed', progress: 100, startDate: '5 Ene 2024', dueDate: '28 Feb 2024', budget: '$12,500', spent: '$12,500' },
  { id: 'PRJ-004', name: 'Migración a la Nube', client: 'Fortune 500 Co.', status: 'Planning', progress: 15, startDate: '1 Mar 2024', dueDate: '31 Ago 2024', budget: '$125,000', spent: '$8,000' },
  { id: 'PRJ-005', name: 'Desarrollo de Dashboard', client: 'Innovation Hub', status: 'In Progress', progress: 85, startDate: '15 Feb 2024', dueDate: '15 Abr 2024', budget: '$35,000', spent: '$29,750' },
]

const tableRows = projects.map(proj => [
  proj.id,
  proj.name,
  proj.client,
  <div key={proj.id} className="flex items-center gap-2">
    <div className="flex-1 bg-muted rounded-full h-2 w-16">
      <div className="bg-accent h-2 rounded-full" style={{ width: `${proj.progress}%` }}></div>
    </div>
    <span className="text-xs font-semibold">{proj.progress}%</span>
  </div>,
  <Badge key={proj.id} variant={proj.status === 'Completed' ? 'success' : proj.status === 'In Progress' ? 'default' : 'warning'}>
    {statusMap[proj.status] || proj.status}
  </Badge>,
  proj.dueDate,
])

export default function ProjectsPage() {
  const [viewMode, setViewMode] = useState<'table' | 'cards'>('table')

  const totalBudget = projects.reduce((sum, p) => sum + parseInt(p.budget.replace('$', '').replace(',', '')), 0)
  const totalSpent = projects.reduce((sum, p) => sum + parseInt(p.spent.replace('$', '').replace(',', '')), 0)

  return (
    <div>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Proyectos</h1>
            <p className="text-muted-foreground mt-1">Gestiona proyectos activos y completados</p>
          </div>
          <Button variant="primary" size="lg" className="w-full sm:w-auto flex items-center justify-center gap-2">
            <Plus size={18} />
            Nuevo Proyecto
          </Button>
        </div>

        {/* Project Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <p className="text-sm text-muted-foreground">Total de Proyectos</p>
            <p className="text-3xl font-bold text-foreground mt-2">{projects.length}</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">En Progreso</p>
            <p className="text-3xl font-bold text-foreground mt-2">{projects.filter(p => p.status === 'In Progress').length}</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">Presupuesto Total</p>
            <p className="text-2xl font-bold text-foreground mt-2">${(totalBudget / 1000).toFixed(0)}K</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">Presupuesto Gastado</p>
            <p className="text-2xl font-bold text-accent mt-2">${(totalSpent / 1000).toFixed(0)}K</p>
          </Card>
        </div>

        {/* View Mode Toggle */}
        <Card>
          <div className="flex gap-3">
            <Button 
              variant={viewMode === 'table' ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setViewMode('table')}
            >
              Table View
            </Button>
            <Button 
              variant={viewMode === 'cards' ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setViewMode('cards')}
            >
              Card View
            </Button>
          </div>
        </Card>

        {/* Projects Table */}
        {viewMode === 'table' && (
          <Card>
            <Table
              headers={['Project ID', 'Project Name', 'Client', 'Progress', 'Status', 'Due Date']}
              rows={tableRows}
            />
          </Card>
        )}

        {/* Projects Cards */}
        {viewMode === 'cards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(proj => (
              <Card key={proj.id}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="font-semibold text-foreground">{proj.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">{proj.client}</p>
                  </div>
                  <Badge variant={proj.status === 'Completed' ? 'success' : 'default'}>
                    {proj.status}
                  </Badge>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-xs font-medium text-muted-foreground">Progress</span>
                      <span className="text-xs font-bold text-foreground">{proj.progress}%</span>
                    </div>
                    <div className="bg-muted rounded-full h-2">
                      <div className="bg-accent h-2 rounded-full" style={{ width: `${proj.progress}%` }}></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Calendar size={14} />
                      {proj.dueDate}
                    </span>
                  </div>

                  <div className="pt-3 border-t border-border">
                    <div className="flex justify-between text-xs mb-2">
                      <span className="text-muted-foreground">Budget</span>
                      <span className="font-semibold text-foreground">{proj.budget}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Spent</span>
                      <span className="font-semibold text-accent">{proj.spent}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
