import { Component, OnInit } from '@angular/core';
import { Historico } from '../historico';
import { HistoricoService } from '../historico.service';

@Component({
  selector: 'app-historico-form',
  templateUrl: './historico-form.component.html',
  styleUrls: ['./historico-form.component.css']
})
export class HistoricoFormComponent implements OnInit {

  historico: Historico|any;

  constructor(
    private service: HistoricoService) {
      this.historico = new Historico();
    }
    
    ngOnInit(): void {
      this.service.getAnalise().subscribe(
        resposta => this.historico = resposta
      );
     }

}
