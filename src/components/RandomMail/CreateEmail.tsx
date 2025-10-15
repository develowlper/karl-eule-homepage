'use client';
import { useMailStore } from '@/stores/mailStore';
import { createEmialFromDomain } from '@/utils';

export default function CreateEmail() {
  const domain = useMailStore((state) => state.domain);
  const addEmail = useMailStore((state) => state.addMail);

  const handleCreateEmail = () => {
    const emial = createEmialFromDomain(domain);
    addEmail(emial);
  };

  return (
    <button className="btn btn-primary" onClick={handleCreateEmail}>
      Generate Email
    </button>
  );
}
