import { Component, OnInit } from '@angular/core';
import { Alert } from 'bootstrap';
import { AnaliseService } from 'src/app/analise/analise.service';
import { ClientesService } from 'src/app/clientes/clientes.service';
import { Cliente } from '../clientes';

@Component({
  selector: 'app-clientes-cartao',
  templateUrl: './clientes-cartao.component.html',
  styleUrls: ['./clientes-cartao.component.css']
})
export class ClientesCartaoComponent implements OnInit {

  cliente: Cliente | any;
  situacao: String ="";
  id:number|any;
  cpf:string|any;
  retorno:boolean|any;

  constructor( private service: ClientesService, private serviceAnalise:AnaliseService ) {
    this.cliente = new Cliente();
   }

  ngOnInit(): void {
    
  }
  salvaCliente(){
    let cliente = this.cliente
    this.service.validaFormulario(cliente);
    this.libera(cliente)

  }

  libera(cliente: Cliente) {
    this.service.salvar(cliente).subscribe(
      response => this.cliente = response, errorResponse => this.cliente = null
    );
    alert('Cliente salvo com sucesso')
  }
  verifica(){
    console.log(this.id)
  }
  onSubmit(){
  }
  validaCpf(){
    const cpf = this.cliente.cpf;
    this.service.validaCpf(cpf).subscribe(
      resposta => this.retorno = resposta
    );
     
  }
  verificaCpf(){
    if (this.retorno === true){
      alert('O CPF já esta cadastrado como cliente')
      this.cliente.cpf =""
      alert('Informe um CPF válido' )
    }
  }
  
}
