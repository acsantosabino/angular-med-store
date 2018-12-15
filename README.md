# angular-med-store
Projeto do curso de frontend avançado Especialização em Desenvolvimento Web e Mobile - Full-Stack 2018

[Especificação do trabalho](https://github.com/danfma/pos-ufg-2018/wiki/Trabalho-final)

## Aplicação
Loja de EQUIPAMENTOS MÉDICOS E HOSPITALARES.

* EQUIPAMENTOS MÉDICOS: aparelhos de pressão, estetoscópios, otoscópio, oftalmoscópio, oxímetro de pulso, aspirador, lipoaspirador, desfibrilador cardioversor, autoclaves, laringoscópios, eletrocardiógrafos, monitor de sinais vitais, carro de emergência, bisturi eletrônico, balanças médicas, microscópios biológicos, fotóforo, foco cirúrgico, termômetro termo higrometro, máscaras, oxigênio a.c. e óxido nitroso, simuladores, bomba de infusão, negatoscópios, cardio tocografo, criocautérios, detector fetal, colposcopios, foco clínico e ginecológico, dinamômetros, doppler vascular, espirômetro, estadiômetros, adipômetro plicômetro, acuidade visual, bioimpedância, garrote pneumático, inalador hospitalar, fototerapia, maletas médicas, dermatoscópio, lupas diversas, raio-x, respirador, seladora, serra para gesso, venoscópio, video printer.

* INSTRUMENTAIS CIRÚRGICOS: afastadores, pinças a-l, pinças m-z, tesouras, porta agulhas, outros, material de inóx, limpa estoque.

## Membros
* Arthur Santos
* Danillo Guimarães
* Fanny Rosana Pastor Humpiri

## Referencias
* https://www.fibracirurgica.com.br
* https://www.allformed.com.br/
* https://www.medlinemedical.pt/pt/Inicio
* https://www.centermedical.com.br/
* https://www.hospinet.com.br/

## Arquitetura aplicada
* Arquitetura aplicada

## Fluxo de navegação
* Quando usuário não está logado  
  Home => Carrinho de compras => Login => Cep => Relatório de venda
* Quando usuário está logado  
  Home => Carrinho de compras => Cep => Relatório de venda
* Usuário clica em login  
  Direcionar para "login"
* Usuário clica em cancelar  
  Direcionar para a "home"
* Usuário clica em logoff  
  Direcionar para a "home"

## Definição das páginas
#### Home
* Header
#### Carrinho de compras
* Header
#### Login
* Header
#### Cep
* Header
#### Relatório de vendas
* Header

## Componentes
* Carrossel de produtos
  * Item Produto Grade

* Lista em grade produtos
  * Item Produto Grade

* Indicador de quantidade de produtos em carrinho de compras

* Carrinho de compras
  * Lista de produtos na vertical (itens do carrinho de compra) 
    * fdasfasfas
    * no carrinho com link para o produto adicionado;
Alteração da quantidade de produtos no carrinho;
Remoção do produto quando quantidade for igual a zero;
Confirmação da compra;
