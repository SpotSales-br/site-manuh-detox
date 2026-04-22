export interface FaqItem {
  question: string;
  answer: string;
}

export const productFaq: FaqItem[] = [
  {
    question: "Tem alguma contraindicacao?",
    answer:
      "Por se tratar de um acelerador de metabolismo, algumas pessoas nao podem fazer uso: cardiacos, hipertensos, gestantes, idosos acima de 55 anos, menores de idade e lactantes com bebe de menos de um ano.",
  },
  {
    question: "Tem efeito colateral?",
    answer:
      "Alguns organismos podem sentir: boca seca (tomar bastante agua), sensacao de coracao acelerado, reducao intensa da fome e sudorese (retencao de liquido saindo). Nem todos sentem os efeitos, nao e obrigatorio, e eles amenizam com o tempo.",
  },
  {
    question: "Os efeitos colaterais duram o tratamento todo?",
    answer:
      "Nao. Somente na fase de adaptacao, cerca de uma semana. Por isso pedimos para tomar dia sim / dia nao na primeira semana.",
  },
  {
    question: "Qual o modo de uso?",
    answer:
      "Tomar 1 capsula por dia apos o cafe da manha. Nunca tomar em jejum.",
  },
  {
    question: "Posso tomar apos o almoco se nao tomar cafe da manha?",
    answer: "Pode, sem problema.",
  },
  {
    question: "Por que nao posso tomar em jejum?",
    answer:
      "Por ser um suplemento, vai pesar no estomago como qualquer medicamento em jejum. Tomar com o estomago cheio evita desconforto ou vomito.",
  },
  {
    question: "Posso tomar 2 capsulas por dia?",
    answer: "Nao pode. Sobrecarrega os rins.",
  },
  {
    question: "Terei resultado com 1 pote?",
    answer:
      "Sim. Garantimos que voce perdera peso com um pote, mas nao podemos garantir o peso exato, pois cada organismo reage de uma forma.",
  },
  {
    question: "Qual a media de perda de peso com 1 pote?",
    answer:
      "A media e de 3 a 6 kg por pote, lembrando que cada organismo reage de forma diferente.",
  },
  {
    question: "E se eu nao perder peso?",
    answer:
      "Se voce comprovar, com fotos datadas e prints da alimentacao, que em 15 dias nao perdeu nenhum quilo, devolvemos seu dinheiro.",
  },
  {
    question: "E se o produto nao chegar?",
    answer:
      "Acompanhamos a rota do produto. Se nao chegar por erro de terceiros, reenviamos.",
  },
  {
    question: "Qual o prazo de entrega?",
    answer:
      "Coletas do Correio acontecem terca e quinta a tarde. Assim que enviamos, voce recebe o codigo de rastreio no e-mail. Em cidades da regiao (Sao Martinho, Armazem, Gravatal, Tubarao, Capivari, Braco do Norte, Sao Ludgero, Grao Para, Rio Fortuna, Santa Rosa de Lima, Pinheiral) a entrega e feita por motoboy as segundas, quartas e sextas.",
  },
  {
    question: "Posso pagar em dinheiro?",
    answer:
      "Nao. A entrega e feita por empresa terceirizada e a compra e feita no site com pagamento antecipado. Aceitamos PIX e cartao de credito / debito.",
  },
  {
    question: "Posso consumir bebida alcoolica fazendo uso do suplemento?",
    answer:
      "Nao recomendamos. O suplemento ja acelera o metabolismo e o alcool tambem, o que pode potencializar efeitos indesejados.",
  },
];

export const productTrustBadges = [
  { title: "100% Natural", description: "Formula a base de ervas" },
  { title: "Garantia de 15 dias", description: "Resultado ou dinheiro de volta" },
  { title: "Alvara de vendas", description: "Tudo dentro da lei" },
  { title: "Mais de 2.500 clientes", description: "Com resultados reais" },
] as const;

export const productStats = [
  { value: "+2.500", label: "mulheres transformadas" },
  { value: "30kg", label: "que a Manu perdeu" },
  { value: "3 a 6kg", label: "media por pote" },
  { value: "15 dias", label: "garantia de resultado" },
] as const;
