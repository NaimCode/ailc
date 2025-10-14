'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { NotImplementedModal } from '@/components/not-implemented-modal';

interface NotImplementedContextType {
  openNotImpl: () => void;
}

const NotImplementedContext = createContext<
  NotImplementedContextType | undefined
>(undefined);

export function NotImplementedProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const openNotImpl = () => setOpen(true);

  return (
    <NotImplementedContext.Provider value={{ openNotImpl }}>
      {children}
      <NotImplementedModal open={open} onOpenChange={setOpen} />
    </NotImplementedContext.Provider>
  );
}

export function useNotImplemented() {
  const context = useContext(NotImplementedContext);
  if (!context) {
    throw new Error(
      'useNotImplemented must be used within NotImplementedProvider'
    );
  }
  return context;
}

