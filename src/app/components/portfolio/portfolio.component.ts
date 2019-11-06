import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/porfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass']
})
export class PortfolioComponent implements OnInit {

  selectedType: 'vue' | 'Angular' | 'React' | 'html-css' = 'html-css';

  portfolios: Portfolio[];

  constructor(private portfolioSvc: PortfolioService) {
  }

  ngOnInit() {
    this.portfolioSvc.get().subscribe(
      data => {
        this.portfolios = data;
      }
    );
  }
}
