export interface GlossaryTerm {
  english: string;
  swahili: string;
  explanation: string;
}

export interface EducationalInitiative {
  title: string;
  role: string;
  organization: string;
  description: string;
  impact: string;
  status: "Ongoing" | "Completed" | "Active Proposal";
  links: { label: string; url: string }[];
}

export const educationalInitiatives: EducationalInitiative[] = [
  {
    title: "Mastering Bitcoin (3rd Edition) Swahili Translation",
    role: "Lead Translator & Initiative Coordinator",
    organization: "Bitsacco / Open Source",
    description:
      "A community-driven technical translation initiative aimed at translating Andreas M. Antonopoulos & David A. Harding's definitive technical book 'Mastering Bitcoin (3rd Edition)' into Kiswahili for East African developers and students.",
    impact:
      "Bridges the technical knowledge gap for 200+ million Swahili speakers across Kenya, Tanzania, Uganda, Rwanda, and DRC, moving beyond surface-level introductory guides to rigorous protocol mechanics.",
    status: "Active Proposal",
    links: [
      {
        label: "Mastering Bitcoin Proposal (Issue #1221)",
        url: "https://github.com/bitcoinbook/bitcoinbook/issues/1221",
      },
    ],
  },
  {
    title: "BTCPay Server Complete Swahili UI Localization",
    role: "Maintainer / Contributor",
    organization: "BTCPay Server Ecosystem",
    description:
      "Implemented and reviewed 100% of the Swahili language pack for BTCPay Server's Point of Sale, invoice checkout, accounting, and store management user interfaces.",
    impact:
      "Empowers grassroots merchants and local cooperatives in East Africa to accept self-hosted Bitcoin payments without relying on English-only interfaces.",
    status: "Completed",
    links: [
      {
        label: "BTCPay Translator PR #91",
        url: "https://github.com/btcpayserver/btcpayserver-translator/pull/91",
      },
      {
        label: "Localization Proposal #7389",
        url: "https://github.com/btcpayserver/btcpayserver/issues/7389",
      },
    ],
  },
  {
    title: "Grassroots Bitcoin Technical Education in Kibra & Nairobi",
    role: "Bitcoin Educator & Developer",
    organization: "Bitsacco",
    description:
      "Delivering hands-on workshops on Bitcoin protocol foundations, sovereign node verification, hardware wallet opsec, Lightning Network channel management, and UTXO privacy in local community spaces.",
    impact:
      "Directly educated grassroots community members, youth builders, and small merchant operators on sovereign financial tools and Bitcoin systems.",
    status: "Ongoing",
    links: [
      {
        label: "Bitsacco Community",
        url: "https://github.com/comwanga",
      },
    ],
  },
];

export const swahiliGlossary: GlossaryTerm[] = [
  {
    english: "Unspent Transaction Output (UTXO)",
    swahili: "Matokeo ya Muamala Yasiyotumika (UTXO)",
    explanation: "Sehemu ya sarafu ya Bitcoin inayoweza kutumiwa kama pembejeo katika muamala mpya.",
  },
  {
    english: "Lightning Channel",
    swahili: "Njia ya Malipo ya Umeme (Lightning Channel)",
    explanation: "Makubaliano ya kifedha kati ya pande mbili yanayowezesha malipo ya papo hapo nje ya mnyororo.",
  },
  {
    english: "Mempool",
    swahili: "Kikapu cha Miamala (Mempool)",
    explanation: "Hifadhi ya muda ya miamala iliyothibitishwa na nodi lakini bado haijaingizwa kwenye kitalu.",
  },
  {
    english: "Multisig (Multi-signature)",
    swahili: "Sahihi Nyingi (Multisig)",
    explanation: "Mfumo wa usalama unaohitaji idhini ya funguo zaidi ya moja ili kuruhusu matumizi ya sarafu.",
  },
  {
    english: "Timelock",
    swahili: "Kufunga kwa Muda (Timelock)",
    explanation: "Masharti ya kikanuni yanayozuia matumizi ya Bitcoin hadi muda au kitalu maalum kitakapofika.",
  },
  {
    english: "Self-Custody / Sovereignty",
    swahili: "Ulinzi Binafsi wa Funguo (Self-Custody)",
    explanation: "Umiliki kamili wa sarafu zako kupitia uhifadhi wa funguo za siri bila kutegemea mtu wa tatu.",
  },
];
