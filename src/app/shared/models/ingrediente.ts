import { UnidadeMedida } from "../enums/unidade-medida.enum";
import { CategoriaIngrediente } from "./categoria-ingrediente";

export class Ingrediente {
    id: number;
    nome: string;
    unidadeMedida: UnidadeMedida;
    categoria : CategoriaIngrediente;
}
