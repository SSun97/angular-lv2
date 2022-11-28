import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CompanyNameResult } from './company-name-result';
import { CompanyQuote } from './company-quote';
import { UserInput } from './user-input';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getCompanyName(userInput: UserInput): Observable<CompanyNameResult> {
    return this.http.get<CompanyNameResult>(`https://finnhub.io/api/v1/search?q=${userInput.stockSymbol}&token=ce2jociad3ia3rm8edu0ce2jociad3ia3rm8edug`);
  };

  getCompanyQuote(userInput: UserInput): Observable<CompanyQuote> {
    return this.http.get<CompanyQuote>(`https://finnhub.io/api/v1/quote?symbol=${userInput.stockSymbol}&token=ce2jociad3ia3rm8edu0ce2jociad3ia3rm8edug`);
  };
}
