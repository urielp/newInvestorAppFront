import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable, Input} from '@angular/core';

@Injectable()
export class UserService {


  constructor(private httpClient: HttpClient) {

  }

  getUserProfileById(id): Observable<any> {
    try {
      return this.httpClient.get<any>('http://localhost:8080/investor/investor/'+id);
    } catch (e) {
      console.log(e.message);
    }
  }

  updateUser$(id, userObject) {
    try {
      return this.httpClient.put('http://localhost:8080/investor/investor/updateInvestor/' + id, userObject);
    } catch (e) {
      console.log(e.message);
    }
  }
  addUser$(userObject) {
    try {
      return this.httpClient.post('http://localhost:8080/investor/addInvestor', userObject);
    } catch (e) {
      console.log(e.message);
    }
  }
}
