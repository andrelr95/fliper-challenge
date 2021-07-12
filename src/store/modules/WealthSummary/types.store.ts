export interface WealthSummary {
  id: number;
  total: number;
  profitability: number;
  hasHistory: boolean;
  gain: number;
  cdi: number;
}

export interface WealthSummaryState {
  payload: WealthSummary;
  loading: string;
}
