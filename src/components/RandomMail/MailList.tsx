'use client';

import { useMailStore } from '@/stores/mailStore';
import clsx from 'clsx';
import { MouseEvent, useEffect, useState } from 'react';
import { CgCheck, CgCopy } from 'react-icons/cg';

export default function MailList() {
  const mails = useMailStore((state) => state.mails);

  const [copied, setCopied] = useState(false);

  const handleCopy = (e: MouseEvent<HTMLButtonElement>) => {
    const mail = e.currentTarget.value;
    console.log('Copying mail:', mail);
    navigator.clipboard.writeText(mail);
    setCopied(true);
  };

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  });

  return (
    <div>
      <ul className="flex flex-col gap-2 mt-2">
        {mails.map((mail) => (
          <li key={mail}>
            <div className="border rounded-lg p-2 flex gap-2 items-center justify-between">
              <span>{mail}</span>
              <button
                value={mail}
                onClick={handleCopy}
                className={clsx(
                  'btn btn-sm',
                  copied ? 'btn-success' : 'btn-primary'
                )}
              >
                {copied ? (
                  <CgCheck
                    className={
                      copied ? 'text-success-content' : 'text-primary-content'
                    }
                    size={20}
                  />
                ) : (
                  <CgCopy size={20} />
                )}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
