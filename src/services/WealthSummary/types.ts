interface WealthSummary {
  id: number;
  model: string;
  year: number;
  stock: number;
}

export interface WealthSummaryData {
  wealthSummary: WealthSummary[];
}
