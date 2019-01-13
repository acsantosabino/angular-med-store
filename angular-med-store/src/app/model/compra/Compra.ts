import { Produto } from '../produto/Produto';

export class Compra extends Produto {
  quantidade: number;
  total: number;
}

export const ELEMENT_DATA_COMPRA: Compra[] = [
  {
    id: '#',
    nome: 'Monitor de Pressão Arterial Automático',
    precoUnit: 239.97,
    quantidade: 5,
    total: 1199.85,
    estoque: 20,
    imgPath: '../../../assets/img/blood-pressure.jpg'
  },
  {
    id: '#',
    nome: 'Aparelho de Pressão Aneroide com Esteto Solidor',
    precoUnit: 83.97,
    quantidade: 6,
    total: 503.82,
    estoque: 20,
    imgPath: '../../../assets/img/pressaodigital.jpg'
  },
  {
    id: '#',
    nome: 'Conjunto Otoscópio e Oftalmoscópio',
    precoUnit: 1305.75,
    quantidade: 3,
    total: 3917.25,
    estoque: 20,
    imgPath: '../../../assets/img/otoscopio.jpg'
  },
  {
    id: '#',
    nome: 'Oxímetro de Pulso de Dedo Portátil Pediátrico',
    precoUnit: 249.97,
    quantidade: 10,
    total: 2499.7,
    estoque: 20,
    imgPath: '../../../assets/img/oximetro.jpg'
  },
  {
    id: '#',
    nome: 'Mini Incubadora Stermax',
    precoUnit: 167.97,
    quantidade: 1,
    total: 167.97,
    estoque: 20,
    imgPath: '../../../assets/img/minincubadora.jpg'
  },
  {
    id: '#',
    nome: 'Foco de Luz Auxiliar Flexível com Rodas Para Consultório',
    precoUnit: 388.96,
    quantidade: 4,
    total: 1555.84,
    estoque: 20,
    imgPath: '../../../assets/img/lanterna.jpg'
  },
  {
    id: '#',
    nome: 'Medidor de Colesterol e Glicemia Luna Duo Wellion Rosa',
    precoUnit: 161.97,
    quantidade: 5,
    total: 809.85,
    estoque: 20,
    imgPath: '../../../assets/img/medidorglicemia.jpeg'
  }
];
