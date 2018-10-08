import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../service/productos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public catalogo : any;
  constructor(private servicio : ProductosService) {
    this.catalogo = servicio.obtenerProductos();
   }

  ngOnInit() {
  }

}
