import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CorreiosService {
  private baseUrl = "https://viacep.com.br/ws/"
  constructor(public http: HttpClient) {}
  localizarEndereco(cep:string){
    return this.http.get(this.baseUrl + cep + "/json/");
  }
}
