import { CategoriaProduto } from "./categoria-produto";
import { ProdutoIngrediente } from "./produto-ingrediente";

export class Produto {
    id: number;
    nome: string;
    preco: number;
    ingredientes: ProdutoIngrediente[];
    categoria: CategoriaProduto;
    possuiPonto: boolean;
}
