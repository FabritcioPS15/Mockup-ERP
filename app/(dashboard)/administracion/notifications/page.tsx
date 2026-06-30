'use client'

import { Card, Button, Badge, Table, Input } from '@/components/ui-primitives'
import { Plus, Search, Bell, Send } from 'lucide-react'
import { useState } from 'react'

const notifications = [
  { id: 'NOT-001', title: 'Mantenimiento Programado', type: 'Sistema', target: 'Todos', status: 'Enviado', sentAt: '30 Ene 2024 10:00' },
  { id: 'NOT-002', title: 'Nuevo Feature Disponible', type: 'Feature', target: 'Enterprise', status: 'Enviado', sentAt: '29 Ene 2024 15:30' },
  { id: 'NOT-003', title: 'Actualización de Seguridad', type: 'Seguridad', target: 'Todos', status: 'Programado', sentAt: '31 Ene 2024 09:00' },
  { id: 'NOT-004', title: 'Recordatorio de Renovación', type: 'Billing', target: 'Starter', status: 'Pendiente', sentAt: '-' },
]

const tableRows = notifications.map(notif => [
  notif.id,
  notif.title,
  notif.type,
  notif.target,
  <Badge key={notif.id} variant={notif.status === 'Enviado' ? 'success' : notif.status === 'Programado' ? 'warning' : 'default'}>
    {notif.status}
  </Badge>,
  notif.sentAt,
])

export default function NotificationsPage() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Notificaciones</h1>
            <p className="text-muted-foreground mt-1">Gestiona las notificaciones del sistema</p>
          </div>
          <Button variant="primary" size="lg" className="w-full sm:w-auto flex items-center justify-center gap-2">
            <Plus size={18} />
            Nueva Notificación
          </Button>
        </div>

        <Card>
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              placeholder="Buscar notificaciones..."
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              className="flex-1 w-full"
            />
            <Button variant="outline" className="w-full sm:w-auto">Filtrar</Button>
          </div>
        </Card>

        <Card>
          <Table
            headers={['ID', 'Título', 'Tipo', 'Destino', 'Estado', 'Enviado']}
            rows={tableRows}
          />
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <p className="text-sm text-muted-foreground">Total Notificaciones</p>
            <p className="text-3xl font-bold text-foreground mt-2">{notifications.length}</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">Enviadas</p>
            <p className="text-3xl font-bold text-foreground mt-2">{notifications.filter(n => n.status === 'Enviado').length}</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">Programadas</p>
            <p className="text-3xl font-bold text-foreground mt-2">{notifications.filter(n => n.status === 'Programado').length}</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">Pendientes</p>
            <p className="text-3xl font-bold text-foreground mt-2">{notifications.filter(n => n.status === 'Pendiente').length}</p>
          </Card>
        </div>
      </div>
    </div>
  )
}
