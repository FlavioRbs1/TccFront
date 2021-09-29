

export class Analise{
  
	id:number|any;
	analiseCpf:number=0;
    analisePendencias:number=0;
    analisePerc:number=0;
	analiseRenda:number=0;
    concessao:string|any
	dataAnalise:string|any;
	idCliente:number|any;
	idPedidos:number|any;
    situacao:string|any;


	constructor(idCliente:number,idPedidos:number,analisePerc:number,dataAnalise:string,analiseCpf:number,analisePendencias:number,analiseRenda:number,situacao:string,concessao:string){

		this.idCliente = idCliente;
		this.idPedidos = idPedidos;
		this.dataAnalise = dataAnalise;
		this.analiseCpf = analiseCpf;
    	this.analisePendencias = analisePendencias;
		this.analiseRenda = analiseRenda;
    	this.analisePerc = analisePerc;
    	this.situacao = situacao;
    	this.concessao = concessao;
	}
	
}