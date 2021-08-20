import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from 'src/app/template/sidebar/sidebar.component';
import { Configuracao } from '../configuracao';

@Component({
  selector: 'app-configuracao-form',
  templateUrl: './configuracao-form.component.html',
  styleUrls: ['./configuracao-form.component.css']
})
export class ConfiguracaoFormComponent implements OnInit {

  cor:string | any;
  side:SidebarComponent|any;

  constructor() { 
    this.cor = new Configuracao();
  }

  ngOnInit(): void {
  }

  cores1(){
      this.cor = "red"; 
      color(this.cor);
    }
  cores2(){
    this.cor = "blue";
    color(this.cor);
  } 
  cores3(){  
  this.cor = "yellow";
  color(this.cor);
  }  
  cores4(){
     this.cor = "brown";
     color(this.cor);
  } 
  cores5(){
      this.cor = "black";
      color(this.cor);
  }
  
}
function color(cor: any) {
  console.log(cor);
  cor = "blue";
}

