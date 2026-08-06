import { useEffect, useState, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

export function PageTransition({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const t = window.setTimeout(() => setVisible(true), 30);
    return () => window.clearTimeout(t);
  }, [pathname]);

  return (
    <div
      className={`transition-all duration-500 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      {children}
    </div>
  );
}
