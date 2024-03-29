export type mesaStatus = {
  nome: string;
  id: number;
  ativa: boolean;
}

export type Produto = {
  nome: string;
  id: number;
  valor: number;
  ativo: boolean;
  tempo: number;
  descricao: string;
}

export type Mesa = {
  nome: string;
  id: number;
  ativa: boolean;

  produtos: Produto[];
}
