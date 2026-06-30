'use client'

import { Card, Button, Badge, Table, Input } from '@/components/ui-primitives'
import { Plus, Search, Factory } from 'lucide-react'
import { useState } from 'react'

const orders = [
  { id: 'ORD-001', product: 'Producto A', quantity: 500, status: 'En Progreso', priority: 'Alta', startDate: '15 Ene 2024', endDate: '20 Ene 2024' },
  { id: 'ORD-002', product: 'Producto B', quantity: 300, status: 'Pendiente', priority: 'Media', startDate: '18 Ene 2024', endDate: '25 Ene 2024' },
  { id: 'ORD-003', product: 'Producto C', quantity: 1000, status: 'Completada', priority: 'Baja', startDate: '10 Ene 2024', endDate: '15 Ene 2024' },
  { id: 'ORD-004', product: 'Producto D', quantity: 200, status: 'En Progreso', priority: 'Alta', startDate: '20 Ene 2024', endDate: '22 Ene 2024' },
]

const statusMap: { [key: string]: string } = {
  'En Progreso': 'En Progreso',
  'Pendiente': 'Pendiente',
  'Completada': 'Completada'
}

const tableRows = orders.map(order => [
  order.id,
  order.product,
  order.quantity,
  <Badge key={order.id} variant={order.status === 'Completada' ? 'success' : order.status === 'En Progreso' ? 'warning' : 'default'}>
    {statusMap[order.status] || order.status}
  </Badge>,
  <Badge key={order.id + '-prio'} variant={order.priority === 'Alta' ? 'danger' : order.priority === 'Media' ? 'warning' : 'success'}>
    {order.priority}
  </Badge>,
  order.startDate,
  order.endDate,
])

export default function ProductionOrdersPage() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Órdenes de Producción</h1>
            <p className="text-muted-foreground mt-1">Gestiona las órdenes de producción</p>
          </div>
          <Button variant="primary" size="lg" className="w-full sm:w-auto flex items-center justify-center gap-2">
            <Plus size={18} />
            Nueva Orden
          </Button>
        </div>

        <Card>
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              placeholder="Buscar órdenes..."
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              className="flex-1 w-full"
            />
            <Button variant="outline" className="w-full sm:w-auto">Filtrar</Button>
          </div>
        </Card>

        <Card>
          <Table
            headers={['ID', 'Producto', 'Cantidad', 'Estado', 'Prioridad', 'Inicio', 'Fin']}
            rows={tableRows}
          />
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <p className="text-sm text-muted-foreground">Total Órdenes</p>
            <p className="text-3xl font-bold text-foreground mt-2">{orders.length}</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">En Progreso</p>
            <p className="text-3xl font-bold text-foreground mt-2">{orders.filter(o => o.status === 'En Progreso').length}</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">Completadas</p>
            <p className="text-3xl font-bold text-foreground mt-2">{orders.filter(o => o.status === 'Completada').length}</p>
          </Card>
        </div>
      </div>
    </div>
  )
}
