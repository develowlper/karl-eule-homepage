import { customAlphabet } from 'nanoid/non-secure';

const nanoid = customAlphabet('1234567890abcdef', 10);

export function createEmialFromDomain(domain: string) {
  return `${nanoid()}@${domain}`;
}
