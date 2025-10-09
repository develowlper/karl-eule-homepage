'use client';

import { useMailStore } from '@/stores/mailStore';
import { CgCopy } from 'react-icons/cg';

export default function MailList() {
  const mails = useMailStore((state) => state.mails);

  return (
    <div>
      <h2 className="text-lg">Mail List</h2>
      <ul className="flex flex-col gap-2">
        {mails.map((mail) => (
          <li key={mail} className="max-w-96">
            <div className="border p-2 flex gap-2 items-center justify-between">
              <span>{mail}</span>
              <button
                onClick={() => navigator.clipboard.writeText(mail)}
                className="btn btn-accent btn-sm"
              >
                <CgCopy size={20} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
