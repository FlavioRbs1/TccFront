import { Component, OnInit } from '@angular/core';
import { Cliente} from '../clientes'
@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  clientec: Cliente | any;

  constructor() {
    this.clientec = new Cliente();
    this.clientec.nome = 'Flavio';
   }

  ngOnInit(): void {
  }

  clicar(){
    console.log(Cliente)
  }

}
