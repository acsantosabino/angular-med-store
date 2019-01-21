import { Component, OnInit, Input } from '@angular/core';
import { Produto } from 'src/app/model';

@Component({
  selector: 'app-item-produto-grade',
  templateUrl: './item-produto-grade.component.html',
  styleUrls: ['./item-produto-grade.component.sass']
})
export class ItemProdutoGradeComponent implements OnInit {
  @Input() produto: Produto;
  constructor() {
    
  }

  ngOnInit() {
  }

}
