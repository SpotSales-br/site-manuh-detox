const brl = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export const formatBRL = (value: number) => brl.format(value);

export const formatInstallment = (total: number, count: number) =>
  `ou ${count}x de ${formatBRL(total / count)} sem juros`;
