export const benefits = [
  {
    icon: "\u{1F33F}",
    title: "100% Natural",
    description:
      "Ingredientes naturais selecionados, sem químicos agressivos ou conservantes artificiais.",
  },
  {
    icon: "\u{1F525}",
    title: "Reduz a Fome em 80%",
    description:
      "Fórmulas que ajudam a controlar a compulsão alimentar e a vontade de doces de forma natural.",
  },
  {
    icon: "\u{1F49C}",
    title: "Resultados Reais",
    description:
      "Mais de 2.500 clientes satisfeitas com resultados visíveis já nas primeiras semanas.",
  },
] as const;

export const trustItems = [
  { icon: "\u{1F69A}", text: "Frete grátis acima de R$ 500" },
  { icon: "\u{1F512}", text: "Pagamento seguro" },
  { icon: "\u{1F331}", text: "Ingredientes naturais" },
  { icon: "\u{1F501}", text: "Troca garantida" },
] as const;

export const aboutStats = [
  { value: "2.500+", label: "Clientes satisfeitas" },
  { value: "6", label: "Produtos premium" },
  { value: "4.8", label: "Avaliação média" },
] as const;

export const navItems = [
  { href: "#produtos", label: "Produtos" },
  { href: "#beneficios", label: "Benefícios" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
] as const;

export const productPageNavItems = [
  { href: "/", label: "Home" },
  { href: "/produto/plena", label: "Plena" },
  { href: "/produto/lifefit", label: "Lifefit" },
] as const;

export interface HowToUseStep {
  number: string;
  title: string;
  description: string;
}

export const howToUseSteps: HowToUseStep[] = [
  {
    number: "01",
    title: "Tome 1 cápsula por dia",
    description:
      "Após o café da manhã, nunca em jejum. Com um copo grande de água.",
  },
  {
    number: "02",
    title: "Adapte na primeira semana",
    description:
      "Dia sim, dia não nos primeiros 7 dias para o corpo se acostumar com a fórmula.",
  },
  {
    number: "03",
    title: "Veja a transformação",
    description:
      "A partir da segunda semana, rotina diária. Menos inchaço, mais leveza e energia.",
  },
];

export interface TestimonialCard {
  initials: string;
  name: string;
  timeAgo: string;
  quote: string;
  highlights: string[];
}

export const testimonialCards: TestimonialCard[] = [
  {
    initials: "AM",
    name: "Ana M.",
    timeAgo: "há 5 dias",
    quote:
      "Comecei faz 5 dias e já desinchou MUITO. Me senti com mais leveza no mesmo dia.",
    highlights: ["desinchou MUITO", "leveza"],
  },
  {
    initials: "CS",
    name: "Carla S.",
    timeAgo: "há 1 semana",
    quote:
      "Nunca tive intestino tão regulado. Minha energia mudou completamente.",
    highlights: ["energia"],
  },
  {
    initials: "LF",
    name: "Laura F.",
    timeAgo: "há 10 dias",
    quote:
      "Me sinto mais leve o dia todo. A barriga estufada simplesmente sumiu.",
    highlights: ["leve"],
  },
  {
    initials: "JR",
    name: "Juliana R.",
    timeAgo: "há 2 semanas",
    quote:
      "A compulsão por doce sumiu. Comecei a comer menos sem nem perceber.",
    highlights: ["compulsão por doce sumiu"],
  },
  {
    initials: "PB",
    name: "Patrícia B.",
    timeAgo: "há 3 semanas",
    quote:
      "Já perdi 4kg no primeiro pote. A barriga tá sequinha e a disposição voltou.",
    highlights: ["4kg", "disposição voltou"],
  },
  {
    initials: "FO",
    name: "Fernanda O.",
    timeAgo: "há 1 mês",
    quote:
      "Melhor suplemento que já tomei. Natural, sem enjoo e com resultado de verdade.",
    highlights: ["resultado de verdade"],
  },
];
