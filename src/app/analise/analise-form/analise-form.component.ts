import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/clientes/clientes';


@Component({
  selector: 'app-analise',
  templateUrl: './analise-form.component.html',
  styleUrls: ['./analise-form.component.css'],

})
export class AnaliseFormComponent implements OnInit {

  data: Date|any;
  cliente: Cliente|any;
  id:number|any;
  constructor() {
    
   }

  ngOnInit(): void {
    
  }
 
Alertar(){
  let justificativa =prompt("O CRÉDITO NÃO FOI LIBERADO PARA O CLIENTE, POR FAVOR JUSTIFIQUE SUA AUTORIZAÇÃO DE LIBERAÇÃO DO VALOR"); 
  console.log(justificativa);
  while(justificativa = ""){
    justificativa=prompt("O CRÉDITO NÃO FOI LIBERADO PARA O CLIENTE, POR FAVOR JUSTIFIQUE SUA AUTORIZAÇÃO DE LIBERAÇÃO DO VALOR");
  }

}
}
