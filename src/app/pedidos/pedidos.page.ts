import { Component, OnInit } from '@angular/core';
import { Pedido } from '../shared/models/pedido';
import { PedidoService } from '../core/service/pedido.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {

  private pedidos: Pedido[] = [];

  constructor(private pedidoService : PedidoService) { }

  ngOnInit() {
    this.pedidos = this.pedidoService.getPedidos();

    setInterval(() => {
      for (let pedido of this.pedidos) {
        pedido.tempoGastoEmMinutos = Math.trunc((new Date().getTime() - pedido.dataHoraCriacao.getTime()) / 1000 / 60);
      }
    }, 1000);
  }

}
