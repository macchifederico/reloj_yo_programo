import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  url= `${environment.apiBaseURL}'/login'`;
  currentUserSubject: BehaviorSubject<any>;

  constructor(private http: HttpClient) { 
    this.currentUserSubject= new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')||'{}'))
  }

  iniciarSersion(credentials:any):Observable<any>{
    return this.http.post(this.url,credentials).pipe(
      map(data=> {
        sessionStorage.setItem('currentUser', JSON.stringify(data));
        return data;
        }
      )
    )
  }
}
