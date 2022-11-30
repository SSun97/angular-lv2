import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { StockDetailsComponent } from './pages/stock-details/stock-details.component';
import { TrackStockComponent } from './pages/track-stock/track-stock.component';

const routes: Routes = [
  { path: 'track-stock', component: TrackStockComponent },
  { path: 'sentiment/:stockSymbol/:companyName', component: StockDetailsComponent },
  { path: '', redirectTo: '/track-stock', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
