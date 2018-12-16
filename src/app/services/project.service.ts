import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ProjectsService {
  projectsBaseUrl = 'http://localhost:8080/projects';

  constructor(private httpClient: HttpClient) {

  }

  getProjectsrsList(): Observable<any> {
    return this.httpClient.get<any>(this.projectsBaseUrl);
  }
}
