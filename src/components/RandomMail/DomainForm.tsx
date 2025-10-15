'use client';

import { useMailStore } from '@/stores/mailStore';

export default function DomainForm() {
  const domain = useMailStore((state) => state.domain);
  const setDomain = useMailStore((state) => state.setDomain);

  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend">Enter your domain</legend>
      <input
        type="text"
        className="input w-full"
        placeholder="Domain here"
        onChange={(e) => setDomain(e.target.value)}
        value={domain}
      />
    </fieldset>
  );
}
