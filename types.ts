export type Language = 'CN' | 'EN';

export interface Content {
  nav: {
    home: string;
    vision: string;
    tokenomics: string;
    mechanism: string;
    ico: string;
    whitepaper: string;
  };
  hero: {
    subtitle: string;
    title: string;
    desc: string;
    cta: string;
    tg: string;
  };
  vision: {
    title: string;
    cards: {
      title: string;
      desc: string;
    }[];
  };
  stats: {
    supply: string;
    supplyLabel: string;
    tax: string;
    taxLabel: string;
    chain: string;
    chainLabel: string;
  };
  mechanism: {
    title: string;
    forgeTitle: string;
    forgeDesc: string;
    buybackTitle: string;
    buybackDesc: string;
  };
  ico: {
    title: string;
    phases: {
      phase: string;
      amount: string;
      bnb: string;
      rate: string;
    }[];
  };
  risks: {
    title: string;
    desc: string;
  };
  footer: {
    rights: string;
  }
}