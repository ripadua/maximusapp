import { Cliente } from "./cliente";
import { TipoConsumo } from "../enums/tipo-consumo.enum";
import { PedidoProduto } from "./pedido-produto";
import { FormaPagamento } from "../enums/forma-pagamento.enum";
import { SituacaoPedido } from "../enums/situacao-pedido.enum";
import { Deserializable } from "./deserializable";

export class Pedido implements Deserializable {
    id: number;
    numero: number;
    cliente: Cliente;
    dataHoraCriacao: Date;
    dataHoraEntrega: Date;
    pago: boolean;
    tipoConsumo: TipoConsumo;
    produtos: PedidoProduto[];
    formaPagamento: FormaPagamento;
    situacao: SituacaoPedido;
    desconto: number;
    valorTotal: number;
    tempoGastoEmMinutos : number;

    deserialize(input: any) {
        Object.assign(this, input);
        this.cliente = new Cliente().deserialize(input.cliente);
        return this;
    }
}
