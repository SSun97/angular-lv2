import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }
  
  onSubmit(form: NgForm): void {
    console.log('in onSubmit():', form.valid);
    if (form.valid) {
      this.dataService.getCompanyName(this.userInput).subscribe(
        result => console.log(result.result[0].description),
        error => console.log(error)
      );
      this.dataService.getCompanyQuote(this.userInput).subscribe(
        result => console.log(result),
        error => console.log(error)
      );
    }
  }

}
