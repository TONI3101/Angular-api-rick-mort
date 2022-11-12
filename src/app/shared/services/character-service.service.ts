import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterServiceService {

  constructor(private http: HttpClient) {}

  getcharacters(page: number){
    return this.http.get("https://rickandmortyapi.com/api/character/?page="+ page)
  }
}
