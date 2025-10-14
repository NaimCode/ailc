'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { ActionBar } from '@/components/action-bar';
import { EMPLOYES } from '@/fixtures/employees';
import {
  UserPlus,
  FileText,
  Calendar,
  CheckCircle,
  Star,
  FileOutput,
  Settings,
} from 'lucide-react';

export default function RHPage() {
  const actionItems = [
    { label: 'Créer un employé', icon: UserPlus },
    { label: 'Gérer les contrats', icon: FileText },
    { label: 'Demander un congé', icon: Calendar },
    { label: 'Valider un congé', icon: CheckCircle },
    { label: 'Évaluation', icon: Star },
    { label: 'Générer un document RH', icon: FileOutput },
    { label: 'Paramètres RH', icon: Settings, variant: 'outline' as const },
  ];

  const getStatusBadge = (statut: string) => {
    return statut === 'Actif' ? (
      <Badge variant="default">Actif</Badge>
    ) : (
      <Badge variant="destructive">Suspendu</Badge>
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Ressources humaines</h1>
        <p className="text-muted-foreground">
          Gestion des employés, contrats et congés
        </p>
      </div>

      <ActionBar items={actionItems} />

      <Card>
        <CardHeader>
          <CardTitle>Liste des employés</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Nom</TableHead>
                <TableHead>Prénom</TableHead>
                <TableHead>Service</TableHead>
                <TableHead>Poste</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead className="text-right">Salaire de base</TableHead>
                <TableHead>Date d&apos;embauche</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {EMPLOYES.map((emp) => (
                <TableRow key={emp.id}>
                  <TableCell className="font-medium">{emp.id}</TableCell>
                  <TableCell>{emp.nom}</TableCell>
                  <TableCell>{emp.prenom}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{emp.service}</Badge>
                  </TableCell>
                  <TableCell>{emp.poste}</TableCell>
                  <TableCell>{getStatusBadge(emp.statut)}</TableCell>
                  <TableCell className="text-right">
                    {emp.salaireBase.toLocaleString('fr-FR')} FCFA
                  </TableCell>
                  <TableCell>{emp.dateEmbauche}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

