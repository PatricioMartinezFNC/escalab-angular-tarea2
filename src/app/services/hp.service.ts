import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HpService {

  constructor(private http: HttpClient) { }

  getHp(){

    return this.http.get(`http://hp-api.herokuapp.com/api/characters/house/gryffindor`);     

  }

}
