import { Suspense } from 'react';
import type { Metadata } from 'next';
import { Lato } from 'next/font/google';

import NavBar from '@/shared/components/NavBar';
import Footer from '@/shared/components/Footer';

import './globals.css';

const lato = Lato({ subsets: ['latin'], weight: ['400', '700', '900'] });

export const metadata: Metadata = {
  title: 'Atelie Vinoka',
  description: 'Atelie vinoka, corte e costura',
  keywords:
    'ateliê de costura Vinoka, Vinoka Campinas, costureira Campinas, serviços de costura Campinas, ajuste de roupas Campinas, criação de peças únicas Campinas, atelier personalizado Campinas, roupa sob medida Campinas, reforma de roupas Campinas, conserto de roupas Campinas, costureira profissional Campinas, confecção de roupas Campinas, customização de roupas Campinas, vestido de festa Campinas,roupa infantil Campinas,tecido para costura Campinas,acessórios para costura Campinas,bordado Campinas,botão Campinas,zíper Campinas',
  icons: '/img/favicon.ico',
  robots: 'index, follow',
  authors: [{ name: 'Eliel Silva', url: 'https://github.com/Eliel-Silva-dev' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={lato.className}>
        <NavBar />
        <Suspense fallback={<div>Carregando dados da pagina...</div>}>
          {children}
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
