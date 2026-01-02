import { Content } from './types';

export const CONTENT_ZH: Content = {
  hero: {
    title: "BURN COIN",
    tagline: "极致通缩 · 动态锻造 · 永续销毁",
    cta: "加入社区",
    contractLabel: "合约地址 (BSC)",
  },
  summary: {
    title: "项目摘要",
    description: [
      "Burn Coin (BURN) 是部署于 Binance Smart Chain (BSC) 的极致通缩型加密资产。",
      "项目通过“分阶段公开认购 + 链上市价锻造 + 永续回购销毁”机制，持续减少市场流通量，目标打造 BSC 生态中最纯粹、最透明的通缩型价值资产。"
    ]
  },
  vision: {
    title: "项目愿景",
    subtitle: "拒绝复杂金融叙事与中心化干预",
    description: "唯一的治理行为即“回购销毁”。通过基金会真实资金回购、真实链上销毁，实现长期稀缺性与价值发现。"
  },
  basics: {
    title: "代币基础信息",
    items: [
      { label: "代币名称", value: "Burn Coin" },
      { label: "代币符号", value: "BURN" },
      { label: "链", value: "Binance Smart Chain (BEP-20)" },
      { label: "总供应量", value: "1,000,000,000 枚 (永久固定)" },
      { label: "初始流通", value: "100,000,000 枚" },
      { label: "交易税", value: "0%" },
      { label: "合约权限", value: "已放弃 (不可更改)" },
    ]
  },
  distribution: {
    title: "代币分配总览",
    data: [
      { name: "基金会", value: 41.25, amount: "4.125 亿", desc: "长期运营与战略发展储备。" },
      { name: "回购销毁/储备", value: 24.75, amount: "2.475 亿", desc: "协议收入用于回购销毁及紧急储备。" },
      { name: "社区激励", value: 16.5, amount: "1.65 亿", desc: "用于生态建设、空投及社区贡献者奖励。" },
      { name: "投资者", value: 9.5, amount: "9500 万", desc: "早期资本支持 (种子轮/私募)。" },
      { name: "团队", value: 5.0, amount: "5000 万", desc: "极低持仓比例，彰显长期建设决心，线性解锁。" },
      { name: "上市储备", value: 2.5, amount: "2500 万", desc: "预留 CEX 上线做市及活动激励。" },
      { name: "初始流动性", value: 0.5, amount: "500 万", desc: "确保 DEX 上线时具备足够的深度。" },
    ]
  },
  seed: {
    title: "种子轮认购",
    subtitle: "分阶段详情（逐步提高价格门槛，促进公平参与与价值发现）",
    headers: ["阶段", "分配代币数量", "募集 BNB", "兑换率 (BNB:BURN)", "折合币价"],
    data: [
      { phase: "第一期", amount: "10,000,000", bnbRaise: "10", rate: "1,000,000", price: "$0.00090" },
      { phase: "第二期", amount: "27,000,000", bnbRaise: "45", rate: "600,000", price: "$0.00150" },
      { phase: "第三期", amount: "58,000,000", bnbRaise: "145", rate: "400,000", price: "$0.00225" },
    ],
    returns: [
      "第一期上线收益 500%",
      "第二期上线收益 300%",
      "第三期上线收益 200%"
    ],
    listingPrice: "上线 PancakeSwap 初始价格: 0.0045 USDT / BURN"
  },
  mechanics: {
    title: "核心机制",
    part1: {
      title: "动态锻造 (Dynamic Minting)",
      desc: "价值锚定与自适应供应",
      narrative: "每一枚 $BURN 的产生都必须基于实时市场汇率注入等值的 BNB。这不是分发，是底层资产对协议价值的直接背书。",
      logic: "币价上涨 -> 锻造门槛提高 -> 自动抑制新增供应 -> 维持稀缺性。"
    },
    part2: {
      title: "协议回购 (Protocol-Owned Burn)",
      desc: "资产负债表驱动的“永续通缩”",
      narrative: "30% 现金流捕获。协议将锻造所得 BNB 的 30% 定义为“资本公积金”，由智能合约强制执行，用于在公开市场回购 $BURN。",
      mechanism: "回购后的代币将进入黑洞地址。不可逆销毁。"
    }
  },
  value: {
    title: "价值支撑",
    core: "核心叙事：BURN 锚定 BNB 价值蓝筹的“超额收益”引擎。",
    points: [
      { title: "深度锚定", desc: "每一个 $BURN 的产出都必须消耗 BNB 为代价，确保其生产成本随 BNB 价格波动而自动调节。" },
      { title: "双重通缩", desc: "投资者不仅享受 BNB 本身季度销毁带来的稀缺性溢价，还享受 BURN 协议内部的二次销毁。" },
      { title: "零摩擦", desc: "0% 交易税，打造“零成本”高频交易市场，吸引全球量化基金与套利机器人。" }
    ]
  },
  footer: {
    disclaimer: "本网站不构成投资建议，请参与者自行研究 (DYOR)。加密资产波动巨大，存在归零风险。",
    copyright: "© 2025 Burn Coin Foundation. All Rights Reserved."
  }
};

export const CONTENT_EN: Content = {
  hero: {
    title: "BURN COIN",
    tagline: "Hyper-Deflation · Dynamic Minting · Perpetual Burn",
    cta: "Join Community",
    contractLabel: "Contract Address (BSC)",
  },
  summary: {
    title: "Summary",
    description: [
      "Burn Coin (BURN) is a hyper-deflationary crypto asset deployed on Binance Smart Chain (BSC).",
      "Through 'Phased Public Subscription + On-Chain Market Minting + Perpetual Buyback & Burn', it continuously reduces market circulation, aiming to be the purest deflationary value asset in the BSC ecosystem."
    ]
  },
  vision: {
    title: "Vision",
    subtitle: "Rejecting complex financial narratives and centralized intervention.",
    description: "The only governance action is 'Buyback & Burn'. Through real fund buybacks and on-chain burning, we realize long-term scarcity and value discovery."
  },
  basics: {
    title: "Token Basics",
    items: [
      { label: "Name", value: "Burn Coin" },
      { label: "Symbol", value: "BURN" },
      { label: "Chain", value: "Binance Smart Chain (BEP-20)" },
      { label: "Total Supply", value: "1,000,000,000 (Fixed Forever)" },
      { label: "Initial Circ.", value: "100,000,000" },
      { label: "Tax", value: "0%" },
      { label: "Ownership", value: "Renounced (Immutable)" },
    ]
  },
  distribution: {
    title: "Distribution",
    data: [
      { name: "Foundation", value: 41.25, amount: "412.5M", desc: "Reserve for long-term operations and strategic development." },
      { name: "Buyback/Reserve", value: 24.75, amount: "247.5M", desc: "Protocol revenue allocated for buyback & burn and emergency reserves." },
      { name: "Community Incentives", value: 16.5, amount: "165M", desc: "For ecosystem growth, airdrops, and rewarding community contributors." },
      { name: "Investors", value: 9.5, amount: "95M", desc: "Early stage capital support (Seed/Private)." },
      { name: "Team", value: 5.0, amount: "50M", desc: "Low allocation with linear vesting, showing long-term commitment." },
      { name: "Exchange", value: 2.5, amount: "25M", desc: "Reserved for CEX listing MM and incentives." },
      { name: "Initial LP", value: 0.5, amount: "5M", desc: "Ensures sufficient depth at DEX launch." },
    ]
  },
  seed: {
    title: "Seed Rounds",
    subtitle: "Phased Details (Steadily increasing price threshold to promote fair participation)",
    headers: ["Phase", "Allocation", "BNB Raised", "Rate (BNB:BURN)", "Price"],
    data: [
      { phase: "Phase 1", amount: "10,000,000", bnbRaise: "10", rate: "1,000,000", price: "$0.00090" },
      { phase: "Phase 2", amount: "27,000,000", bnbRaise: "45", rate: "600,000", price: "$0.00150" },
      { phase: "Phase 3", amount: "58,000,000", bnbRaise: "145", rate: "400,000", price: "$0.00225" },
    ],
    returns: [
      "Phase 1 Expected Return 500%",
      "Phase 2 Expected Return 300%",
      "Phase 3 Expected Return 200%"
    ],
    listingPrice: "PancakeSwap Launch Price: 0.0045 USDT / BURN"
  },
  mechanics: {
    title: "Core Mechanics",
    part1: {
      title: "Dynamic Minting",
      desc: "Value Peg & Adaptive Supply",
      narrative: "Every $BURN minted must inject equivalent BNB based on real-time rates. This is not distribution; it is direct backing of protocol value.",
      logic: "Price Up -> Minting Cost Up -> Supply Growth Suppressed -> Scarcity Maintained."
    },
    part2: {
      title: "Protocol-Owned Burn",
      desc: "Balance Sheet Driven 'Perpetual Deflation'",
      narrative: "30% Cash Flow Capture. The protocol defines 30% of BNB from minting as 'Capital Reserve', automatically used to buy back $BURN.",
      mechanism: "Bought back tokens enter the black hole address. Irreversible burning."
    }
  },
  value: {
    title: "Value Support",
    core: "Narrative: BURN is the 'Excess Return' engine pegged to BNB value.",
    points: [
      { title: "Deep Peg", desc: "Production of $BURN consumes BNB, ensuring production cost adjusts automatically with BNB price volatility." },
      { title: "Dual Deflation", desc: "Investors enjoy BNB's quarterly burn scarcity plus BURN protocol's secondary internal burn." },
      { title: "Zero Friction", desc: "0% Tax creates a 'Zero Cost' high-frequency trading market, attracting global quant funds and arbitrage bots." }
    ]
  },
  footer: {
    disclaimer: "This website does not constitute investment advice. DYOR. Crypto assets are highly volatile and carry risks.",
    copyright: "© 2025 Burn Coin Foundation. All Rights Reserved."
  }
};