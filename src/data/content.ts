export const benefits = [
  {
    icon: "\u{1F33F}",
    title: "100% Natural",
    description:
      "Ingredientes naturais selecionados, sem quimicos agressivos ou conservantes artificiais.",
  },
  {
    icon: "\u{1F525}",
    title: "Reduz a Fome em 80%",
    description:
      "Formulas que ajudam a controlar a compulsao alimentar e a vontade de doces de forma natural.",
  },
  {
    icon: "\u{1F49C}",
    title: "Resultados Reais",
    description:
      "Mais de 2.500 clientes satisfeitas com resultados visiveis ja nas primeiras semanas.",
  },
] as const;

export const trustItems = [
  { icon: "\u{1F69A}", text: "Frete gratis acima de R$500" },
  { icon: "\u{1F512}", text: "Pagamento seguro" },
  { icon: "\u{1F331}", text: "Ingredientes naturais" },
  { icon: "\u{1F501}", text: "Troca garantida" },
] as const;

export const aboutStats = [
  { value: "2.500+", label: "Clientes satisfeitas" },
  { value: "6", label: "Produtos premium" },
  { value: "4.8", label: "Avaliacao media" },
] as const;

export const navItems = [
  { href: "#produtos", label: "Produtos" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#sobre", label: "Sobre" },
] as const;

export interface HowToUseStep {
  number: string;
  title: string;
  description: string;
}

export const howToUseSteps: HowToUseStep[] = [
  {
    number: "01",
    title: "Tome 1 capsula por dia",
    description:
      "Apos o cafe da manha, nunca em jejum. Com um copo grande de agua.",
  },
  {
    number: "02",
    title: "Adapte na primeira semana",
    description:
      "Dia sim, dia nao nos primeiros 7 dias para o corpo se acostumar com a formula.",
  },
  {
    number: "03",
    title: "Veja a transformacao",
    description:
      "A partir da segunda semana, rotina diaria. Menos inchaco, mais leveza e energia.",
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
    timeAgo: "ha 5 dias",
    quote:
      "Comecei faz 5 dias e ja desinchou MUITO. Me senti com mais leveza no mesmo dia.",
    highlights: ["desinchou MUITO", "leveza"],
  },
  {
    initials: "CS",
    name: "Carla S.",
    timeAgo: "ha 1 semana",
    quote:
      "Nunca tive intestino tao regulado. Minha energia mudou completamente.",
    highlights: ["energia"],
  },
  {
    initials: "LF",
    name: "Laura F.",
    timeAgo: "ha 10 dias",
    quote:
      "Me sinto mais leve o dia todo. A barriga estufada simplesmente sumiu.",
    highlights: ["leve"],
  },
  {
    initials: "JR",
    name: "Juliana R.",
    timeAgo: "ha 2 semanas",
    quote:
      "A compulsao por doce sumiu. Comecei a comer menos sem nem perceber.",
    highlights: ["compulsao por doce sumiu"],
  },
  {
    initials: "PB",
    name: "Patricia B.",
    timeAgo: "ha 3 semanas",
    quote:
      "Ja perdi 4kg no primeiro pote. A barriga ta sequinha e a disposicao voltou.",
    highlights: ["4kg", "disposicao voltou"],
  },
  {
    initials: "FO",
    name: "Fernanda O.",
    timeAgo: "ha 1 mes",
    quote:
      "Melhor suplemento que ja tomei. Natural, sem enjoo e com resultado de verdade.",
    highlights: ["resultado de verdade"],
  },
];
