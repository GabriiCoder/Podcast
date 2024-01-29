
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './componentes/header/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Podcaster',
  description:
    'Descubre los mejores podcast',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
        <body className={inter.className}>
          <Header/>
          {children}
          
          </body>
    </html>
  );
}