import { Cliente } from "../clientes/clientes";

export class Pedidos{

    id: number| any;
    dia:Date|any;
    formaPagamento: string|any;
    parcelas: number|any;
    situacao:string|any;
    valor: number|any;
    idCliente: Cliente| any;
}