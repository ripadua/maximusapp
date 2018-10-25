import { Pedido } from "./pedido";
import { Produto } from "./produto";
import { ProdutoIngrediente } from "./produto-ingrediente";
import { TipoPonto } from "../enums/tipo-ponto.enum";

export class PedidoProduto {
    id: number;
    pedido: Pedido;
    produto: Produto;
    quantidade: number;
    ingredientes: ProdutoIngrediente[];
    tipoPonto: TipoPonto;
}
