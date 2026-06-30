'use client'

import { Card, Button, Badge, Table, Input } from '@/components/ui-primitives'
import { Plus, Search, Award } from 'lucide-react'
import { useState } from 'react'

const certificates = [
  { id: 'CERT-001', name: 'ISO 9001', type: 'Calidad', expiry: '31 Dic 2024', status: 'Vigente' },
  { id: 'CERT-002', name: 'ISO 14001', type: 'Ambiental', expiry: '15 Jun 2024', status: 'Vigente' },
  { id: 'CERT-003', name: 'OHSAS 18001', type: 'Seguridad', expiry: '20 Ene 2024', status: 'Por Vencer' },
]

const tableRows = certificates.map(cert => [
  cert.id,
  cert.name,
  cert.type,
  cert.expiry,
  <Badge key={cert.id} variant={cert.status === 'Vigente' ? 'success' : 'warning'}>
    {cert.status}
  </Badge>,
])

export default function CertificatesPage() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Certificados de Calidad</h1>
            <p className="text-muted-foreground mt-1">Gestiona los certificados de calidad</p>
          </div>
          <Button variant="primary" size="lg" className="w-full sm:w-auto flex items-center justify-center gap-2">
            <Plus size={18} />
            Nuevo Certificado
          </Button>
        </div>

        <Card>
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              placeholder="Buscar certificados..."
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              className="flex-1 w-full"
            />
            <Button variant="outline" className="w-full sm:w-auto">Filtrar</Button>
          </div>
        </Card>

        <Card>
          <Table
            headers={['ID', 'Nombre', 'Tipo', 'Vencimiento', 'Estado']}
            rows={tableRows}
          />
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <p className="text-sm text-muted-foreground">Total Certificados</p>
            <p className="text-3xl font-bold text-foreground mt-2">{certificates.length}</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">Vigentes</p>
            <p className="text-3xl font-bold text-foreground mt-2">{certificates.filter(c => c.status === 'Vigente').length}</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">Por Vencer</p>
            <p className="text-3xl font-bold text-foreground mt-2">{certificates.filter(c => c.status === 'Por Vencer').length}</p>
          </Card>
        </div>
      </div>
    </div>
  )
}
