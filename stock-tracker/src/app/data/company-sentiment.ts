export interface CompanySemtiment {
  symbol: string;
  year: number;
  month: number;
  change: number;
  mspr: number;
}

export interface CompanySentimentResult {
  data: CompanySemtiment[];
}
