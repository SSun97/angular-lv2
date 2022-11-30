import { Injectable } from '@angular/core';
import { CompanyCurrentData } from './company-current-data';

@Injectable({
  providedIn: 'root'
})
export class CompanySelectedService {

  companySelected: CompanyCurrentData[] = [];
  constructor() { }
}
