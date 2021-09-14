import { Data } from "@angular/router";
import { Cliente } from "../clientes/clientes";
import { Pedido } from "../pedido/pedido";

export class Analise{
  
	id:number|any;
	analiseCpf:number|any;
    analisePendencias:number|any;
	analiseIdade:number|any;
    analisePerc:number|any;
	analiseProfissao:number|any;
	analiseRenda:number|any;
    concessao:string|any;
	dataAnalise:Data|any;
    situacao:string|any;
	cliente:Cliente|any;
	pedido:Pedido|any;
    
}