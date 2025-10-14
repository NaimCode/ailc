export type Article = {
  id: string;
  libelle: string;
  depot: string;
  quantite: number;
  seuil: number;
  cout: number;
  maj: string;
};

export const ARTICLES: Article[] = [
  {
    id: 'STK-001',
    libelle: 'Papier A4 (ramette 500 feuilles)',
    depot: 'Bureau Central - N\'Djamena',
    quantite: 120,
    seuil: 50,
    cout: 2500,
    maj: '2025-10-10',
  },
  {
    id: 'STK-002',
    libelle: 'Toner HP LaserJet',
    depot: 'Bureau Central - N\'Djamena',
    quantite: 18,
    seuil: 20,
    cout: 45000,
    maj: '2025-10-09',
  },
  {
    id: 'STK-003',
    libelle: 'Clavier USB AZERTY',
    depot: 'Annexe Moundou',
    quantite: 42,
    seuil: 30,
    cout: 8500,
    maj: '2025-10-08',
  },
  {
    id: 'STK-004',
    libelle: 'Souris optique USB',
    depot: 'Bureau Central - N\'Djamena',
    quantite: 55,
    seuil: 35,
    cout: 4200,
    maj: '2025-10-12',
  },
  {
    id: 'STK-005',
    libelle: 'Stylos bleus (boîte de 50)',
    depot: 'Bureau Central - N\'Djamena',
    quantite: 8,
    seuil: 15,
    cout: 12500,
    maj: '2025-10-11',
  },
  {
    id: 'STK-006',
    libelle: 'Chemises cartonnées',
    depot: 'Bureau Central - N\'Djamena',
    quantite: 200,
    seuil: 100,
    cout: 350,
    maj: '2025-10-13',
  },
  {
    id: 'STK-007',
    libelle: 'Agrafeuses professionnelles',
    depot: 'Annexe Moundou',
    quantite: 12,
    seuil: 10,
    cout: 6500,
    maj: '2025-10-09',
  },
  {
    id: 'STK-008',
    libelle: 'Cartouches encre imprimante Canon',
    depot: 'Annexe Sarh',
    quantite: 8,
    seuil: 12,
    cout: 28000,
    maj: '2025-10-08',
  },
  {
    id: 'STK-009',
    libelle: 'Disques durs externes 2TB',
    depot: 'Bureau Central - N\'Djamena',
    quantite: 15,
    seuil: 10,
    cout: 85000,
    maj: '2025-10-14',
  },
  {
    id: 'STK-010',
    libelle: 'Cahiers registres 200 pages',
    depot: 'Bureau Central - N\'Djamena',
    quantite: 65,
    seuil: 40,
    cout: 3200,
    maj: '2025-10-12',
  },
];

