# angular-med-store
Projeto do curso de frontend avançado Especialização em Desenvolvimento Web e Mobile - Full-Stack 2018
- Professor: Daniel Ferreira Monteiro Alves [CV Lattes](http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4130406P8)

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

### Arquitetura

* [Entendendo o Pattern Model View ViewModel MVVM](https://www.devmedia.com.br/entendendo-o-pattern-model-view-viewmodel-mvvm/18411)

### Frameworks

* [Angular Cli](https://cli.angular.io/)
* [Angular Material](https://material.angular.io/)
* [SCSS](http://sass-lang.com/)

### Exemplos de e-comerce de EQUIPAMENTOS MÉDICOS E HOSPITALARES.

* https://www.fibracirurgica.com.br
* https://www.allformed.com.br/
* https://www.medlinemedical.pt/pt/Inicio
* https://www.centermedical.com.br/
* https://www.hospinet.com.br/

## Arquitetura aplicada

### Model-View-ViewModel (MVVM)

A escolha do Angular como framework nos traz para a arquitetura de software **MVVM**. Essa arquitetura é composta pelas seguintes camadas:

- **Model:** o Model no MVVM, encapsula a lógica de negócios e os dados. Serão classes em TypeScript localizados no diretório ["./angular-med-store/src/app/model/"](https://github.com/acsantosabino/angular-med-store/tree/master/angular-med-store/src/app/model)

- **View:** A responsabilidade da View é definir a aparência ou estrutura que o usuário vê na tela. Serão a parte de template dos componentes Angular (o html) localizados em ["./angular-med-store/src/app/view/"](https://github.com/acsantosabino/angular-med-store/tree/master/angular-med-store/src/app/view)

- **ViewModel:** A responsabilidade da ViewModel no contexto do MVVM, é disponibilizar para a View uma lógica de apresentação. A View Model não tem nenhum conhecimento específico sobre a view, ou como ela implementada, nem o seu tipo. A ViewModel implementa propriedades e comandos, para que a View possa preencher seus controles e notifica a mesma, caso haja alteração de estado; seja através de eventos ou notificação de alteração. Serão a parte de logica dos componentes Angular (o typescript) localizados em ["./angular-med-store/src/app/viewmodel/"](https://github.com/acsantosabino/angular-med-store/tree/master/angular-med-store/src/app/viewmodel)

## Fluxo de navegação
* Fluxo de navegação
  Home => Produto => Home  
  
* Fluxo de Compra
  Home => Produto => Carrinho => Confirmação de venda
  
* Fluxo de continuação de compras
  Home => Produto => Carrinho => Home
  
* Usuário clica em cancelar  
  Direcionar para a "home"

## Definição das páginas
* Home
* Carrinho de compras
* Relatório de vendas
* Produto

## Componentes
* Carrossel de produtos
  * Item Produto Grade
  
* Header (Contém a identidade visual da página)
  * Indicador de quantidade de produtos em carrinho de compras

* Carrinho de compras
  * Lista vertical de itens de compra
    * Item Compra Vertical

* Produto

* Confirmação de compra
  * Lista vertical de itens de compra
    * Item Compra Vertical

### Divisão do trabalho

HOME - DANILLO  
----------------------------  
Carrossel de produtos  
Item Produto Grade  
Header (Contém a identidade visual da página)  


CARRINHO DE COMPRA - ARTHUR  
----------------------------  
Indicador de quantidade de produtos em carrinho de compras  
Carrinho de compras  
Lista vertical de itens de compra  


A COMPRA - FANNY  
----------------------------  
Item Compra Vertical  
Produto  
Confirmação de compra  

# Melhorias
* Login

* Menu lateral de categorias
  * Lista em grade produtos
    * Item Produto Grade

* Rodapé

