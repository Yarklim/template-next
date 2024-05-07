import { Inter } from 'next/font/google';
import Footer from '@/components/modules/Footer/Footer';
import Header from '@/components/modules/Header/Header';
import '@/styles/globals.css';
import { getDictionary } from './dictionaries';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Starting Template Next JS',
  description: 'Generated by create next app',
};

export async function generateStaticParams() {
  return [{ locale: 'uk' }, { locale: 'en' }];
}

export default async function RootLayout({ children, params: { locale } }) {
  const dict = await getDictionary(locale);

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <div className="page__wrapper">
          <Header dict={dict} />
          <main className="main">{children}</main>
          <Footer dict={dict} />
        </div>
      </body>
    </html>
  );
}
