export interface FaqItem {
  question: string;
  answer: string;
}

export const productFaq: FaqItem[] = [
  {
    question: "Tem alguma contraindicação?",
    answer:
      "Por se tratar de um acelerador de metabolismo, algumas pessoas não podem fazer uso: cardíacos, hipertensos, gestantes, idosos acima de 55 anos, menores de idade e lactantes com bebê de menos de um ano.",
  },
  {
    question: "Tem efeito colateral?",
    answer:
      "Alguns organismos podem sentir: boca seca (tomar bastante água), sensação de coração acelerado, redução intensa da fome e sudorese (retenção de líquido saindo). Nem todos sentem os efeitos, não é obrigatório, e eles amenizam com o tempo.",
  },
  {
    question: "Os efeitos colaterais duram o tratamento todo?",
    answer:
      "Não. Somente na fase de adaptação, cerca de uma semana. Por isso pedimos para tomar dia sim / dia não na primeira semana.",
  },
  {
    question: "Qual o modo de uso?",
    answer:
      "Tomar 1 cápsula por dia após o café da manhã. Nunca tomar em jejum.",
  },
  {
    question: "Posso tomar após o almoço se não tomar café da manhã?",
    answer: "Pode, sem problema.",
  },
  {
    question: "Por que não posso tomar em jejum?",
    answer:
      "Por ser um suplemento, vai pesar no estômago como qualquer medicamento em jejum. Tomar com o estômago cheio evita desconforto ou vômito.",
  },
  {
    question: "Posso tomar 2 cápsulas por dia?",
    answer: "Não pode. Sobrecarrega os rins.",
  },
  {
    question: "Terei resultado com 1 pote?",
    answer:
      "Sim. Garantimos que você perderá peso com um pote, mas não podemos garantir o peso exato, pois cada organismo reage de uma forma.",
  },
  {
    question: "Qual a média de perda de peso com 1 pote?",
    answer:
      "A média é de 3 a 6 kg por pote, lembrando que cada organismo reage de forma diferente.",
  },
  {
    question: "E se eu não perder peso?",
    answer:
      "Se você comprovar, com fotos datadas e prints da alimentação, que em 15 dias não perdeu nenhum quilo, devolvemos seu dinheiro.",
  },
  {
    question: "E se o produto não chegar?",
    answer:
      "Acompanhamos a rota do produto. Se não chegar por erro de terceiros, reenviamos.",
  },
  {
    question: "Qual o prazo de entrega?",
    answer:
      "Coletas do Correio acontecem terça e quinta à tarde. Assim que enviamos, você recebe o código de rastreio no e-mail. Em cidades da região (São Martinho, Armazém, Gravatal, Tubarão, Capivari, Braço do Norte, São Ludgero, Grão Pará, Rio Fortuna, Santa Rosa de Lima, Pinheiral) a entrega é feita por motoboy às segundas, quartas e sextas.",
  },
  {
    question: "Posso pagar em dinheiro?",
    answer:
      "Não. A entrega é feita por empresa terceirizada e a compra é feita no site com pagamento antecipado. Aceitamos PIX e cartão de crédito / débito.",
  },
  {
    question: "Posso consumir bebida alcoólica fazendo uso do suplemento?",
    answer:
      "Não recomendamos. O suplemento já acelera o metabolismo e o álcool também, o que pode potencializar efeitos indesejados.",
  },
];

export const productTrustBadges = [
  { title: "100% Natural", description: "Fórmula à base de ervas" },
  { title: "Garantia de 15 dias", description: "Resultado ou dinheiro de volta" },
  { title: "Alvará de vendas", description: "Tudo dentro da lei" },
  { title: "Mais de 2.500 clientes", description: "Com resultados reais" },
] as const;

export const productStats = [
  { value: "+2.500", label: "mulheres transformadas" },
  { value: "30kg", label: "que a Manu perdeu" },
  { value: "3 a 6kg", label: "média por pote" },
  { value: "15 dias", label: "garantia de resultado" },
] as const;
