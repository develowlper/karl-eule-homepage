import Link from 'next/link';
import styles from './layout.module.css';
import clsx from 'clsx';

export default function ComponentsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={clsx(styles.grid)}>
      <div className="bg-base-200">
        <ul className="flex flex-col- gap-2 p-2">
          <li>
            <Link href="/components/login-form" className="link">
              Login Form
            </Link>
          </li>
        </ul>
      </div>
      <div>{children}</div>
    </div>
  );
}
