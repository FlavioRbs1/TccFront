import { Cliente } from "../clientes/clientes";
import { Pedidos } from "../pedido/pedidos";

export class Historico{
    id:number|any;
    idCliente:Cliente|any;
    idPedido:Pedidos|any;
    situacao:string|any;
    dataAnalise:string|any;
}