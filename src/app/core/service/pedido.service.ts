import { Injectable } from '@angular/core';
import { Pedido } from '../../shared/models/pedido';
import { TipoConsumo } from '../../shared/enums/tipo-consumo.enum';
import { SituacaoPedido } from '../../shared/enums/situacao-pedido.enum';
import { Cliente } from '../../shared/models/cliente';
import { PedidoProduto } from '../../shared/models/pedido-produto';
import { Produto } from '../../shared/models/produto';
import { CategoriaProduto } from '../../shared/models/categoria-produto';
import { TipoPonto } from '../../shared/enums/tipo-ponto.enum';
import { Ingrediente } from '../../shared/models/ingrediente';
import { UnidadeMedida } from '../../shared/enums/unidade-medida.enum';
import { CategoriaIngrediente } from '../../shared/models/categoria-ingrediente';
import { ProdutoIngrediente } from '../../shared/models/produto-ingrediente';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor() { }

  getPedidos() {
    let pedidos: Pedido[] = [];
    let pedido1 = new Pedido();
    pedido1.numero = 1;
    pedido1.dataHoraCriacao = new Date();
    pedido1.pago = false;
    pedido1.tipoConsumo = TipoConsumo.ParaLevar;
    pedido1.situacao = SituacaoPedido.Criado;
    pedido1.valorTotal = 45;

    let cliente1 = new Cliente();
    cliente1.id = 1;
    cliente1.nome = 'Ricardo'

    pedido1.cliente = cliente1;

    let categoriaLanche = new CategoriaProduto();
    categoriaLanche.id = 1;
    categoriaLanche.nome = 'Lanches';

    let categoriaPao = new CategoriaIngrediente();
    categoriaPao.id = 1;
    categoriaPao.nome = 'Pão';

    let categoriaSalada = new CategoriaIngrediente();
    categoriaSalada.id = 2;
    categoriaSalada.nome = 'Salada';

    let categoriaCarne = new CategoriaIngrediente();
    categoriaCarne.id = 3;
    categoriaCarne.nome = 'Carne';

    let categoriaQueijo = new CategoriaIngrediente();
    categoriaQueijo.id = 4;
    categoriaQueijo.nome = 'Queijo';

    let categoriaMolho = new CategoriaIngrediente();
    categoriaMolho.id = 5;
    categoriaMolho.nome = 'Molho';

    let ingredientePaoBrioche = new Ingrediente();
    ingredientePaoBrioche.id = 1;
    ingredientePaoBrioche.nome = 'Brioche'
    ingredientePaoBrioche.unidadeMedida = UnidadeMedida.Unidade;
    ingredientePaoBrioche.categoria = categoriaPao;

    let ingredientePaoParmesao = new Ingrediente();
    ingredientePaoParmesao.id = 2;
    ingredientePaoParmesao.nome = 'Parmesão'
    ingredientePaoParmesao.unidadeMedida = UnidadeMedida.Unidade;
    ingredientePaoParmesao.categoria = categoriaPao;

    let ingredientePaoFrances = new Ingrediente();
    ingredientePaoFrances.id = 3;
    ingredientePaoFrances.nome = 'Francês'
    ingredientePaoFrances.unidadeMedida = UnidadeMedida.Unidade;
    ingredientePaoFrances.categoria = categoriaPao;

    let ingredienteCebola = new Ingrediente();
    ingredienteCebola.id = 4;
    ingredienteCebola.nome = 'Cebola'
    ingredienteCebola.unidadeMedida = UnidadeMedida.Grama;
    ingredienteCebola.categoria = categoriaSalada;

    let produtoIngredientePaoBrioche = new ProdutoIngrediente();
    produtoIngredientePaoBrioche.id = 1;
    produtoIngredientePaoBrioche.ingrediente = ingredientePaoBrioche;
    produtoIngredientePaoBrioche.quantidade = 1;

    let produtoIngredientePaoParmesao = new ProdutoIngrediente();
    produtoIngredientePaoParmesao.id = 2;
    produtoIngredientePaoParmesao.ingrediente = ingredientePaoParmesao;
    produtoIngredientePaoParmesao.quantidade = 1;

    let produtoIngredientePaoFrances = new ProdutoIngrediente();
    produtoIngredientePaoFrances.id = 3;
    produtoIngredientePaoFrances.ingrediente = ingredientePaoFrances;
    produtoIngredientePaoFrances.quantidade = 1;

    let produtoIngredienteCebola = new ProdutoIngrediente();
    produtoIngredienteCebola.id = 4;
    produtoIngredienteCebola.ingrediente = ingredienteCebola;
    produtoIngredienteCebola.quantidade = 50;

    let produtoSanduiche = new Produto();
    produtoSanduiche.id = 1;
    produtoSanduiche.nome = 'Sanduiche';
    produtoSanduiche.preco = 15;
    produtoSanduiche.categoria = categoriaLanche;
    produtoSanduiche.possuiPonto = true;
    produtoSanduiche.ingredientes = [produtoIngredientePaoBrioche, produtoIngredienteCebola];

    let pedidoProduto1 = new PedidoProduto();
    pedidoProduto1.id = 1;
    pedidoProduto1.pedido = pedido1;
    pedidoProduto1.produto = produtoSanduiche;
    pedidoProduto1.quantidade = 1;
    pedidoProduto1.tipoPonto = TipoPonto.AoPonto;
    pedidoProduto1.ingredientes = [produtoIngredientePaoBrioche];

    let pedidoProduto2 = new PedidoProduto();
    pedidoProduto2.id = 2;
    pedidoProduto2.pedido = pedido1;
    pedidoProduto2.produto = produtoSanduiche;
    pedidoProduto2.quantidade = 1;
    pedidoProduto2.tipoPonto = TipoPonto.BemPassado;
    pedidoProduto2.ingredientes = [produtoIngredientePaoParmesao, produtoIngredienteCebola];

    let pedidoProduto3 = new PedidoProduto();
    pedidoProduto3.id = 3;
    pedidoProduto3.pedido = pedido1;
    pedidoProduto3.produto = produtoSanduiche;
    pedidoProduto3.quantidade = 1;
    pedidoProduto3.tipoPonto = TipoPonto.AoPonto;
    pedidoProduto3.ingredientes = [produtoIngredientePaoFrances, produtoIngredienteCebola];

    pedido1.produtos = [pedidoProduto1, pedidoProduto2, pedidoProduto3];
    pedidos.push(pedido1);

    return pedidos;
  }
}
