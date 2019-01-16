import { Produto } from '../produto/Produto';

export class Compra extends Produto {
  constructor(prod: Produto, public quantidade: number, public total: number) {
    super(prod.id,
      prod.nome,
      prod.precoUnit,
      prod.estoque,
      prod.imgPath,
      prod.caracteristcas);
  }
}
