'use client'

import { Card, Button, Badge, Table, Input } from '@/components/ui-primitives'
import { Plus, Search, Shield, Lock } from 'lucide-react'
import { useState } from 'react'

const roles = [
  { id: 'ROL-001', name: 'Super Admin', permissions: 45, users: 2, tenant: 'Global', description: 'Acceso total al sistema' },
  { id: 'ROL-002', name: 'Tenant Admin', permissions: 30, users: 5, tenant: 'Empresa A', description: 'Administración de tenant' },
  { id: 'ROL-003', name: 'Manager', permissions: 20, users: 10, tenant: 'Empresa A', description: 'Gestión de operaciones' },
  { id: 'ROL-004', name: 'Usuario', permissions: 10, users: 50, tenant: 'Empresa A', description: 'Acceso básico' },
  { id: 'ROL-005', name: 'Viewer', permissions: 5, users: 15, tenant: 'Empresa B', description: 'Solo lectura' },
]

const tableRows = roles.map(role => [
  role.id,
  role.name,
  role.permissions,
  role.users,
  role.tenant,
  role.description,
])

export default function RolesPage() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Roles y Permisos</h1>
            <p className="text-muted-foreground mt-1">Gestiona los roles y permisos del sistema</p>
          </div>
          <Button variant="primary" size="lg" className="w-full sm:w-auto flex items-center justify-center gap-2">
            <Plus size={18} />
            Nuevo Rol
          </Button>
        </div>

        <Card>
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              placeholder="Buscar roles..."
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              className="flex-1 w-full"
            />
            <Button variant="outline" className="w-full sm:w-auto">Filtrar</Button>
          </div>
        </Card>

        <Card>
          <Table
            headers={['ID', 'Nombre', 'Permisos', 'Usuarios', 'Tenant', 'Descripción']}
            rows={tableRows}
          />
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <p className="text-sm text-muted-foreground">Total Roles</p>
            <p className="text-3xl font-bold text-foreground mt-2">{roles.length}</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">Usuarios con Roles</p>
            <p className="text-3xl font-bold text-foreground mt-2">{roles.reduce((sum, r) => sum + r.users, 0)}</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">Permisos Promedio</p>
            <p className="text-3xl font-bold text-foreground mt-2">{Math.round(roles.reduce((sum, r) => sum + r.permissions, 0) / roles.length)}</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">Roles Globales</p>
            <p className="text-3xl font-bold text-foreground mt-2">{roles.filter(r => r.tenant === 'Global').length}</p>
          </Card>
        </div>
      </div>
    </div>
  )
}
