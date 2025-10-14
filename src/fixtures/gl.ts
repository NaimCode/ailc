export type GlEntry = {
  id: string;
  date: string;
  journal: 'OD' | 'AC' | 'VE' | 'AT';
  libelle: string;
  compte: string;
  debit: number;
  credit: number;
  piece?: string;
  statut: 'Brouillon' | 'Validé';
};

export const GL_ENTRIES: GlEntry[] = [
  {
    id: 'GL-0001',
    date: '2025-10-01',
    journal: 'AC',
    libelle: 'Fournisseurs divers - Fournitures bureau',
    compte: '401100',
    debit: 0,
    credit: 150000,
    piece: 'FAC-0123',
    statut: 'Validé',
  },
  {
    id: 'GL-0002',
    date: '2025-10-02',
    journal: 'OD',
    libelle: 'Paie Septembre 2025',
    compte: '641100',
    debit: 219200,
    credit: 0,
    piece: 'PAY-2025-09',
    statut: 'Validé',
  },
  {
    id: 'GL-0003',
    date: '2025-10-05',
    journal: 'VE',
    libelle: 'Prestations de services - Formation',
    compte: '701000',
    debit: 0,
    credit: 350000,
    piece: 'FAC-0142',
    statut: 'Brouillon',
  },
  {
    id: 'GL-0004',
    date: '2025-10-08',
    journal: 'AC',
    libelle: 'Achat carburant véhicules service',
    compte: '606000',
    debit: 85000,
    credit: 0,
    piece: 'FAC-0145',
    statut: 'Validé',
  },
  {
    id: 'GL-0005',
    date: '2025-10-10',
    journal: 'OD',
    libelle: 'Charges sociales Septembre',
    compte: '645100',
    debit: 45800,
    credit: 0,
    piece: 'CS-2025-09',
    statut: 'Validé',
  },
  {
    id: 'GL-0006',
    date: '2025-10-12',
    journal: 'AT',
    libelle: 'Subvention État - Trimestre 3',
    compte: '131000',
    debit: 0,
    credit: 2500000,
    piece: 'SUB-T3-2025',
    statut: 'Validé',
  },
  {
    id: 'GL-0007',
    date: '2025-10-14',
    journal: 'AC',
    libelle: 'Maintenance informatique',
    compte: '615500',
    debit: 125000,
    credit: 0,
    statut: 'Brouillon',
  },
];

