'use client';

import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';
import { useNotImplemented } from '@/contexts/not-implemented-context';

export interface ActionBarItem {
  label: string;
  icon?: LucideIcon;
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link' | 'destructive';
}

export interface ActionBarProps {
  items: ActionBarItem[];
  className?: string;
}

export function ActionBar({ items, className }: ActionBarProps) {
  const { openNotImpl } = useNotImplemented();

  return (
    <div className={`flex flex-wrap gap-2 ${className || ''}`}>
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <Button
            key={index}
            variant={item.variant || 'default'}
            onClick={openNotImpl}
            className="gap-2"
          >
            {Icon && <Icon className="size-4" />}
            {item.label}
          </Button>
        );
      })}
    </div>
  );
}

