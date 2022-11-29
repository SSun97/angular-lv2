import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { CompanyCurrentData } from 'src/app/data/company-current-data';
import { DataService } from 'src/app/data/data.service';
import { UserInput } from 'src/app/data/user-input';
@Component({
  selector: 'st-track-stock',
  templateUrl: './track-stock.component.html',
  styleUrls: ['./track-stock.component.css']
})
export class TrackStockComponent implements OnInit {

  defaultUserInput: UserInput = {
    stockSymbol: ''
  }

  userInput: UserInput = {...this.defaultUserInput};

  companyCurrentDataList: CompanyCurrentData[] = [];
  companyCurrentData: CompanyCurrentData = {
    c: 0,
    dp: 0,
    h: 0,
    o: 0,
    name: '',
    code: ''
  }

  constructor(private dataService: DataService) { 
  }

  ngOnInit(): void {
  }
  
  onSubmit(form: NgForm): void {
    console.log('in onSubmit():', form.valid);
    const companyName$ = this.dataService.getCompanyName(this.userInput);
    const companyData$ = this.dataService.getCompanyQuote(this.userInput);

    if(form.valid) {
      forkJoin([companyName$, companyData$]).subscribe(([companyName, companyData]) => {
        this.companyCurrentData = {
          c: companyData.c,
          dp: companyData.dp,
          h: companyData.h,
          o: companyData.o,
          name: companyName.result[0].description,
          code: companyName.result[0].displaySymbol
        }
        this.companyCurrentDataList.splice(0,0,this.companyCurrentData);
        this.userInput = {...this.defaultUserInput};
      }
      );
  }
  }
}
