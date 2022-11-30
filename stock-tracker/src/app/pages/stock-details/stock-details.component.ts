import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanySemtiment } from 'src/app/data/company-sentiment';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'st-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent implements OnInit {

   companySentimentArray: CompanySemtiment[] = [];
   companyName = '';
   symbol: string = '';
  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    let symbol = this.route.snapshot.params['stockSymbol'];
    let companyName = this.route.snapshot.params['companyName'];
    console.log(symbol);
    if (symbol==null) {symbol=''}
    const companySentiment$ = this.dataService.getSentiment(symbol).subscribe((companySentiment) => {
      this.companySentimentArray = companySentiment.data;
      this.symbol = symbol;
      if(this.companySentimentArray.length <3 ) {
        this.symbol = symbol + '    Lacking of data for the last 3 months';
      }
      this.companyName = companyName;
    });
    
  }

   getMonthName(monthNumber: number): string {
    const date = new Date();
    date.setMonth(monthNumber - 1);
  
    return date.toLocaleString('en-US', { month: 'long' }).toUpperCase();
  }

}
