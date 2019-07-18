import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import {CorreiosService} from '../providers/correios.service';


@Component({
  selector: 'app-cadastrese',
  templateUrl: './cadastrese.page.html',
  providers:[
    CorreiosService
  ]
})
export class CadastresePage implements OnInit {
  cep:string;
  logradouro:string;
  bairro:string;
  cidade:string;
  estado:string;
  constructor(private cepsProvider: CorreiosService) { }

  ngOnInit() {
  }
  ionViewDidLoad(){
  }

  autoPreenchimento(){
    if(this.cep.length ==8){
      this.cepsProvider.localizarEndereco(this.cep).subscribe(
        data=>{
          const json = JSON.parse((data as any)._body);

          this.logradouro = json.logradouro;
          this.bairro = json.bairro;
          this.cidade = json.cidade;
          this.estado = json.estado;
        }, error=>{
          console.log(error);
        }
      )
    }
  }

}
