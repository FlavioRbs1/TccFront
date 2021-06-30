import { Cliente } from "../clientes/clientes";

export class Rendas{
    id: number | any;
    cliente: Cliente | any;
    dependentes: number | any;
    profissao: string | any; 
    empresa: string | any;
    renda: number  | any;
    rendaFamiliar: number  | any;
    rendaTotal: number  | any;
}