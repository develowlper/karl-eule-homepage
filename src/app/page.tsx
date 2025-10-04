import Image from 'next/image';
import logo from '@/assets/logo.png';

export const metadata = {
  title: 'Karl Eule',
  description: 'Portfolio of Karl Eule',
  keywords: 'portfolio, developer, Karl Eule, blog',
  authors: [{ name: 'Karl Eule', url: 'https://karl-eule.de' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start"> </div>
        <div className="navbar-center">
          <ul>
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
          </ul>
        </div>
        <div className="navbar-end"> </div>
      </nav>
      <div className="flex-1 mt-6">
        <div className="flex justify-center">
          <div className="flex flex-col items-center gap-3">
            <div className="avatar">
              <div className="w-24 mask mask-squircle">
                <Image src={logo} alt="Logo" width={200} height={200} />
              </div>
            </div>
            <h1 className="text-center text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Karl Eule
            </h1>
            <h2 className="text-center text-2xl font-semibold">
              Hi, i&apos;m Karl Eule. I&apos;m a fullstack developer from
              Leipzig.
            </h2>
          </div>
        </div>
      </div>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>Copyright © 2025 - All right reserved by Karl Eule</p>
        </div>
      </footer>
    </div>
  );
}
