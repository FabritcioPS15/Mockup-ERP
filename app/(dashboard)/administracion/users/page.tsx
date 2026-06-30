'use client'

import { Card, Button, Badge, Table, Input } from '@/components/ui-primitives'
import { Plus, Search, UserCog, Building } from 'lucide-react'
import { useState } from 'react'

const users = [
  { id: 'USR-001', name: 'Juan Pérez', email: 'juan@empresa-a.com', role: 'Admin', tenant: 'Empresa A', status: 'Activo', lastLogin: '30 Ene 2024' },
  { id: 'USR-002', name: 'María López', email: 'maria@empresa-a.com', role: 'Usuario', tenant: 'Empresa A', status: 'Activo', lastLogin: '29 Ene 2024' },
  { id: 'USR-003', name: 'Carlos Ruiz', email: 'carlos@empresa-b.com', role: 'Manager', tenant: 'Empresa B', status: 'Inactivo', lastLogin: '15 Ene 2024' },
  { id: 'USR-004', name: 'Ana García', email: 'ana@empresa-c.com', role: 'Usuario', tenant: 'Empresa C', status: 'Activo', lastLogin: '28 Ene 2024' },
]

const tableRows = users.map(user => [
  user.id,
  user.name,
  user.email,
  user.role,
  user.tenant,
  <Badge key={user.id} variant={user.status === 'Activo' ? 'success' : 'warning'}>
    {user.status}
  </Badge>,
  user.lastLogin,
])

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Usuarios</h1>
            <p className="text-muted-foreground mt-1">Gestiona los usuarios del sistema</p>
          </div>
          <Button variant="primary" size="lg" className="w-full sm:w-auto flex items-center justify-center gap-2">
            <Plus size={18} />
            Nuevo Usuario
          </Button>
        </div>

        <Card>
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              placeholder="Buscar usuarios..."
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              className="flex-1 w-full"
            />
            <Button variant="outline" className="w-full sm:w-auto">Filtrar</Button>
          </div>
        </Card>

        <Card>
          <Table
            headers={['ID', 'Nombre', 'Email', 'Rol', 'Tenant', 'Estado', 'Último Acceso']}
            rows={tableRows}
          />
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <p className="text-sm text-muted-foreground">Total Usuarios</p>
            <p className="text-3xl font-bold text-foreground mt-2">{users.length}</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">Activos</p>
            <p className="text-3xl font-bold text-foreground mt-2">{users.filter(u => u.status === 'Activo').length}</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">Administradores</p>
            <p className="text-3xl font-bold text-foreground mt-2">{users.filter(u => u.role === 'Admin').length}</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">Tenants</p>
            <p className="text-3xl font-bold text-foreground mt-2">{[...new Set(users.map(u => u.tenant))].length}</p>
          </Card>
        </div>
      </div>
    </div>
  )
}
