export class Produto {
  constructor(
  public id: number,
  public nome: string,
  public precoUnit: number,
  public estoque: number,
  public imgPath: string,
  public caracteristcas: string[]) {}
}
