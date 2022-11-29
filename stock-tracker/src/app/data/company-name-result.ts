export interface CompanyNameResult {
  count: number;
  result: Result[];
}

export interface Result {
  description: string;
  displaySymbol: string;
  symbol: string;
  type: string;
}