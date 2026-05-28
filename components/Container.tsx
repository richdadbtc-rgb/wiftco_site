import React from 'react';
import { WEB } from '@/lib/tokens';

interface ContainerProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  w?: number;
}

export default function Container({ children, style = {}, w }: ContainerProps) {
  return (
    <div style={{
      maxWidth: w || WEB.maxW,
      margin: '0 auto',
      padding: '0 56px',
      ...style,
    }}>
      {children}
    </div>
  );
}
