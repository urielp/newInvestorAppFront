import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class InvestorService {
  invstorsBaseUrl = 'http://localhost:8080/investor';

  constructor(private httpClient: HttpClient) {

  }
  getInvestorsList(): Observable<{}> {
  return this.httpClient.get<any>(this.invstorsBaseUrl + '/investors');
  }

  getUserProfileById(id): Observable<any> {
    try {
      return this.httpClient.get<any>(this.invstorsBaseUrl + '/investor/' + id);
    } catch (e) {
      console.log(e.message);
    }
  }
}

