import { Component, OnInit } from '@angular/core';
import { Historico } from '../historico';
import { HistoricoService } from '../historico.service';

@Component({
  selector: 'app-historico-form',
  templateUrl: './historico-form.component.html',
  styleUrls: ['./historico-form.component.css']
})
export class HistoricoFormComponent implements OnInit {

  historico: Historico[]=[];
  _historico:Historico[]=[];
  idPedido:String="";

  constructor(
    private service: HistoricoService) {
      
    }
    
    ngOnInit(): void {
      this.service.getAnalise().subscribe(
        resposta => {this.historico = resposta,this._historico=resposta}
      );
     }
     filtra(filtro:any){
       console.log(filtro)
      this.historico = this._historico.filter(historico=>historico.idPedido?.id === Number(filtro.value))
     }


}
