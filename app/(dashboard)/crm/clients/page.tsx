'use client'

import { Card, Button, Badge, Table, Input } from '@/components/ui-primitives'
import { Plus, Search, MoreVertical } from 'lucide-react'
import { useState } from 'react'

const clients = [
  { id: 1, name: 'Tech Solutions Inc.', contact: 'Juan García', email: 'juan@techsol.com', phone: '+34 91 123-4567', status: 'Active', joinDate: '15 Ene 2024' },
  { id: 2, name: 'Global Industries', contact: 'María López', email: 'maria@global.com', phone: '+34 93 234-5678', status: 'Active', joinDate: '3 Feb 2024' },
  { id: 3, name: 'StartUp Labs', contact: 'Carlos Ruiz', email: 'carlos@startup.com', phone: '+34 88 345-6789', status: 'Pendiente', joinDate: '20 Feb 2024' },
  { id: 4, name: 'Fortune 500 Co.', contact: 'Emma Martínez', email: 'emma@fortune.com', phone: '+34 91 456-7890', status: 'Active', joinDate: '5 Ene 2024' },
  { id: 5, name: 'Innovation Hub', contact: 'David Fernández', email: 'david@innovation.com', phone: '+34 93 567-8901', status: 'Inactivo', joinDate: '10 Dic 2023' },
  { id: 6, name: 'Digital Solutions', contact: 'Laura Sánchez', email: 'laura@digital.com', phone: '+34 91 678-9012', status: 'Active', joinDate: '15 Feb 2024' },
]

const statusMap: { [key: string]: string } = {
  'Active': 'Activo',
  'Pending': 'Pendiente',
  'Inactive': 'Inactivo'
}

const tableRows = clients.map(client => [
  client.name,
  client.contact,
  client.email,
  client.phone,
  <Badge key={client.id} variant={client.status === 'Active' ? 'success' : client.status === 'Pendiente' ? 'warning' : 'danger'}>
    {statusMap[client.status] || client.status}
  </Badge>,
  client.joinDate,
])

export default function ClientsPage() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Clientes</h1>
            <p className="text-muted-foreground mt-1">Gestiona tus relaciones con clientes</p>
          </div>
          <Button variant="primary" size="lg" className="w-full sm:w-auto flex items-center justify-center gap-2">
            <Plus size={18} />
            Agregar Cliente
          </Button>
        </div>

        {/* Search and Filters */}
        <Card>
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              placeholder="Buscar clientes..."
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              className="flex-1 w-full"
            />
            <Button variant="outline" className="w-full sm:w-auto">Filtrar</Button>
          </div>
        </Card>

        {/* Clients Table */}
        <Card>
          <Table
            headers={['Nombre de Empresa', 'Contacto', 'Email', 'Teléfono', 'Estado', 'Fecha de Unión']}
            rows={tableRows}
          />
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <p className="text-sm text-muted-foreground">Total de Clientes</p>
            <p className="text-3xl font-bold text-foreground mt-2">{clients.length}</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">Clientes Activos</p>
            <p className="text-3xl font-bold text-foreground mt-2">{clients.filter(c => c.status === 'Active').length}</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">Esperando Aprobación</p>
            <p className="text-3xl font-bold text-foreground mt-2">{clients.filter(c => c.status === 'Pending').length}</p>
          </Card>
        </div>
      </div>
    </div>
  )
}
