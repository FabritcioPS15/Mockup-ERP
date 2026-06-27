'use client'

import { Card, Button, Badge, Table, Stat } from '@/components/ui-primitives'
import { Plus, DollarSign, TrendingUp, Users } from 'lucide-react'

const statusMap: { [key: string]: string } = {
  'Paid': 'Pagada',
  'Pending': 'Pendiente'
}

const deptMap: { [key: string]: string } = {
  'Sales': 'Ventas',
  'Engineering': 'Ingeniería',
  'Finance': 'Finanzas',
  'Design': 'Diseño'
}

const payrollData = [
  { id: 1, employee: 'Alice Johnson', department: 'Sales', salary: '$85,000', tax: '$12,750', deductions: '$5,200', netPay: '$66,550', payDate: '29 Feb 2024', status: 'Paid' },
  { id: 2, employee: 'Bob Smith', department: 'Engineering', salary: '$120,000', tax: '$18,000', deductions: '$7,500', netPay: '$94,500', payDate: '29 Feb 2024', status: 'Paid' },
  { id: 3, employee: 'Carol Williams', department: 'Finance', salary: '$95,000', tax: '$14,250', deductions: '$6,200', netPay: '$74,550', payDate: '29 Feb 2024', status: 'Paid' },
  { id: 4, employee: 'David Brown', department: 'Sales', salary: '$65,000', tax: '$9,750', deductions: '$3,900', netPay: '$51,350', payDate: '29 Mar 2024', status: 'Pending' },
  { id: 5, employee: 'Emma Davis', department: 'Design', salary: '$75,000', tax: '$11,250', deductions: '$4,500', netPay: '$59,250', payDate: '29 Mar 2024', status: 'Pending' },
  { id: 6, employee: 'Frank Martinez', department: 'Engineering', salary: '$110,000', tax: '$16,500', deductions: '$6,600', netPay: '$86,900', payDate: '29 Feb 2024', status: 'Paid' },
]

const tableRows = payrollData.map(p => [
  p.employee,
  deptMap[p.department] || p.department,
  p.salary,
  p.tax,
  p.deductions,
  p.netPay,
  p.payDate,
  <Badge key={p.id} variant={p.status === 'Paid' ? 'success' : 'warning'}>
    {statusMap[p.status] || p.status}
  </Badge>,
])

export default function PayrollPage() {
  const totalSalary = payrollData.reduce((sum, p) => sum + parseInt(p.salary.replace('$', '').replace(',', '')), 0)
  const totalNetPay = payrollData.reduce((sum, p) => sum + parseInt(p.netPay.replace('$', '').replace(',', '')), 0)
  const totalTax = payrollData.reduce((sum, p) => sum + parseInt(p.tax.replace('$', '').replace(',', '')), 0)
  const paidCount = payrollData.filter(p => p.status === 'Paid').length

  return (
    <div>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Nómina</h1>
            <p className="text-muted-foreground mt-1">Gestiona la nómina y deducciones de empleados</p>
          </div>
          <Button variant="primary" size="lg" className="w-full sm:w-auto flex items-center justify-center gap-2">
            <Plus size={18} />
            Procesar Nómina
          </Button>
        </div>

        {/* Payroll Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Stat label="Total de Empleados" value={payrollData.length} icon={Users} />
          <Stat label="Salario Total" value={`$${(totalSalary / 1000).toFixed(0)}K`} icon={DollarSign} />
          <Stat label="Salario Neto Total" value={`$${(totalNetPay / 1000).toFixed(0)}K`} icon={TrendingUp} />
          <Stat label="Impuesto de Nómina" value={`$${(totalTax / 1000).toFixed(0)}K`} icon={DollarSign} />
        </div>

        {/* Payroll Status */}
        <Card>
          <h2 className="text-lg font-semibold text-foreground mb-4">Estado Actual de Nómina</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-900">
              <p className="text-sm text-green-900 dark:text-green-100">Procesada y Pagada</p>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400 mt-2">{paidCount} / {payrollData.length}</p>
            </div>
            <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg border border-amber-200 dark:border-amber-900">
              <p className="text-sm text-amber-900 dark:text-amber-100">Esperando Procesamiento</p>
              <p className="text-2xl font-bold text-amber-600 dark:text-amber-400 mt-2">{payrollData.length - paidCount} / {payrollData.length}</p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-900">
              <p className="text-sm text-blue-900 dark:text-blue-100">Costo Mensual de Nómina</p>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-2">${(totalSalary / 1000).toFixed(0)}K</p>
            </div>
          </div>
        </Card>

        {/* Payroll Table */}
        <Card>
          <h2 className="text-lg font-semibold text-foreground mb-6">Payroll Details</h2>
          <Table
            headers={['Employee', 'Department', 'Salary', 'Tax', 'Deductions', 'Net Pay', 'Pay Date', 'Status']}
            rows={tableRows}
          />
        </Card>

        {/* Action Buttons */}
        <Card>
          <h2 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <Button variant="primary" size="md" className="w-full">
              Process March Payroll
            </Button>
            <Button variant="secondary" size="md" className="w-full">
              Generate Reports
            </Button>
            <Button variant="outline" size="md" className="w-full">
              View History
            </Button>
            <Button variant="outline" size="md" className="w-full">
              Export Data
            </Button>
          </div>
        </Card>

        {/* Detailed Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <h3 className="font-semibold text-foreground mb-4">Salary Breakdown</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Gross Salary</span>
                <span className="font-semibold text-foreground">${(totalSalary / 1000).toFixed(0)}K</span>
              </div>
              <div className="flex justify-between items-center text-red-600">
                <span className="text-sm">Taxes</span>
                <span className="font-semibold">-${(totalTax / 1000).toFixed(0)}K</span>
              </div>
              <div className="flex justify-between items-center text-red-600">
                <span className="text-sm">Deductions</span>
                <span className="font-semibold">-$21.4K</span>
              </div>
              <div className="pt-3 border-t border-border flex justify-between items-center">
                <span className="font-semibold text-foreground">Net Payroll</span>
                <span className="font-bold text-accent">${(totalNetPay / 1000).toFixed(0)}K</span>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="font-semibold text-foreground mb-4">Department Summary</h3>
            <div className="space-y-3">
              {Array.from(new Set(payrollData.map(p => p.department))).map(dept => {
                const deptTotal = payrollData
                  .filter(p => p.department === dept)
                  .reduce((sum, p) => sum + parseInt(p.netPay.replace('$', '').replace(',', '')), 0)
                return (
                  <div key={dept} className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{dept}</span>
                    <span className="font-semibold text-foreground">${(deptTotal / 1000).toFixed(0)}K</span>
                  </div>
                )
              })}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
