'use client';

import { useEffect, useRef } from 'react';
import { useNotImplemented } from '@/contexts/not-implemented-context';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface NotImplementedPageProps {
  title: string;
  description?: string;
}

export function NotImplementedPage({
  title,
  description,
}: NotImplementedPageProps) {
  const { openNotImpl } = useNotImplemented();
  const hasOpened = useRef(false);

  useEffect(() => {
    if (!hasOpened.current) {
      hasOpened.current = true;
      openNotImpl();
    }
  }, [openNotImpl]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">{title}</h1>
        {description && (
          <p className="text-muted-foreground">{description}</p>
        )}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Fonctionnalité en développement</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Cette page est en cours de développement. Version Démo.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

