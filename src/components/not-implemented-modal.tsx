'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface NotImplementedModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function NotImplementedModal({
  open,
  onOpenChange,
}: NotImplementedModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Fonctionnalité indisponible</DialogTitle>
          <DialogDescription>
            Cette fonctionnalité n&apos;existe pas encore. Version Démo
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={() => onOpenChange(false)}>OK</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

