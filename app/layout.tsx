import './ui/global.css';
import styles from './ui/styles/home.module.css';
import { lusitana, montserrat } from './ui/fonts/fonts';

export default function RootLayout({children}: {children: React.ReactNode;}) {
  return (
    <html lang="en">
      <body className={`${styles.fondo} antialiased ${lusitana.className}`}>
        {children}
      <footer>
        <section style={{fontSize: '40px'}} className={`text-center ${montserrat.className}`}>Footer general de toda la app</section>
      </footer>
      </body>
    </html>
  );
}
