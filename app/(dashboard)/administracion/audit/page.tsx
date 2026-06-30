'use client'

import { Card, Button, Badge, Table, Input } from '@/components/ui-primitives'
import { Search, History, User, Database } from 'lucide-react'
import { useState } from 'react'

const auditLogs = [
  { id: 'AUD-001', action: 'Usuario Creado', entity: 'USR-005', user: 'Juan Pérez', tenant: 'Empresa A', timestamp: '30 Ene 2024 14:30', ip: '192.168.1.100' },
  { id: 'AUD-002', action: 'Tenant Actualizado', entity: 'TEN-001', user: 'María López', tenant: 'Empresa A', timestamp: '30 Ene 2024 14:25', ip: '192.168.1.101' },
  { id: 'AUD-003', action: 'Rol Modificado', entity: 'ROL-003', user: 'Carlos Ruiz', tenant: 'Empresa B', timestamp: '30 Ene 2024 14:20', ip: '192.168.1.102' },
  { id: 'AUD-004', action: 'Login Exitoso', entity: 'USR-001', user: 'Juan Pérez', tenant: 'Empresa A', timestamp: '30 Ene 2024 14:15', ip: '192.168.1.100' },
  { id: 'AUD-005', action: 'Permiso Revocado', entity: 'ROL-002', user: 'Ana García', tenant: 'Empresa C', timestamp: '30 Ene 2024 14:10', ip: '192.168.1.103' },
]

const tableRows = auditLogs.map(log => [
  log.id,
  log.action,
  log.entity,
  log.user,
  log.tenant,
  log.timestamp,
  log.ip,
])

export default function AuditPage() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Auditoría del Sistema</h1>
            <p className="text-muted-foreground mt-1">Registro de actividades del sistema</p>
          </div>
          <Button variant="outline" size="lg" className="w-full sm:w-auto flex items-center justify-center gap-2">
            <Database size={18} />
            Exportar Logs
          </Button>
        </div>

        <Card>
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              placeholder="Buscar en logs..."
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              className="flex-1 w-full"
            />
            <Button variant="outline" className="w-full sm:w-auto">Filtrar</Button>
          </div>
        </Card>

        <Card>
          <Table
            headers={['ID', 'Acción', 'Entidad', 'Usuario', 'Tenant', 'Timestamp', 'IP']}
            rows={tableRows}
          />
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <p className="text-sm text-muted-foreground">Total Logs</p>
            <p className="text-3xl font-bold text-foreground mt-2">{auditLogs.length}</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">Usuarios Activos</p>
            <p className="text-3xl font-bold text-foreground mt-2">{[...new Set(auditLogs.map(l => l.user))].length}</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">Tenants Activos</p>
            <p className="text-3xl font-bold text-foreground mt-2">{[...new Set(auditLogs.map(l => l.tenant))].length}</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">Última Actividad</p>
            <p className="text-3xl font-bold text-foreground mt-2">Hace 5 min</p>
          </Card>
        </div>
      </div>
    </div>
  )
}
