import Container from '@/components/RandomMail/Container';
import CreateEmail from '@/components/RandomMail/CreateEmail';
import DomainForm from '@/components/RandomMail/DomainForm';
import MailList from '@/components/RandomMail/MailList';

export const metadata = {
  title: 'Random Email Generator | Karl Eule',
  description:
    'Generate random email addresses for testing, development, or temporary use. Choose your preferred domain and create unique disposable email addresses instantly.',
  keywords:
    'random email generator, disposable email, temporary email, testing email, development tools, fake email generator',
  authors: [{ name: 'Karl Eule', url: 'https://karl-eule.de' }],
  openGraph: {
    title: 'Random Email Generator',
    description:
      'Generate random email addresses for testing and development purposes',
    url: 'https://karl-eule.de/random-mail',
    type: 'website',
    images: [
      {
        url: 'https://karl-eule.de/ogs/random-email.jpg',
        width: 1200,
        height: 630,
        alt: 'Random Email Generator Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Random Email Generator',
    description:
      'Generate random email addresses for testing and development purposes',
    images: ['https://karl-eule.de/ogs/random-email.jpg'],
  },
};

export default function RandomMailPage() {
  return (
    <Container>
      <div className="flex flex-col gap-4 max-w-[500px] ">
        <div>
          <h1 className="text-3xl font-bold mb-4 text-center">
            Random Email Generator
          </h1>
          <p className="text-lg text-base-content mx-auto">
            Generate random email addresses for testing, development, or
            temporary use. Choose your preferred domain and create unique email
            addresses instantly. Perfect for developers who need disposable
            email addresses for testing applications or anyone looking for
            temporary email solutions.
          </p>
        </div>
        <div className="flex flex-col gap-2 bg-base-300 p-2 rounded-lg">
          <DomainForm />
          <CreateEmail />
        </div>
        <MailList />
      </div>
    </Container>
  );
}
