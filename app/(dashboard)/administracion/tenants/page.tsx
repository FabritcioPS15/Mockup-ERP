'use client'

import { Card, Button, Badge, Table, Input } from '@/components/ui-primitives'
import { Plus, Search, Building, Database } from 'lucide-react'
import { useState } from 'react'

const tenants = [
  { id: 'TEN-001', name: 'Empresa A', domain: 'empresa-a.krea-terra.com', plan: 'Enterprise', users: 50, status: 'Activo', createdAt: '15 Ene 2024' },
  { id: 'TEN-002', name: 'Empresa B', domain: 'empresa-b.krea-terra.com', plan: 'Professional', users: 25, status: 'Activo', createdAt: '18 Ene 2024' },
  { id: 'TEN-003', name: 'Empresa C', domain: 'empresa-c.krea-terra.com', plan: 'Starter', users: 10, status: 'Suspendido', createdAt: '20 Ene 2024' },
  { id: 'TEN-004', name: 'Empresa D', domain: 'empresa-d.krea-terra.com', plan: 'Enterprise', users: 100, status: 'Activo', createdAt: '22 Ene 2024' },
]

const tableRows = tenants.map(tenant => [
  tenant.id,
  tenant.name,
  tenant.domain,
  tenant.plan,
  tenant.users,
  <Badge key={tenant.id} variant={tenant.status === 'Activo' ? 'success' : 'warning'}>
    {tenant.status}
  </Badge>,
  tenant.createdAt,
])

export default function TenantsPage() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Tenants</h1>
            <p className="text-muted-foreground mt-1">Gestiona los tenants del sistema multitenant</p>
          </div>
          <Button variant="primary" size="lg" className="w-full sm:w-auto flex items-center justify-center gap-2">
            <Plus size={18} />
            Nuevo Tenant
          </Button>
        </div>

        <Card>
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              placeholder="Buscar tenants..."
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              className="flex-1 w-full"
            />
            <Button variant="outline" className="w-full sm:w-auto">Filtrar</Button>
          </div>
        </Card>

        <Card>
          <Table
            headers={['ID', 'Nombre', 'Dominio', 'Plan', 'Usuarios', 'Estado', 'Creado']}
            rows={tableRows}
          />
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <p className="text-sm text-muted-foreground">Total Tenants</p>
            <p className="text-3xl font-bold text-foreground mt-2">{tenants.length}</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">Activos</p>
            <p className="text-3xl font-bold text-foreground mt-2">{tenants.filter(t => t.status === 'Activo').length}</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">Total Usuarios</p>
            <p className="text-3xl font-bold text-foreground mt-2">{tenants.reduce((sum, t) => sum + t.users, 0)}</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">Enterprise</p>
            <p className="text-3xl font-bold text-foreground mt-2">{tenants.filter(t => t.plan === 'Enterprise').length}</p>
          </Card>
        </div>
      </div>
    </div>
  )
}
