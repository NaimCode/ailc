export type PaieRun = {
  id: string;
  periode: string;
  nbSalaries: number;
  brut: number;
  net: number;
  statut: 'Préparée' | 'Validée' | 'Clôturée';
};

export const PAIE_RUNS: PaieRun[] = [
  {
    id: 'PAY-2025-06',
    periode: '2025-06',
    nbSalaries: 28,
    brut: 248500,
    net: 201200,
    statut: 'Clôturée',
  },
  {
    id: 'PAY-2025-07',
    periode: '2025-07',
    nbSalaries: 30,
    brut: 257800,
    net: 208700,
    statut: 'Clôturée',
  },
  {
    id: 'PAY-2025-08',
    periode: '2025-08',
    nbSalaries: 32,
    brut: 265000,
    net: 214500,
    statut: 'Clôturée',
  },
  {
    id: 'PAY-2025-09',
    periode: '2025-09',
    nbSalaries: 33,
    brut: 270300,
    net: 219200,
    statut: 'Validée',
  },
  {
    id: 'PAY-2025-10',
    periode: '2025-10',
    nbSalaries: 34,
    brut: 279100,
    net: 226400,
    statut: 'Préparée',
  },
];

