import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../service/productos.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  public catalogo : any;
  constructor(private servicio : ProductosService) { 
this.catalogo = servicio.obtenerProductos();
  }


  ngOnInit() {
  }

}
