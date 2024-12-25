import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor( private http: HttpClient) { }
  url="http://localhost:8080/getClient"
insertData(data:any){
  return this.http.post(this.url, data)
}

}
