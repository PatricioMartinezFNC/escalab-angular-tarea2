import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GotService {

  constructor(private http: HttpClient) { }


  getGot(){

    return this.http.get(`https://thronesapi.com/api/v2/Characters`);     

  }

}
