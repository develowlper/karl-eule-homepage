'use client';

import { useMailStore } from '@/stores/mailStore';

import CopyMailButton from './CopyMailButton';

export default function MailList() {
  const mails = useMailStore((state) => state.mails);

  return (
    <div>
      <ul className="flex flex-col gap-2 mt-2">
        {mails.map((mail) => (
          <li key={mail}>
            <div className="border rounded-lg p-2 flex gap-2 items-center justify-between">
              <span>{mail}</span>
              <CopyMailButton mail={mail} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
