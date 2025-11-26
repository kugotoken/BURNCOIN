export type Language = 'zh' | 'en';

export interface ICOPhase {
  stage: string;
  amount: string;
  bnbCap: string;
  rate: string;
  roi: string;
}

export interface ContentData {
  nav: {
    home: string;
    vision: string;
    tokenomics: string;
    ico: string;
    mechanism: string;
    whitepaper: string;
  };
  hero: {
    title: string;
    slogan: string;
    contractLabel: string;
    cta: string;
    telegram: string;
  };
  abstract: {
    title: string;
    content: string[];
    quote: string;
  };
  vision: {
    title: string;
    description: string;
    points: string[];
  };
  tokenomics: {
    title: string;
    items: { label: string; value: string; note?: string }[];
    distributionTitle: string;
    distributionPoints: string[];
  };
  ico: {
    title: string;
    description: string;
    tableHeaders: string[];
    phases: ICOPhase[];
    notes: string[];
  };
  mechanism: {
    title: string;
    subtitle: string;
    forgeTitle: string;
    forgePoints: string[];
    buybackTitle: string;
    buybackPoints: string[];
    securityTitle: string;
    securityPoints: string[];
  };
  risk: {
    title: string;
    points: string[];
  };
  footer: {
    rights: string;
    disclaimer: string;
  };
}