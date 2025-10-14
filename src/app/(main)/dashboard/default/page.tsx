'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  FileText,
  Users,
  Building,
  Scale
} from 'lucide-react';

export default function Page() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Vue d&apos;ensemble AILC</h1>
        <p className="text-muted-foreground">
          Tableau de bord de l&apos;Autorité de lutte contre la corruption du Tchad
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Signalements actifs</CardTitle>
            <FileText className="text-muted-foreground size-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">127</div>
            <p className="text-muted-foreground text-xs">
              +12 ce mois
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Enquêtes en cours</CardTitle>
            <Clock className="text-muted-foreground size-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">34</div>
            <p className="text-muted-foreground text-xs">
              8 enquêteurs mobilisés
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Dossiers clôturés</CardTitle>
            <CheckCircle className="text-muted-foreground size-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89</div>
            <p className="text-muted-foreground text-xs">
              Cette année
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taux de traitement</CardTitle>
            <TrendingUp className="text-muted-foreground size-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">76%</div>
            <p className="text-muted-foreground text-xs">
              +8% vs année précédente
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Activity Overview */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Signalements récents</CardTitle>
            <CardDescription>Dernières dénonciations reçues</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium">Détournement de fonds publics</p>
                <p className="text-muted-foreground text-xs">Ministère de l&apos;Éducation - N&apos;Djamena</p>
              </div>
              <Badge variant="destructive">Urgent</Badge>
            </div>
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium">Surfacturation marchés publics</p>
                <p className="text-muted-foreground text-xs">Direction des Routes - Moundou</p>
              </div>
              <Badge variant="default">Nouveau</Badge>
            </div>
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium">Abus de pouvoir</p>
                <p className="text-muted-foreground text-xs">Administration locale - Sarh</p>
              </div>
              <Badge variant="secondary">En cours</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Statistiques par secteur</CardTitle>
            <CardDescription>Répartition des cas par domaine</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Building className="text-muted-foreground size-4" />
                <span className="text-sm">Administration publique</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">45</span>
                <Badge variant="outline">35%</Badge>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Scale className="text-muted-foreground size-4" />
                <span className="text-sm">Justice</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">28</span>
                <Badge variant="outline">22%</Badge>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Users className="text-muted-foreground size-4" />
                <span className="text-sm">Santé</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">32</span>
                <Badge variant="outline">25%</Badge>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <AlertTriangle className="text-muted-foreground size-4" />
                <span className="text-sm">Autres</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">22</span>
                <Badge variant="outline">18%</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alerts & Information */}
      <Card>
        <CardHeader>
          <CardTitle>Informations importantes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="bg-muted flex items-start gap-3 rounded-lg p-3">
            <AlertTriangle className="text-yellow-600 size-5 shrink-0" />
            <div>
              <p className="text-sm font-medium">Formation obligatoire</p>
              <p className="text-muted-foreground text-xs">
                Tous les agents doivent compléter le module de formation anti-corruption avant le 31 octobre.
              </p>
            </div>
          </div>
          <div className="bg-muted flex items-start gap-3 rounded-lg p-3">
            <CheckCircle className="text-green-600 size-5 shrink-0" />
            <div>
              <p className="text-sm font-medium">Nouveau système de reporting</p>
              <p className="text-muted-foreground text-xs">
                La plateforme de signalement anonyme est maintenant opérationnelle pour tous les citoyens.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
