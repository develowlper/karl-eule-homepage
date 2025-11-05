import Container from '@/components/RandomMail/Container';
import CreateEmail from '@/components/RandomMail/CreateEmail';
import DomainForm from '@/components/RandomMail/DomainForm';
import MailList from '@/components/RandomMail/MailList';
import {
  AUTHOR_NAME,
  AUTHOR_URL,
  DESCRIPTION,
  KEYWORDS,
  OG_DESCRIPTION,
  OG_IMAGE_ALT,
  OG_IMAGE_URL,
  OG_TITLE,
  OG_URL,
  TITLE,
} from '../const/seo';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: KEYWORDS,
  authors: [{ name: AUTHOR_NAME, url: AUTHOR_URL }],
  openGraph: {
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    url: OG_URL,
    type: 'website',
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: OG_IMAGE_ALT,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    images: [OG_IMAGE_URL],
  },
};

export default function RandomMailPage() {
  return (
    <Container>
      <div className="flex flex-col gap-4 max-w-[500px] ">
        <div>
          <h1 className="text-3xl font-bold mb-4 text-center">{OG_TITLE}</h1>
          <p className="text-lg mx-auto">
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
