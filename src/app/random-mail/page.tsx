import Container from '@/components/RandomMail/Container';
import CreateEmail from '@/components/RandomMail/CreateEmail';
import DomainForm from '@/components/RandomMail/DomainForm';
import MailList from '@/components/RandomMail/MailList';

export default function RandomMailPage() {
  return (
    <Container>
      <div className="flex flex-col gap-2">
        <DomainForm />
        <CreateEmail />
        <MailList />
      </div>
    </Container>
  );
}
