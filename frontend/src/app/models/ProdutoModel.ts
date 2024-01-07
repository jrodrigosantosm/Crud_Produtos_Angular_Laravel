export interface Produto {
    id: number;
    nome: string;
    categoria_id: number;
    preco: number;
    validade: Date;
    estoque: number;
    perecivel: boolean;
  }