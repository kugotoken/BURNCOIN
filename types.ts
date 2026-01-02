export type Language = 'zh' | 'en';

export interface SectionContent {
  title: string;
  subtitle?: string;
  description: string | string[];
}

export interface SeedRoundData {
  phase: string;
  amount: string;
  bnbRaise: string;
  rate: string;
  price: string;
}

export interface DistributionData {
  name: string;
  value: number;
  amount: string;
  desc: string;
}

export interface Content {
  hero: {
    title: string;
    tagline: string;
    cta: string;
    contractLabel: string;
  };
  summary: SectionContent;
  vision: SectionContent;
  basics: {
    title: string;
    items: { label: string; value: string }[];
  };
  distribution: {
    title: string;
    data: DistributionData[];
  };
  seed: {
    title: string;
    subtitle: string;
    headers: string[]; // [Phase, Amount, BNB, Rate, Price]
    data: SeedRoundData[];
    returns: string[];
    listingPrice: string;
  };
  mechanics: {
    title: string;
    part1: {
      title: string;
      desc: string;
      narrative: string;
      logic: string;
    };
    part2: {
      title: string;
      desc: string;
      narrative: string;
      mechanism: string;
    };
  };
  value: {
    title: string;
    core: string;
    points: { title: string; desc: string }[];
  };
  footer: {
    disclaimer: string;
    copyright: string;
  };
}