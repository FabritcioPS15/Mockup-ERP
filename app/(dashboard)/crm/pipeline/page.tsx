'use client'

import { Card, Button, Badge } from '@/components/ui-primitives'
import { Plus, DollarSign } from 'lucide-react'

const pipeline = [
  {
    stage: 'Prospecto',
    deals: [
      { id: 1, name: 'ABC Corporation', value: '$45,000', contact: 'Juan García' },
      { id: 2, name: 'XYZ Ltd', value: '$28,500', contact: 'Jane Smith' },
      { id: 3, name: 'Tech Innovations', value: '$52,000', contact: 'Carlos Ruiz' },
    ]
  },
  {
    stage: 'Propuesta',
    deals: [
      { id: 4, name: 'Global Systems', value: '$78,000', contact: 'María López' },
      { id: 5, name: 'Enterprise Solutions', value: '$95,000', contact: 'David Brown' },
    ]
  },
  {
    stage: 'Negociación',
    deals: [
      { id: 6, name: 'Fortune Tech', value: '$125,000', contact: 'Emma Martínez' },
      { id: 7, name: 'Digital Ventures', value: '$67,500', contact: 'Michael Chen' },
    ]
  },
  {
    stage: 'Cerrado - Ganado',
    deals: [
      { id: 8, name: 'Success Corp', value: '$55,000', contact: 'Laura Sánchez' },
      { id: 9, name: 'Profit Systems', value: '$42,000', contact: 'Robert Martínez' },
    ]
  },
]

function DealCard({ deal }: { deal: { id: number; name: string; value: string; contact: string } }) {
  return (
    <Card className="cursor-move hover:shadow-md transition-shadow">
      <p className="font-semibold text-foreground">{deal.name}</p>
      <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border">
        <DollarSign size={16} className="text-accent" />
        <span className="font-bold text-accent">{deal.value}</span>
      </div>
      <p className="text-xs text-muted-foreground mt-2">{deal.contact}</p>
    </Card>
  )
}

export default function PipelinePage() {
  const totalPipeline = pipeline.reduce((sum, stage) => {
    const stageTotal = stage.deals.reduce((s, deal) => {
      const value = parseInt(deal.value.replace('$', '').replace(',', ''))
      return s + value
    }, 0)
    return sum + stageTotal
  }, 0)

  return (
    <div>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Pipeline de Ventas</h1>
            <p className="text-muted-foreground mt-1">Rastrear negocios a través de tu ciclo de ventas</p>
          </div>
          <Button variant="primary" size="lg" className="w-full sm:w-auto flex items-center justify-center gap-2">
            <Plus size={18} />
            Agregar Negocio
          </Button>
        </div>

        {/* Pipeline Summary */}
        <Card>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-sm text-muted-foreground">Valor Total del Pipeline</p>
              <p className="text-4xl font-bold text-foreground mt-2">${(totalPipeline / 1000000).toFixed(2)}M</p>
            </div>
            <div className="text-left sm:text-right">
              <p className="text-sm text-muted-foreground">{pipeline.reduce((sum, s) => sum + s.deals.length, 0)} Negocios Totales</p>
              <div className="mt-4 space-y-1">
                {pipeline.map(stage => (
                  <p key={stage.stage} className="text-sm text-foreground">{stage.stage}: {stage.deals.length} negocios</p>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Kanban Board */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pipeline.map(stage => (
            <div key={stage.stage} className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-foreground">{stage.stage}</h3>
                <Badge variant="default">{stage.deals.length}</Badge>
              </div>
              <div className="space-y-3">
                {stage.deals.map(deal => (
                  <DealCard key={deal.id} deal={deal} />
                ))}
              </div>
              <button className="w-full py-3 border-2 border-dashed border-border rounded-lg text-muted-foreground hover:border-primary hover:text-primary transition-colors text-sm font-medium">
                + Agregar Negocio
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
