import { Content, Language } from './types';

export const CONTENT: Record<Language, Content> = {
  CN: {
    nav: {
      home: "首页",
      vision: "愿景",
      tokenomics: "代币经济",
      mechanism: "核心机制",
      ico: "ICO详情",
      whitepaper: "白皮书"
    },
    hero: {
      subtitle: "极致通缩 · 纯链上锻造协议",
      title: "BURN OR BE BURNED",
      desc: "BURN 是部署在 BSC 上的纯粹通缩型代币。无增发、无预挖、无交易税。通过市场锻造与基金会回购销毁，让流通中的 BURN 越来越少。",
      cta: "查看合约",
      tg: "加入社区"
    },
    vision: {
      title: "愿景与哲学",
      cards: [
        {
          title: "绝对稀缺",
          desc: "价值源于供应端的绝对稀缺与需求端的自然增长。我们拒绝一切非必要机制。"
        },
        {
          title: "唯一治理",
          desc: "唯一的“治理”行为 = 永久销毁。基金会使用100%募集资金在公开市场回购并销毁。"
        },
        {
          title: "去中心化",
          desc: "合约权限已完全放弃。无管理员、无暂停、无黑名单。一切链上可验证。"
        }
      ]
    },
    stats: {
      supply: "10 亿",
      supplyLabel: "总供应量 (固定)",
      tax: "0%",
      taxLabel: "买卖交易税",
      chain: "BSC",
      chainLabel: "Binance Smart Chain"
    },
    mechanism: {
      title: "核心运行机制",
      forgeTitle: "纯链上市价锻造",
      forgeDesc: "任何地址可直接调用合约，支付等值BNB（基于PancakeSwap V3价格）1:1 铸造解锁等量BURN。所有BNB自动进入基金会多签钱包。",
      buybackTitle: "永续回购销毁",
      buybackDesc: "基金会将所有收益的 100% 用于公开市场回购 BURN，并立即发送至黑洞地址永久销毁。通缩飞轮效应启动。"
    },
    ico: {
      title: "ICO 分阶段详情",
      phases: [
        {
          phase: "第一期",
          amount: "50,000,000 BURN",
          bnb: "募集 40 BNB",
          rate: "1 BNB = 1,250,000 BURN"
        },
        {
          phase: "第二期",
          amount: "30,000,000 BURN",
          bnb: "募集 60 BNB",
          rate: "1 BNB = 500,000 BURN"
        },
        {
          phase: "第三期",
          amount: "15,000,000 BURN",
          bnb: "募集 100 BNB",
          rate: "1 BNB = 150,000 BURN"
        }
      ]
    },
    risks: {
      title: "风险提示",
      desc: "加密资产价格波动极大，可能归零。本项目不构成投资建议，请自行研究 (DYOR)。智能合约虽经审计，仍可能存在不可预知风险。"
    },
    footer: {
      rights: "© 2025 Burn Coin Protocol. All Rights Reserved."
    }
  },
  EN: {
    nav: {
      home: "Home",
      vision: "Vision",
      tokenomics: "Tokenomics",
      mechanism: "Mechanism",
      ico: "ICO",
      whitepaper: "Whitepaper"
    },
    hero: {
      subtitle: "The Ultimate On-Chain Deflationary Protocol",
      title: "BURN OR BE BURNED",
      desc: "BURN is a pure deflationary token on BSC. No minting, no pre-mine, no tax. Through market forging and buyback burns, the circulating supply only decreases.",
      cta: "View Contract",
      tg: "Join Community"
    },
    vision: {
      title: "Vision & Philosophy",
      cards: [
        {
          title: "Absolute Scarcity",
          desc: "Value comes from absolute scarcity on the supply side and natural growth on the demand side."
        },
        {
          title: "Only Governance",
          desc: "The only 'governance' action is permanent burning. 100% of raised funds are used for buybacks."
        },
        {
          title: "Decentralized",
          desc: "Contract ownership renounced. No admin keys, no pause, no blacklist. Fully verifiable on-chain."
        }
      ]
    },
    stats: {
      supply: "1 Billion",
      supplyLabel: "Total Supply (Fixed)",
      tax: "0%",
      taxLabel: "Transaction Tax",
      chain: "BSC",
      chainLabel: "Binance Smart Chain"
    },
    mechanism: {
      title: "Core Mechanisms",
      forgeTitle: "On-Chain Market Forge",
      forgeDesc: "Any address can call the contract, pay BNB (based on PancakeSwap V3 price) to mint 1:1 unlocked BURN. All BNB goes to the foundation wallet.",
      buybackTitle: "Perpetual Buyback & Burn",
      buybackDesc: "The Foundation uses 100% of proceeds to buy back BURN on the open market and immediately sends it to the dead address. The Deflationary Flywheel."
    },
    ico: {
      title: "ICO Phases",
      phases: [
        {
          phase: "Phase 1",
          amount: "50,000,000 BURN",
          bnb: "Raise 40 BNB",
          rate: "1 BNB = 1,250,000 BURN"
        },
        {
          phase: "Phase 2",
          amount: "30,000,000 BURN",
          bnb: "Raise 60 BNB",
          rate: "1 BNB = 500,000 BURN"
        },
        {
          phase: "Phase 3",
          amount: "15,000,000 BURN",
          bnb: "Raise 100 BNB",
          rate: "1 BNB = 150,000 BURN"
        }
      ]
    },
    risks: {
      title: "Risk Disclosure",
      desc: "Crypto assets are highly volatile and can go to zero. This is not financial advice. DYOR. Smart contracts may have unforeseen risks despite audits."
    },
    footer: {
      rights: "© 2025 Burn Coin Protocol. All Rights Reserved."
    }
  }
};