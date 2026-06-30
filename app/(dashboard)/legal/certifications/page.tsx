'use client'

import { Card, Button, Badge, Table, Input } from '@/components/ui-primitives'
import { Plus, Search, Award } from 'lucide-react'
import { useState } from 'react'

const certifications = [
  { id: 'CERT-001', name: 'Certificado de Calidad', issuer: 'ISO', expiry: '31 Dic 2024', status: 'Vigente' },
  { id: 'CERT-002', name: 'Certificado Ambiental', issuer: 'Ministerio Ambiente', expiry: '15 Jun 2024', status: 'Vigente' },
  { id: 'CERT-003', name: 'Certificado de Seguridad', issuer: 'OHS', expiry: '20 Ene 2024', status: 'Por Vencer' },
]

const tableRows = certifications.map(cert => [
  cert.id,
  cert.name,
  cert.issuer,
  cert.expiry,
  <Badge key={cert.id} variant={cert.status === 'Vigente' ? 'success' : 'warning'}>
    {cert.status}
  </Badge>,
])

export default function LegalCertificationsPage() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Certificaciones Legales</h1>
            <p className="text-muted-foreground mt-1">Gestiona las certificaciones legales</p>
          </div>
          <Button variant="primary" size="lg" className="w-full sm:w-auto flex items-center justify-center gap-2">
            <Plus size={18} />
            Nueva Certificación
          </Button>
        </div>

        <Card>
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              placeholder="Buscar certificaciones..."
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              className="flex-1 w-full"
            />
            <Button variant="outline" className="w-full sm:w-auto">Filtrar</Button>
          </div>
        </Card>

        <Card>
          <Table
            headers={['ID', 'Nombre', 'Emisor', 'Vencimiento', 'Estado']}
            rows={tableRows}
          />
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <p className="text-sm text-muted-foreground">Total Certificaciones</p>
            <p className="text-3xl font-bold text-foreground mt-2">{certifications.length}</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">Vigentes</p>
            <p className="text-3xl font-bold text-foreground mt-2">{certifications.filter(c => c.status === 'Vigente').length}</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">Por Vencer</p>
            <p className="text-3xl font-bold text-foreground mt-2">{certifications.filter(c => c.status === 'Por Vencer').length}</p>
          </Card>
        </div>
      </div>
    </div>
  )
}
