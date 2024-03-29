import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from 'src/app/models/mesa';

export abstract class ProdutoService {

  abstract getProdutos(): Observable<Produto[]>
}
