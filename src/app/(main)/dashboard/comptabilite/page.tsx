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
import { GL_ENTRIES } from '@/fixtures/gl';
import {
  Plus,
  Upload,
  Link,
  Lock,
  FileText,
  Building,
  Download,
  Settings,
} from 'lucide-react';

export default function ComptabilitePage() {
  const actionItems = [
    { label: 'Créer une écriture', icon: Plus },
    { label: 'Importer des écritures', icon: Upload },
    { label: 'Lettrer', icon: Link },
    { label: 'Clôturer la période', icon: Lock },
    { label: 'États OHADA', icon: FileText },
    { label: 'Rapprochement bancaire', icon: Building },
    { label: 'Exporter (CSV / XLS / PDF)', icon: Download, variant: 'outline' as const },
    { label: 'Paramètres comptables', icon: Settings, variant: 'outline' as const },
  ];

  const getStatusBadge = (statut: string) => {
    return statut === 'Validé' ? (
      <Badge variant="default">Validé</Badge>
    ) : (
      <Badge variant="secondary">Brouillon</Badge>
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Comptabilité</h1>
        <p className="text-muted-foreground">
          Gestion des écritures comptables et du grand livre
        </p>
      </div>

      <ActionBar items={actionItems} />

      <Card>
        <CardHeader>
          <CardTitle>Écritures comptables</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Journal</TableHead>
                <TableHead>Libellé</TableHead>
                <TableHead>Compte</TableHead>
                <TableHead className="text-right">Débit</TableHead>
                <TableHead className="text-right">Crédit</TableHead>
                <TableHead>Pièce</TableHead>
                <TableHead>Statut</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {GL_ENTRIES.map((entry) => (
                <TableRow key={entry.id}>
                  <TableCell className="font-medium">{entry.id}</TableCell>
                  <TableCell>{entry.date}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{entry.journal}</Badge>
                  </TableCell>
                  <TableCell>{entry.libelle}</TableCell>
                  <TableCell>{entry.compte}</TableCell>
                  <TableCell className="text-right">
                    {entry.debit > 0 ? entry.debit.toLocaleString('fr-FR') : '-'}
                  </TableCell>
                  <TableCell className="text-right">
                    {entry.credit > 0 ? entry.credit.toLocaleString('fr-FR') : '-'}
                  </TableCell>
                  <TableCell>
                    {entry.piece ? (
                      <Badge variant="secondary">{entry.piece}</Badge>
                    ) : (
                      '-'
                    )}
                  </TableCell>
                  <TableCell>{getStatusBadge(entry.statut)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

