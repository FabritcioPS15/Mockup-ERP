'use client'

import { Card, Button, Table, Input } from '@/components/ui-primitives'
import { Plus, Search, FolderOpen } from 'lucide-react'
import { useState } from 'react'

const documents = [
  { id: 'DOC-001', name: 'Política de Privacidad', type: 'PDF', size: '2.5 MB', uploadDate: '15 Ene 2024', category: 'Privacidad' },
  { id: 'DOC-002', name: 'Manual de Empleado', type: 'PDF', size: '5.1 MB', uploadDate: '18 Ene 2024', category: 'RRHH' },
  { id: 'DOC-003', name: 'Contrato Marco', type: 'DOCX', size: '1.2 MB', uploadDate: '20 Ene 2024', category: 'Legal' },
]

const tableRows = documents.map(doc => [
  doc.id,
  doc.name,
  doc.type,
  doc.size,
  doc.uploadDate,
  doc.category,
])

export default function DocumentsPage() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Documentos Legales</h1>
            <p className="text-muted-foreground mt-1">Gestiona los documentos legales</p>
          </div>
          <Button variant="primary" size="lg" className="w-full sm:w-auto flex items-center justify-center gap-2">
            <Plus size={18} />
            Subir Documento
          </Button>
        </div>

        <Card>
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              placeholder="Buscar documentos..."
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              className="flex-1 w-full"
            />
            <Button variant="outline" className="w-full sm:w-auto">Filtrar</Button>
          </div>
        </Card>

        <Card>
          <Table
            headers={['ID', 'Nombre', 'Tipo', 'Tamaño', 'Fecha Subida', 'Categoría']}
            rows={tableRows}
          />
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <p className="text-sm text-muted-foreground">Total Documentos</p>
            <p className="text-3xl font-bold text-foreground mt-2">{documents.length}</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">Tamaño Total</p>
            <p className="text-3xl font-bold text-foreground mt-2">8.8 MB</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">Categorías</p>
            <p className="text-3xl font-bold text-foreground mt-2">{[...new Set(documents.map(d => d.category))].length}</p>
          </Card>
        </div>
      </div>
    </div>
  )
}
