import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-analise',
  templateUrl: './analise-form.component.html',
  styleUrls: ['./analise-form.component.css'],

})
export class AnaliseFormComponent implements OnInit {

  data: Date|any
  constructor() {
    this.data = new Date();
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
