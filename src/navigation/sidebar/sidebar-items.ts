import {
  Home,
  Wallet,
  Banknote,
  Users,
  Boxes,
  FileWarning,
  FolderKanban,
  Briefcase,
  UserSquare,
  FileText,
  History,
  Settings,
  Shield,
  Archive,
  type LucideIcon,
} from "lucide-react";

export interface NavSubItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  comingSoon?: boolean;
  newTab?: boolean;
  isNew?: boolean;
}

export interface NavMainItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  subItems?: NavSubItem[];
  comingSoon?: boolean;
  newTab?: boolean;
  isNew?: boolean;
}

export interface NavGroup {
  id: number;
  label?: string;
  items: NavMainItem[];
}

export const sidebarItems: NavGroup[] = [
  {
    id: 1,
    label: "Tableau de bord",
    items: [
      {
        title: "Tableau de bord",
        url: "/dashboard",
        icon: Home,
      },
    ],
  },
  {
    id: 2,
    label: "Modules principaux",
    items: [
      {
        title: "Paie",
        url: "/dashboard/paie",
        icon: Wallet,
      },
      {
        title: "Comptabilité",
        url: "/dashboard/comptabilite",
        icon: Banknote,
      },
      {
        title: "Ressources humaines",
        url: "/dashboard/rh",
        icon: Users,
      },
      {
        title: "Stock",
        url: "/dashboard/stock",
        icon: Boxes,
      },
    ],
  },
  {
    id: 3,
    label: "Gestion",
    items: [
      {
        title: "Signalements",
        url: "/dashboard/signalements",
        icon: FileWarning,
      },
      {
        title: "Dossiers",
        url: "/dashboard/dossiers",
        icon: FolderKanban,
      },
      {
        title: "Missions",
        url: "/dashboard/missions",
        icon: Briefcase,
      },
      {
        title: "Agents",
        url: "/dashboard/agents",
        icon: UserSquare,
      },
      {
        title: "Documents",
        url: "/dashboard/documents",
        icon: FileText,
      },
    ],
  },
  {
    id: 4,
    label: "Administration",
    items: [
      {
        title: "Audit",
        url: "/dashboard/audit",
        icon: History,
      },
      {
        title: "Paramétrage",
        url: "/dashboard/parametrage",
        icon: Settings,
      },
      {
        title: "Sécurité",
        url: "/dashboard/securite",
        icon: Shield,
      },
      {
        title: "Archivage",
        url: "/dashboard/archivage",
        icon: Archive,
      },
    ],
  },
];
