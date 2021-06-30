import { Component, OnInit } from '@angular/core';
import { EnderecosService } from 'src/app/enderecos.service';
import { Enderecos } from '../enderecos';

@Component({
  selector: 'app-enderecos-form',
  templateUrl: './enderecos-form.component.html',
  styleUrls: ['./enderecos-form.component.css']
})
export class EnderecosFormComponent implements OnInit {

 enderecosc: Enderecos | any;

 constructor(private service: EnderecosService){
   this.enderecosc = new Enderecos();
 }

  ngOnInit(): void {
    
  }
  
  onSubmit(){
    this.service.salvar(this.enderecosc).subscribe(response =>{
      console.log(response);
    } )
  }

}
