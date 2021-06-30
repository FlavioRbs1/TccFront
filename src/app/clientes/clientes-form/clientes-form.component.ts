import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente} from '../clientes'
@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  clientec: Cliente |any;

  constructor(private service:ClientesService) {
    this.clientec = new Cliente();
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.salvar(this.clientec).subscribe(response =>{
      console.log(response);
    })
  }
}
