import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CompanyNameResult } from './company-name-result';
import { CompanyQuote } from './company-quote';
import { CompanySentimentResult } from './company-sentiment';
import { UserInput } from './user-input';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getCompanyName(userInput: UserInput): Observable<CompanyNameResult> {
    return this.http.get<CompanyNameResult>(`https://finnhub.io/api/v1/search?q=${userInput.stockSymbol.toUpperCase()}&token=ce2jociad3ia3rm8edu0ce2jociad3ia3rm8edug`);
  };

  getCompanyQuote(userInput: UserInput): Observable<CompanyQuote> {
    return this.http.get<CompanyQuote>(`https://finnhub.io/api/v1/quote?symbol=${userInput.stockSymbol.toUpperCase()}&token=ce2jociad3ia3rm8edu0ce2jociad3ia3rm8edug`);
  };
  
  getSentiment(symbol: string): Observable<CompanySentimentResult> {
    return this.http.get<CompanySentimentResult>(`https://finnhub.io/api/v1/stock/insider-sentiment?symbol=${symbol.toUpperCase()}&from=2022-08-01&to=2022-10-30&token=ce2jociad3ia3rm8edu0ce2jociad3ia3rm8edug`);
  }
}
