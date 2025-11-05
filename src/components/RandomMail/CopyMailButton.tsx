import { MouseEvent, useEffect, useState } from 'react';
import clsx from 'clsx';
import { CgCopy, CgCheck } from 'react-icons/cg';

export default function CopyMailButton({ mail }: { mail: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: MouseEvent<HTMLButtonElement>) => {
    const mail = e.currentTarget.value;
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
    <button
      value={mail}
      onClick={handleCopy}
      className={clsx(
        'w-[100px] btn btn-sm',
        copied ? 'btn-success' : 'btn-primary'
      )}
    >
      {copied ? (
        <>
          <CgCheck
            className={copied ? 'text-success-content' : 'text-primary-content'}
            size={20}
          />
          {' Copied'}
        </>
      ) : (
        <>
          <CgCopy size={20} />
          {'Copy'}
        </>
      )}
    </button>
  );
}
