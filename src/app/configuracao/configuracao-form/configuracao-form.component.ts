import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuracao-form',
  templateUrl: './configuracao-form.component.html',
  styleUrls: ['./configuracao-form.component.css']
})
export class ConfiguracaoFormComponent implements OnInit {

  cor:String | any;

  constructor() { }

  ngOnInit(): void {
  }

  cores(valor:number){
 
  }
}
