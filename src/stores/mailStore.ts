import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface MailStore {
  mails: string[];
  domain: string;
  addMail: (mail: string) => void;
  removeMail: (mail: string) => void;
  clearMails: () => void;
  setDomain: (domain: string) => void;
}

const setMails = (mails: string[], mail: string) => {
  //if there are five mails already, remove the oldest one (last in the array)
  if (mails.length >= 10) {
    mails.pop();
  }
  // add the new mail to the beginning of the array
  mails.unshift(mail);
  return [...mails];
};

export const useMailStore = create<MailStore>()(
  devtools(
    persist(
      (set) => ({
        mails: [],
        domain: 'randommail.io',
        addMail: (mail: string) =>
          set((state) => ({ mails: setMails(state.mails, mail) })),
        removeMail: (mail: string) =>
          set((state) => ({ mails: state.mails.filter((m) => m !== mail) })),
        clearMails: () => set(() => ({ mails: [] })),
        setDomain: (domain: string) => set(() => ({ domain, mails: [] })),
      }),
      { name: 'mail-storage' }
    )
  )
);
