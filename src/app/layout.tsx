import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import { baseMeta } from '@/seo';
import ThemeDropdown from './components/ThemeDropdown';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = baseMeta;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <nav className="navbar bg-base-200 shadow-sm text-base-content">
            <div className="navbar-start"> </div>
            <div className="navbar-center">
              <ul className="flex">
                <li>
                  <Link href={'/'} className="btn btn-ghost rounded-btn">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href={'/components'}
                    className="btn btn-ghost rounded-btn"
                  >
                    Components
                  </Link>
                </li>
              </ul>
            </div>
            <div className="navbar-end">
              <ul className="flex gap-2 items-center">
                <li>
                  <a
                    href="https://blog.karl-eule.de"
                    target="blank"
                    className="btn btn-ghost rounded-btn"
                    rel="noreferrer noopener"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <ThemeDropdown />
                </li>
              </ul>
            </div>
          </nav>
          <main className="flex-1 grid bg-base-100">{children}</main>
          <footer className="footer footer-center p-4 bg-base-300 text-base-content">
            <div>
              <p>Copyright © 2025 - All right reserved by Karl Eule</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
