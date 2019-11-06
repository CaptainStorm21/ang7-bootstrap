import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Portfolio } from './portfolio.model';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private httpClient: HttpClient) { }

  get(): Observable<Portfolio[]> {
    return this.httpClient.get<Portfolio[]>(environment.apiUrl);
  }
}
