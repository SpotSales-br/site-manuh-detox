type AppmaxKit = {
  appmaxProductId: string;
  name: string;
  unitPrice: number;
};

export const APPMAX_KITS: Record<string, AppmaxKit> = {
  "plena-1un":   { appmaxProductId: "35463640", name: "Plena Única Premium 1 pote",      unitPrice: 180 },
  "plena-2un":   { appmaxProductId: "35463678", name: "Plena Única Premium Kit 2 potes", unitPrice: 300 },
  "lifefit-1un": { appmaxProductId: "35464205", name: "Life Fit Pro 1 pote",             unitPrice: 200 },
  "lifefit-2un": { appmaxProductId: "35464214", name: "Life Fit Pro Kit 2 potes",        unitPrice: 340 },
};
