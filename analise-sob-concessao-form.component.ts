import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import jsPDF from 'jspdf';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/clientes/clientes';
import { ClientesService } from 'src/app/clientes/clientes.service';
import { Analise } from '../analise';
import { AnaliseService } from '../analise.service';

@Component({
  selector: 'app-analise-sob-concessao-form',
  templateUrl: './analise-sob-concessao-form.component.html',
  styleUrls: ['./analise-sob-concessao-form.component.css']
})
export class AnaliseSobConcessaoFormComponent implements OnInit {

  data: string | any;
  id: number | any;
  analise: Analise | any;
  cliente: Cliente | any;
  analiseCpf: number | any;
  analisePendencias: number | any;
  analiseRenda: number | any;
  analisePerc: number | any;
  situacao: string | any;
  concessao: string | any;
  idCliente: number | any;
  idPedido: number | any;
  sucess: Boolean = false;
  errors: String | any;
  dataAnalise: string | any;
  score: number | any;
  classificacao: string | any;

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private clienteService: ClientesService,
    private service: AnaliseService,
    private router: Router) { 

    }

  ngOnInit(): void {
    let params: Observable<Params> = this.activatedRoute.params
    params.subscribe(urlParams => {
      this.id = Number(urlParams['id'])
      if (this.id) {
        this.service.getById(this.id).subscribe(
          response => this.analise = response, errorResponse => this.analise = null
        )
      }
    });
  }

  public gerarPDF() {

    const analise: Analise = {
      dataAnalise: this.analise?.dataAnalise,
      analiseCpf: "Analise CPF",
      analiseRenda: "Analise Renda",
      analisePendencias: "Analise Pendencias",
      analisePerc: "Analise Perc",
      score: "Score",
      situacao: "Situacao",
      id: "Situacao",
      concessao: "Situacao",
      idCliente: "Situacao",
      idPedido: "Situacao",
      classificacao: "Situacao"
    };
    this.criaModelo(1, 1, 1, this.analise);
  }



  private criaModelo(idCliente: number, idPedido: number, id: number, analise: Analise): void {
    let documento = new jsPDF();
    documento.setFont("Courier", 'bold');
    documento.setFontSize(20);
    documento.text("Análise de Crédito", 60, 15);

    documento.setFontSize(10);

    this.setTexto(documento, "IdCliente", 10, 20, 'bold');
    this.setTexto(documento, analise.idCliente.id.toString(), 10, 25, 'normal');

    this.setTexto(documento, "Pedido", 10, 30, 'bold');
    this.setTexto(documento, analise.idPedido.id.toString(), 10, 35, 'normal');

    this.setTexto(documento, "Data Analise", 10, 40, 'bold');
    this.setTexto(documento, analise.dataAnalise.toString(), 10, 45, 'normal');

    this.setTexto(documento, "Analise de crédito n°", 10, 50, 'bold');
    this.setTexto(documento, analise.id.toString(), 10, 55, 'normal');

    this.setTexto(documento, "TIPO ANALISE", 10, 70, 'bold');
    this.setTexto(documento, "SCORE", 120, 70, 'bold');

    this.setTexto(documento, "ANALISE POR CPF", 10, 75, 'bold');
    this.setTexto(documento, analise.analiseCpf.toString(), 120, 75, 'normal');

    this.setTexto(documento, "ANALISE DE PENDENCIA", 10, 80, 'bold');
    this.setTexto(documento, analise.analisePendencias.toString(), 120, 80, 'normal');

    this.setTexto(documento, "ANALISE POR RENDA", 10, 85, 'bold');
    this.setTexto(documento, analise.analiseRenda.toString(), 120, 85, 'normal');

    this.setTexto(documento, "ANALISE POR PERCENTUAL DE ENDIVIDAMENTO", 10, 90, 'bold');
    this.setTexto(documento, analise.analisePerc.toString(), 120, 90, 'normal');

    this.setTexto(documento, "SCORE TOTAL", 10, 95, 'bold');
    this.setTexto(documento, analise.score.toString(), 120, 95, 'normal');

    this.setTexto(documento, "CLASSIFICACAO DO CLIENTE", 10, 100, 'bold');
    this.setTexto(documento, analise.classificacao.toString(), 120, 100, 'normal');


    this.setTexto(documento, "SITUAÇÃO:", 10, 120, 'bold');
    this.setTexto(documento, analise.situacao.toString(), 35, 120, 'normal');

    documento.save("Analise de crédito.pdf");
  }

  private setTexto(documento: jsPDF, texto: string, x: number, y: number, tipoFont: string): void {
    documento.setFont("Courier", tipoFont);
    documento.text(texto, x, y);
    documento.setFont("Courier", 'normal');
  }

  onSubmit(){}
}
