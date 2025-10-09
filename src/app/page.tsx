import Image from 'next/image';
import logo from '@/assets/logo.png';

export const metadata = {
  keywords: 'portfolio, developer, Karl Eule, blog',
  authors: [{ name: 'Karl Eule', url: 'https://karl-eule.de' }],
};

export default function Home() {
  return (
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
          <h2 className="text-center text-base-content text-2xl font-semibold">
            Hi, i&apos;m Karl Eule. I&apos;m a fullstack developer from Leipzig.
          </h2>
        </div>
      </div>
    </div>
  );
}
