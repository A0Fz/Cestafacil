import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CorreiosService {
  private baseUrl = "https://viacep.com.br/ws/"
  constructor(public http: Http) {}
  localizarEndereco(cep:string){
    return this.http.get(this.baseUrl + cep + "/json/");
  }
}
