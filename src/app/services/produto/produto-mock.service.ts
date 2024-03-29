import { Injectable } from '@angular/core';
import { Produto } from 'src/app/models/mesa';
import { ProdutoService } from './produto.service';
import { Observable, of } from 'rxjs';

@Injectable()
export class ProdutoMockService extends ProdutoService {

  listaDeProdutos: Produto[] = [
    { nome: "Picanha na chapa", id: 1, valor: 45.99, ativo: true, tempo: 30, descricao: "Deliciosa picanha servida na chapa, acompanhada de arroz, feijão, fritas e vinagrete." },
    { nome: "Strogonoff de Frango", id: 2, valor: 25.49, ativo: false, tempo: 15, descricao: "Saboroso strogonoff preparado com frango, creme de leite, champignon e servido com arroz e batata palha." },
    { nome: "Risoto de Camarão", id: 3, valor: 35.75, ativo: true, tempo: 60, descricao: "Risoto cremoso preparado com arroz arbóreo, camarões frescos, queijo parmesão e temperos especiais." },
    { nome: "Feijoada Completa", id: 4, valor: 39.99, ativo: true, tempo: 45, descricao: "Clássica feijoada brasileira acompanhada de arroz, couve, farofa, laranja, torresmo e bisteca." },
    { nome: "Salmão Grelhado", id: 5, valor: 28.25, ativo: false, tempo: 10, descricao: "File de salmão grelhado no ponto, acompanhado de legumes ao vapor e arroz branco." },
    { nome: "Refrigerante (lata)", id: 6, valor: 4.99, ativo: true, tempo: 0, descricao: "Lata de refrigerante à sua escolha." },
    { nome: "Sorvete de Chocolate", id: 7, valor: 8.99, ativo: true, tempo: 0, descricao: "Sorvete de chocolate cremoso e refrescante." },
    { nome: "Batata Frita", id: 8, valor: 15.00, ativo: true, tempo: 0, descricao: "Porção de batata frita crocante." },
    { nome: "Legumes Grelhados", id: 9, valor: 12.50, ativo: true, tempo: 0, descricao: "Seleção de legumes grelhados, incluindo pimentão, abobrinha e cenoura." }
  ];


  constructor() { super(); }

  getProdutos(): Observable<Produto[]> {
    return of(this.listaDeProdutos);
  }
}
