import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.scss']
})
export class CompraComponent implements OnInit {

  constructor() {
    private route: ActivatedRoute,
    private router: Router) {
   }

  ngOnInit() {
  }
  goToCompra() {
    this.router.navigateByUrl('/compra');
  }
}
