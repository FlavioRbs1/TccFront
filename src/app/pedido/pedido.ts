import { Cliente } from "../clientes/clientes";

export class Pedido{

    id: number| any;
    cliente: Cliente| any;
    dia:Date|any;
    valor: number|any;
    formaPagamento: number|any;
    parcelas: number|any;
    situacao:string|any;
}