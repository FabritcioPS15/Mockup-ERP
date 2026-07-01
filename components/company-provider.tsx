'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Company {
  id: string;
  name: string;
  ruc: string;
  logo?: string;
  plan: 'basic' | 'professional' | 'enterprise';
  status: 'active' | 'suspended' | 'trial';
}

interface CompanyContextType {
  currentCompany: Company | null;
  companies: Company[];
  setCurrentCompany: (company: Company) => void;
  switchCompany: (companyId: string) => void;
}

const CompanyContext = createContext<CompanyContextType | undefined>(undefined);

const DEFAULT_COMPANIES: Company[] = [
  {
    id: '1',
    name: 'Krea & Terra S.A.',
    ruc: '20123456789',
    plan: 'enterprise',
    status: 'active'
  },
  {
    id: '2',
    name: 'Innovación Tech Ltd.',
    ruc: '20987654321',
    plan: 'professional',
    status: 'active'
  },
  {
    id: '3',
    name: 'Soluciones Digitales SAC',
    ruc: '20555555555',
    plan: 'basic',
    status: 'trial'
  }
];

export function CompanyProvider({ children }: { children: React.ReactNode }) {
  const [currentCompany, setCurrentCompany] = useState<Company | null>(null);
  const [companies, setCompanies] = useState<Company[]>(DEFAULT_COMPANIES);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Load from localStorage
    const storedCompanyId = localStorage.getItem('currentCompanyId');
    const storedCompanies = localStorage.getItem('companies');
    
    if (storedCompanies) {
      try {
        setCompanies(JSON.parse(storedCompanies));
      } catch (e) {
        console.error('Error loading companies from localStorage:', e);
      }
    }

    if (storedCompanyId) {
      const company = companies.find(c => c.id === storedCompanyId);
      if (company) {
        setCurrentCompany(company);
      } else {
        // Fallback to first company
        setCurrentCompany(companies[0]);
      }
    } else {
      // Default to first company
      setCurrentCompany(companies[0]);
    }
  }, []);

  const handleSetCurrentCompany = (company: Company) => {
    setCurrentCompany(company);
    localStorage.setItem('currentCompanyId', company.id);
  };

  const handleSwitchCompany = (companyId: string) => {
    const company = companies.find(c => c.id === companyId);
    if (company) {
      handleSetCurrentCompany(company);
    }
  };

  if (!mounted) return <>{children}</>;

  return (
    <CompanyContext.Provider 
      value={{ 
        currentCompany, 
        companies, 
        setCurrentCompany: handleSetCurrentCompany,
        switchCompany: handleSwitchCompany
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
}

export function useCompany() {
  const context = useContext(CompanyContext);
  if (context === undefined) {
    throw new Error('useCompany debe ser usado dentro de CompanyProvider');
  }
  return context;
}
