export class Metricas{
    id : number = 1;
    analiseCpf: boolean | any;
    analiseEstCivil: boolean | any;
    analiseIdade: boolean | any;
    analisePercEndiv: boolean | any;
    analiseProfissao: boolean | any;
    analiseRenda: boolean | any;
    classAmarelo: number | any;
    classAzul: number | any;
    classVerde: number | any;
    classVermelho: number | any;
    libAutomatica: boolean | any;
    limiteCredito: number | any;
    percentual: number | any;

    constructor(analiseCpf: boolean,analiseEstCivil: boolean,analiseIdade: boolean,
        analisePercEndiv: boolean,analiseProfissao: boolean,analiseRenda: boolean,
        classAmarelo: number,classAzul: number,classVerde: number,classVermelho: number,
        libAutomatica: boolean,limiteCredito: number,percentual: number){
            
    this.analiseCpf=analiseCpf;
    this.analiseEstCivil=analiseEstCivil;
    this.analiseIdade=analiseIdade;
    this.analiseProfissao=analiseProfissao;
    this.analiseRenda=analiseRenda;
    this.analisePercEndiv=analisePercEndiv;
    this.libAutomatica=libAutomatica;
    this.classVermelho=classVermelho;
    this.classAmarelo=classAmarelo;
    this.classVerde=classVerde;
    this.classAzul=classAzul;
    this.limiteCredito=limiteCredito;
    this.percentual=percentual;

    }
}