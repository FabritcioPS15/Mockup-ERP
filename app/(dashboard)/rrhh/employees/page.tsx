'use client'

import { Card, Button, Badge, Table, Input } from '@/components/ui-primitives'
import { Plus, Users } from 'lucide-react'
import { useState } from 'react'

const statusMap: { [key: string]: string } = {
  'Active': 'Activo',
  'On Leave': 'De Licencia'
}

const deptMap: { [key: string]: string } = {
  'Sales': 'Ventas',
  'Engineering': 'Ingeniería',
  'Finance': 'Finanzas',
  'Design': 'Diseño'
}

const employees = [
  { id: 1, name: 'Alice Johnson', position: 'Gerente de Ventas', department: 'Sales', email: 'alice@company.com', joinDate: '10 Ene 2023', status: 'Active' },
  { id: 2, name: 'Bob Smith', position: 'Desarrollador Senior', department: 'Engineering', email: 'bob@company.com', joinDate: '15 Mar 2022', status: 'Active' },
  { id: 3, name: 'Carol Williams', position: 'Gerente de Finanzas', department: 'Finance', email: 'carol@company.com', joinDate: '1 Jun 2021', status: 'Active' },
  { id: 4, name: 'David Brown', position: 'Ejecutivo de Cuenta', department: 'Sales', email: 'david@company.com', joinDate: '20 Feb 2024', status: 'Active' },
  { id: 5, name: 'Emma Davis', position: 'Diseñador UI/UX', department: 'Design', email: 'emma@company.com', joinDate: '5 Ago 2023', status: 'On Leave' },
  { id: 6, name: 'Frank Martinez', position: 'Ingeniero DevOps', department: 'Engineering', email: 'frank@company.com', joinDate: '12 Sep 2022', status: 'Active' },
]

const tableRows = employees.map(emp => [
  emp.name,
  emp.position,
  deptMap[emp.department] || emp.department,
  emp.email,
  emp.joinDate,
  <Badge key={emp.id} variant={emp.status === 'Active' ? 'success' : 'warning'}>
    {statusMap[emp.status] || emp.status}
  </Badge>,
])

export default function EmployeesPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const departments = [...new Set(employees.map(e => e.department))]

  return (
    <div>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Empleados</h1>
            <p className="text-muted-foreground mt-1">Gestiona los miembros de tu equipo</p>
          </div>
          <Button variant="primary" size="lg" className="w-full sm:w-auto flex items-center justify-center gap-2">
            <Plus size={18} />
            Agregar Empleado
          </Button>
        </div>

        {/* Search and Filters */}
        <Card>
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              placeholder="Buscar empleados..."
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              className="flex-1 w-full"
            />
            <Button variant="outline" className="w-full sm:w-auto">Filtrar por Departamento</Button>
          </div>
        </Card>

        {/* Employees Table */}
        <Card>
          <Table
            headers={['Nombre', 'Puesto', 'Departamento', 'Email', 'Fecha de Unión', 'Estado']}
            rows={tableRows}
          />
        </Card>

        {/* Department Overview */}
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-4">Resumen por Departamento</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map(dept => (
              <Card key={dept}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{deptMap[dept] || dept}</p>
                    <p className="text-2xl font-bold text-foreground mt-2">
                      {employees.filter(e => e.department === dept).length}
                    </p>
                  </div>
                  <Users size={32} className="text-accent/30" />
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <p className="text-sm text-muted-foreground">Total de Empleados</p>
            <p className="text-3xl font-bold text-foreground mt-2">{employees.length}</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">Activos</p>
            <p className="text-3xl font-bold text-foreground mt-2">{employees.filter(e => e.status === 'Active').length}</p>
          </Card>
          <Card>
            <p className="text-sm text-muted-foreground">Departamentos</p>
            <p className="text-3xl font-bold text-foreground mt-2">{departments.length}</p>
          </Card>
        </div>
      </div>
    </div>
  )
}
