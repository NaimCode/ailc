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
import { ARTICLES } from '@/fixtures/stock';
import {
  Plus,
  ArrowDownToLine,
  ArrowUpFromLine,
  ArrowRightLeft,
  ClipboardList,
  Settings as SettingsIcon,
  Bell,
  Settings,
} from 'lucide-react';

export default function StockPage() {
  const actionItems = [
    { label: 'Nouvel article', icon: Plus },
    { label: 'Entrée de stock', icon: ArrowDownToLine },
    { label: 'Sortie de stock', icon: ArrowUpFromLine },
    { label: 'Transfert', icon: ArrowRightLeft },
    { label: 'Inventaire', icon: ClipboardList },
    { label: 'Ajustement', icon: SettingsIcon },
    { label: 'Alertes seuil', icon: Bell, variant: 'outline' as const },
    { label: 'Paramètres de stock', icon: Settings, variant: 'outline' as const },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Gestion des stocks</h1>
        <p className="text-muted-foreground">
          Suivi des articles et mouvements de stock
        </p>
      </div>

      <ActionBar items={actionItems} />

      <Card>
        <CardHeader>
          <CardTitle>Articles en stock</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Code</TableHead>
                <TableHead>Libellé</TableHead>
                <TableHead>Dépôt</TableHead>
                <TableHead className="text-right">Quantité</TableHead>
                <TableHead className="text-right">Seuil</TableHead>
                <TableHead className="text-right">Coût unitaire</TableHead>
                <TableHead>Dernière mise à jour</TableHead>
                <TableHead>Alerte</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {ARTICLES.map((article) => {
                const isAlert = article.quantite < article.seuil;
                return (
                  <TableRow key={article.id}>
                    <TableCell className="font-medium">{article.id}</TableCell>
                    <TableCell>{article.libelle}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{article.depot}</Badge>
                    </TableCell>
                    <TableCell className="text-right">{article.quantite}</TableCell>
                    <TableCell className="text-right">{article.seuil}</TableCell>
                    <TableCell className="text-right">
                      {article.cout.toLocaleString('fr-FR')} FCFA
                    </TableCell>
                    <TableCell>{article.maj}</TableCell>
                    <TableCell>
                      {isAlert && (
                        <Badge variant="destructive">Alerte</Badge>
                      )}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

