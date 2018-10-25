import { Produto } from "./produto";
import { Ingrediente } from "./ingrediente";

export class ProdutoIngrediente {
    id: number;
    produto: Produto;
    ingrediente: Ingrediente;
    quantidade: number;
}
