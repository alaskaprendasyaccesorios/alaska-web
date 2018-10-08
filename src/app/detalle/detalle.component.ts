import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../service/productos.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  public catalogo: any;
  public detalle : any;
  private id: number;
  private sub: any;
  constructor(private servicio: ProductosService, private route: ActivatedRoute) {
    this.catalogo = servicio.obtenerProductos();
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.detalle = this.catalogo.find(c => c.id == this.id);
   });
  }

}
