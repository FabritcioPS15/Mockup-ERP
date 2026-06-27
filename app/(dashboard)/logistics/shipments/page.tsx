import { Card, Stat } from '@/components/ui-primitives'

export default function ShipmentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Envíos</h1>
        <p className="text-muted-foreground">Gestión y control de envíos.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <Stat label="Total Envíos" value="156" />
        <Stat label="En Tránsito" value="42" />
        <Stat label="Entregados" value="114" />
      </div>
      <Card>
        <p className="text-sm text-muted-foreground">Listado de envíos en desarrollo.</p>
      </Card>
    </div>
  )
}
