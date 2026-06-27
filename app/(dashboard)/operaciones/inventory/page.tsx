'use client'

import { Card, Button, Badge, Table, Input } from '@/components/ui-primitives'
import { Plus, AlertTriangle } from 'lucide-react'
import { useState } from 'react'

const statusMap: { [key: string]: string } = {
  'In Stock': 'En Stock',
  'Low Stock': 'Stock Bajo',
  'Critical': 'Crítico',
  'Out of Stock': 'Sin Stock'
}

const inventory = [
  { sku: 'SKU-001', name: 'Licencia Premium', quantity: 150, unit: 'pcs', price: '$299', status: 'In Stock', reorderLevel: 50 },
  { sku: 'SKU-002', name: 'Licencia Estándar', quantity: 45, unit: 'pcs', price: '$199', status: 'Low Stock', reorderLevel: 100 },
  { sku: 'SKU-003', name: 'Licencia Básica', quantity: 8, unit: 'pcs', price: '$99', status: 'Critical', reorderLevel: 50 },
  { sku: 'SKU-004', name: 'Paquete de Soporte', quantity: 200, unit: 'pcs', price: '$1,500', status: 'In Stock', reorderLevel: 25 },
  { sku: 'SKU-005', name: 'Módulo de Entrenamiento', quantity: 32, unit: 'pcs', price: '$2,500', status: 'In Stock', reorderLevel: 10 },
  { sku: 'SKU-006', name: 'Licencia API', quantity: 0, unit: 'pcs', price: '$4,999', status: 'Out of Stock', reorderLevel: 5 },
]

const tableRows = inventory.map(item => [
  item.sku,
  item.name,
  `${item.quantity} ${item.unit}`,
  item.price,
  <Badge key={item.sku} variant={item.status === 'In Stock' ? 'success' : item.status === 'Low Stock' ? 'warning' : 'danger'}>
    {statusMap[item.status] || item.status}
  </Badge>,
  item.reorderLevel,
])

export default function InventoryPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const lowStockItems = inventory.filter(item => item.quantity <= item.reorderLevel).length
  const outOfStockItems = inventory.filter(item => item.quantity === 0).length

  return (
    <div>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Inventario</h1>
            <p className="text-muted-foreground mt-1">Gestiona productos y niveles de stock</p>
          </div>
          <Button variant="primary" size="lg" className="w-full sm:w-auto flex items-center justify-center gap-2">
            <Plus size={18} />
            Agregar Artículo
          </Button>
        </div>

        {/* Alerts */}
        {(lowStockItems > 0 || outOfStockItems > 0) && (
          <Card className="bg-amber-50 dark:bg-amber-950 border-amber-200 dark:border-amber-900">
            <div className="flex gap-3">
              <AlertTriangle className="text-amber-600 dark:text-amber-400 flex-shrink-0" size={20} />
              <div>
                <h4 className="font-semibold text-amber-900 dark:text-amber-100">Alerta de Inventario</h4>
                <p className="text-sm text-amber-700 dark:text-amber-300 mt-1">
                  {lowStockItems} artículos con stock bajo, {outOfStockItems} sin stock
                </p>
                <Button variant="outline" size="sm" className="mt-3 text-amber-900 dark:text-amber-100">
                  Gestionar Niveles
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* Search and Filters */}
        <Card>
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              placeholder="Buscar inventario..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 w-full"
            />
            <Button variant="outline" className="w-full sm:w-auto">Filtrar</Button>
          </div>
        </Card>

        {/* Inventory Table */}
        <Card>
          <Table
            headers={['SKU', 'Nombre del Producto', 'Cantidad', 'Precio Unitario', 'Estado', 'Punto de Reorden']}
            rows={tableRows}
          />
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <p className="text-sm text-muted-foreground">Total de Artículos</p>
            <p className="text-3xl font-bold text-foreground mt-2">{inventory.length}</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">Cantidad Total</p>
            <p className="text-3xl font-bold text-foreground mt-2">{inventory.reduce((sum, item) => sum + item.quantity, 0)}</p>
          </Card>
          <Card className="bg-amber-50 dark:bg-amber-950 border-amber-200 dark:border-amber-900">
            <p className="text-sm text-amber-900 dark:text-amber-100">Stock Bajo</p>
            <p className="text-3xl font-bold text-amber-600 dark:text-amber-400 mt-2">{lowStockItems}</p>
          </Card>
          <Card className="bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-900">
            <p className="text-sm text-red-900 dark:text-red-100">Sin Stock</p>
            <p className="text-3xl font-bold text-red-600 dark:text-red-400 mt-2">{outOfStockItems}</p>
          </Card>
        </div>
      </div>
    </div>
  )
}
