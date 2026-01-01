import { ContentData } from './types';

export const CONTRACT_ADDRESS = "0x18B1EFa66F0d9065557354823c31759105e0E0F1"; // Placeholder from PDF
export const TELEGRAM_LINK = "https://t.me/BSC_BURN";

export const CONTENT: Record<'zh' | 'en', ContentData> = {
  zh: {
    nav: {
      home: "首页",
      vision: "愿景",
      tokenomics: "代币经济",
      ico: "ICO",
      mechanism: "核心机制",
      whitepaper: "白皮书",
    },
    hero: {
      title: "Burn Coin (BURN)",
      slogan: "The Ultimate On-Chain Deflationary Forge Protocol\n极致通缩 · 纯链上锻造协议",
      contractLabel: "唯一合约地址",
      cta: "立即加入",
      telegram: "核心机制",
    },
    abstract: {
      title: "摘要",
      content: [
        "BURN 是部署在 Binance Smart Chain (BSC) 上的纯粹通缩型代币，总供应量永久固定为 10 亿枚。",
        "无任何增发权限、无团队预挖、无交易税、无貔貅机制、无中心化控制。",
        "项目核心理念：将“烧毁”进行到极致。",
        "通过链上锻造协议逐步解锁供应，同时基金会使用 30% 资金在公开市场回购并永久销毁 BURN，形成永续、硬核的通缩飞轮。",
        "无需网站、无需 DApp、无需所有权。一切皆链上、可验证、不可篡改。"
      ],
      quote: "Burn or be Burned."
    },
    vision: {
      title: "愿景",
      description: "在 DeFi 世界中，大多数项目依赖复杂叙事、团队背书或中心化干预来维持价值。BURN 反其道而行之：",
      points: [
        "我们相信真正的价值源于供应端的绝对稀缺与需求端的自然增长。",
        "我们拒绝一切非必要机制（税、质押、分红、锁仓团队份额）。",
        "唯一的“治理”行为 = 永久销毁。",
        "最终目标：通过市场锻造 + 基金会回购焚烧，让流通中的 BURN 越来越少，直至 BSC 生态中最纯粹的通缩资产。"
      ]
    },
    tokenomics: {
      title: "代币经济学",
      items: [
        { label: "代币符号", value: "BURN" },
        { label: "区块链", value: "Binance Smart Chain (BEP-20)" },
        { label: "总供应量", value: "1,000,000,000 (10亿)", note: "永久固定上限" },
        { label: "初始流通", value: "500 万枚 + ICO 9500 万枚" },
        { label: "交易税", value: "0%", note: "完全零税" },
        { label: "合约权限", value: "完全放弃", note: "无管理员、无暂停、无黑名单" }
      ],
      distributionTitle: "代币分配 (100% 链上透明)",
      distributionPoints: [
        "初始流动性: 500 万枚 BURN + 等值 BNB → 注入 PancakeSwap V3 集中流动性池 → Token 100% 销毁至 dead address (永久锁定，无人可移除)",
        "锻造池 (锁仓): 9 亿枚 BURN → 100% 发送至死地址，仅可通过锻造协议按实时币价解锁",
        "ICO 份额: 9500 万枚 (分阶段公平公开发售，所有 BNB 100% 进入基金会多签钱包，总募集目标 200 BNB)"
      ]
    },
    ico: {
      title: "ICO 阶段详情",
      description: "逐步提高价格门槛，促进公平参与与价值发现",
      tableHeaders: ["阶段", "分配代币数量", "募集 BNB 数量", "兑换率 (1 BNB = X BURN)", "收益预估"],
      phases: [
        { stage: "第一期", amount: "10,000,000", bnbCap: "10", rate: "1,000,000", roi: "500%" },
        { stage: "第二期", amount: "27,000,000", bnbCap: "45", rate: "600,000", roi: "300%" },
        { stage: "第三期", amount: "58,000,000", bnbCap: "145", rate: "400,000", roi: "200%" },
      ],
      notes: [
        "ICO 通过智能合约实现，按阶段顺序开放，先到先得。",
        "每阶段募集满额后自动进入下一阶段，或若未满额则剩余代币转入锻造池。",
        "所有募集 BNB 100% 用于基金会永续回购销毁，无任何扣除。"
      ]
    },
    mechanism: {
      title: "核心机制",
      subtitle: "纯链上上市价锻造 & 永续回购销毁",
      forgeTitle: "纯链上锻造",
      forgePoints: [
        "任何地址可直接链上转账调用锻造合约。",
        "输入：向锻造池支付实时等值 BNB（基于 PancakeSwap V3 价格）。",
        "输出：1:1 铸造解锁等量 BURN 至调用者地址。",
        "所有支付的 BNB 100% 自动进入基金会多签钱包。"
      ],
      buybackTitle: "永续回购销毁",
      buybackPoints: [
        "基金会将 ICO 所得 + 所有锻造所得 BNB 的 30% 用于公开市场回购 BURN（主要通过 PancakeSwap V3）。",
        "回购后立即发送至 0x000...dead 永久销毁。",
        "无固定周期、无保底比例、无上限。",
        "每笔销毁交易实时链上可见（BscScan 一键查询）。"
      ],
      securityTitle: "技术实现与安全性",
      securityPoints: [
        "所有合约已部署并放弃 owner，代码 100% 不可更改。",
        "流动性永久锁定在 PancakeSwap V3。",
        "无暂停函数、无迁移函数、无隐藏后门。"
      ]
    },
    risk: {
      title: "风险提示",
      points: [
        "加密资产价格波动极大，可能归零。",
        "项目虽然去中心化，项目团队为主导。",
        "锻造与回购依赖市场深度与链上价格。",
        "智能合约虽经审计，仍存在不可预知风险。",
        "ICO 参与需自行评估阶段性价格风险。",
        "本项目不构成投资建议，请自行研究 (DYOR)。"
      ]
    },
    footer: {
      rights: "© 2025 Burn Coin Protocol. All Rights Reserved.",
      disclaimer: "DeFi is risky. Please proceed with caution.",
    }
  },
  en: {
    nav: {
      home: "Home",
      vision: "Vision",
      tokenomics: "Tokenomics",
      ico: "ICO",
      mechanism: "Mechanism",
      whitepaper: "Whitepaper",
    },
    hero: {
      title: "Burn Coin (BURN)",
      slogan: "The Ultimate On-Chain Deflationary Forge Protocol",
      contractLabel: "Contract Address",
      cta: "Join Immediately",
      telegram: "Core Mechanism",
    },
    abstract: {
      title: "Abstract",
      content: [
        "BURN is a purely deflationary token deployed on Binance Smart Chain (BSC) with a permanently fixed total supply of 1 billion.",
        "No minting rights, no team pre-mine, no transaction tax, no honeypot mechanism, no centralized control.",
        "Core Philosophy: Taking 'Burn' to the extreme.",
        "Supply is gradually unlocked via the on-chain forge protocol, while 30% of funds are used by the foundation for buybacks and permanent burning, creating a perpetual deflationary flywheel.",
        "No website needed, no DApp needed, no ownership. Everything is on-chain, verifiable, and immutable."
      ],
      quote: "Burn or be Burned."
    },
    vision: {
      title: "Vision",
      description: "In DeFi, most projects rely on complex narratives, team backing, or centralized intervention to maintain value. BURN does the opposite:",
      points: [
        "We believe true value comes from absolute scarcity on the supply side and natural growth on the demand side.",
        "We reject all unnecessary mechanisms (taxes, staking, dividends, locked team shares).",
        "The only 'governance' action is Permanent Burning.",
        "Ultimate Goal: Through market forging + foundation buyback burns, the circulating BURN decreases continuously, becoming the purest deflationary asset on BSC."
      ]
    },
    tokenomics: {
      title: "Tokenomics",
      items: [
        { label: "Ticker", value: "BURN" },
        { label: "Chain", value: "Binance Smart Chain (BEP-20)" },
        { label: "Total Supply", value: "1,000,000,000 (1 Billion)", note: "Fixed Cap Forever" },
        { label: "Initial Circ.", value: "5M (Liq) + 95M (ICO)" },
        { label: "Tax", value: "0%", note: "Zero Tax" },
        { label: "Ownership", value: "Renounced", note: "No admin, no pause, no blacklist" }
      ],
      distributionTitle: "Distribution (100% On-Chain Transparent)",
      distributionPoints: [
        "Initial Liquidity: 5M BURN + BNB → PancakeSwap V3 Concentrated Pool → 100% LP Burned to dead address (Permanently Locked).",
        "Forge Pool (Locked): 900M BURN → Sent to dead address, unlockable only via forge protocol at real-time price.",
        "ICO Allocation: 95M (Phased fair launch, 100% BNB goes to multisig for buyback/burn, Target 200 BNB)."
      ]
    },
    ico: {
      title: "ICO Phases",
      description: "Stepwise price increase to promote fair participation and value discovery.",
      tableHeaders: ["Phase", "Token Amount", "BNB Cap", "Rate (1 BNB = X BURN)", "Est. ROI"],
      phases: [
        { stage: "Phase 1", amount: "10,000,000", bnbCap: "10", rate: "1,000,000", roi: "500%" },
        { stage: "Phase 2", amount: "27,000,000", bnbCap: "45", rate: "600,000", roi: "300%" },
        { stage: "Phase 3", amount: "58,000,000", bnbCap: "145", rate: "400,000", roi: "200%" },
      ],
      notes: [
        "ICO implemented via smart contract, opening sequentially. FCFS.",
        "Auto-progress to next phase when full. Unsold tokens move to Forge Pool.",
        "100% of raised BNB is used for perpetual buyback and burn. No deductions."
      ]
    },
    mechanism: {
      title: "Core Mechanism",
      subtitle: "On-Chain Forging & Perpetual Buyback Burn",
      forgeTitle: "On-Chain Forging",
      forgePoints: [
        "Any address can call the forge contract directly.",
        "Input: Pay real-time equivalent BNB to the forge pool (based on PancakeSwap V3).",
        "Output: Mint/Unlock 1:1 equivalent BURN to the caller.",
        "100% of paid BNB goes to foundation multisig."
      ],
      buybackTitle: "Perpetual Buyback Burn",
      buybackPoints: [
        "Foundation uses 100% of ICO + Forge proceeds for open market buybacks (PancakeSwap V3).",
        "Bought tokens are immediately sent to 0x000...dead.",
        "No fixed cycle, no floor ratio, no cap.",
        "Every burn is visible on-chain (BscScan)."
      ],
      securityTitle: "Security & Tech",
      securityPoints: [
        "Contracts deployed & ownership renounced. Code 30% immutable.",
        "Liquidity permanently locked in PancakeSwap V3.",
        "No pause, no migration, no hidden backdoors."
      ]
    },
    risk: {
      title: "Risk Disclosure",
      points: [
        "Crypto assets are highly volatile and may go to zero.",
        "Decentralized but team-initiated.",
        "Forging/Buybacks depend on market depth.",
        "Smart contracts have inherent risks despite audits.",
        "Assess price risks for ICO participation independently.",
        "DYOR (Do Your Own Research). Not financial advice."
      ]
    },
    footer: {
      rights: "© 2025 Burn Coin Protocol. All Rights Reserved.",
      disclaimer: "DeFi is risky. Please proceed with caution.",
    }
  }
};
