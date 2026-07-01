'use client'

import { Card, Button, Badge, Table } from '@/components/ui-primitives'
import { Plus, Building2, Settings, MoreVertical, Edit, Trash2 } from 'lucide-react'
import { useCompany } from '@/components/company-provider'
import { useState } from 'react'

function getPlanBadge(plan: string) {
  const variants: { [key: string]: 'success' | 'warning' | 'default' } = {
    'basic': 'default',
    'professional': 'warning',
    'enterprise': 'success'
  }
  const labels: { [key: string]: string } = {
    'basic': 'Básico',
    'professional': 'Profesional',
    'enterprise': 'Empresarial'
  }
  return (
    <Badge variant={variants[plan] || 'default'}>
      {labels[plan] || plan}
    </Badge>
  )
}

function getStatusBadge(status: string) {
  const variants: { [key: string]: 'success' | 'warning' | 'danger' } = {
    'active': 'success',
    'trial': 'warning',
    'suspended': 'danger'
  }
  const labels: { [key: string]: string } = {
    'active': 'Activo',
    'trial': 'Prueba',
    'suspended': 'Suspendido'
  }
  return (
    <Badge variant={variants[status] || 'default'}>
      {labels[status] || status}
    </Badge>
  )
}

export default function EmpresasPage() {
  const { companies, currentCompany, switchCompany } = useCompany()
  const [showNewModal, setShowNewModal] = useState(false)

  const tableRows = companies.map(company => [
    <div key={`${company.id}-name`} className="flex items-center gap-3">
      <div className="w-10 h-10 bg-gradient-to-br from-accent to-secondary rounded-lg flex items-center justify-center text-white text-sm font-bold">
        {company.name.substring(0, 2).toUpperCase()}
      </div>
      <div>
        <p className="font-medium text-foreground">{company.name}</p>
        <p className="text-sm text-muted-foreground">{company.ruc}</p>
      </div>
    </div>,
    getPlanBadge(company.plan),
    getStatusBadge(company.status),
    <div key={`${company.id}-actions`} className="flex items-center gap-2">
      {currentCompany?.id !== company.id && (
        <Button
          variant="outline"
          size="sm"
          onClick={() => switchCompany(company.id)}
        >
          Seleccionar
        </Button>
      )}
      {currentCompany?.id === company.id && (
        <Badge variant="success">Actual</Badge>
      )}
      <Button variant="ghost" size="sm">
        <Settings size={16} />
      </Button>
    </div>,
  ])

  return (
    <div>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Mis Empresas</h1>
            <p className="text-muted-foreground mt-1">Gestiona tus empresas desde un solo lugar</p>
          </div>
          <Button variant="primary" size="lg" className="w-full sm:w-auto flex items-center justify-center gap-2">
            <Plus size={18} />
            Agregar Empresa
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <p className="text-sm text-muted-foreground">Total Empresas</p>
            <p className="text-3xl font-bold text-foreground mt-2">{companies.length}</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">Activas</p>
            <p className="text-3xl font-bold text-foreground mt-2">{companies.filter(c => c.status === 'active').length}</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">En Prueba</p>
            <p className="text-3xl font-bold text-foreground mt-2">{companies.filter(c => c.status === 'trial').length}</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">Plan Empresarial</p>
            <p className="text-3xl font-bold text-foreground mt-2">{companies.filter(c => c.plan === 'enterprise').length}</p>
          </Card>
        </div>

        {/* Current Company Highlight */}
        {currentCompany && (
          <Card className="bg-gradient-to-r from-accent/10 to-secondary/10 border-accent/20">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  {currentCompany.name.substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h2 className="text-xl font-bold text-foreground">{currentCompany.name}</h2>
                    <Badge variant="success">Activo</Badge>
                  </div>
                  <p className="text-muted-foreground mb-2">RUC: {currentCompany.ruc}</p>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-muted-foreground">Plan: <span className="font-medium text-foreground capitalize">{currentCompany.plan}</span></span>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <Settings size={16} />
                Configurar
              </Button>
            </div>
          </Card>
        )}

        {/* Companies Table */}
        <Card>
          <Table
            headers={['Empresa', 'Plan', 'Estado', 'Acciones']}
            rows={tableRows}
          />
        </Card>

        {/* Info Section */}
        <Card>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
              <Building2 size={24} className="text-accent" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-2">Gestión Multiempresa</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Con el plan multiempresa puedes gestionar múltiples empresas desde una sola cuenta. 
                Cada empresa tiene sus propios datos, configuraciones y usuarios independientes.
              </p>
              <div className="flex gap-3">
                <Button variant="outline" size="sm">
                  Ver Documentación
                </Button>
                <Button variant="ghost" size="sm">
                  Contactar Soporte
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
