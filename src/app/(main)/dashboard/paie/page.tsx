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
import { PAIE_RUNS } from '@/fixtures/payroll';
import {
  Calculator,
  FileText,
  CheckCircle,
  Lock,
  Upload,
  Settings,
  FileBarChart,
  PlayCircle,
} from 'lucide-react';

export default function PaiePage() {
  const actionItems = [
    { label: 'Préparer la paie', icon: PlayCircle },
    { label: 'Calculer la période', icon: Calculator },
    { label: 'Générer les bulletins (PDF)', icon: FileText },
    { label: 'Valider la période', icon: CheckCircle },
    { label: 'Clôturer la période', icon: Lock },
    { label: 'Exporter vers la comptabilité', icon: Upload },
    { label: 'Paramètres de paie', icon: Settings, variant: 'outline' as const },
    { label: 'Rapports de paie', icon: FileBarChart, variant: 'outline' as const },
  ];

  const getStatusBadge = (statut: string) => {
    const variants: Record<string, 'default' | 'secondary' | 'destructive'> = {
      'Clôturée': 'secondary',
      'Validée': 'default',
      'Préparée': 'destructive',
    };
    return <Badge variant={variants[statut] || 'default'}>{statut}</Badge>;
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Paie</h1>
        <p className="text-muted-foreground">
          Gestion de la paie et génération des bulletins
        </p>
      </div>

      <ActionBar items={actionItems} />

      <Card>
        <CardHeader>
          <CardTitle>Périodes de paie</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Période</TableHead>
                <TableHead>Salariés</TableHead>
                <TableHead className="text-right">Brut</TableHead>
                <TableHead className="text-right">Net</TableHead>
                <TableHead>Statut</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {PAIE_RUNS.map((run) => (
                <TableRow key={run.id}>
                  <TableCell className="font-medium">{run.periode}</TableCell>
                  <TableCell>{run.nbSalaries}</TableCell>
                  <TableCell className="text-right">
                    {run.brut.toLocaleString('fr-FR')} FCFA
                  </TableCell>
                  <TableCell className="text-right">
                    {run.net.toLocaleString('fr-FR')} FCFA
                  </TableCell>
                  <TableCell>{getStatusBadge(run.statut)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

