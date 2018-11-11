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
  public detalle: any;
  private id: number;
  private sub: any;
  private parametro: any;
  constructor(private servicio: ProductosService, private route: ActivatedRoute) {
    this.detalle = {};
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.parametro = +params['catalogo'];
      if (this.parametro == '1') {
        this.catalogo = this.servicio.obtenerBusos();
        this.detalle = this.catalogo.find(c => c.id == this.id);
        return
      }
      if (this.parametro == '2') {
        this.catalogo = this.servicio.obtenerBisuteria();
        this.detalle = this.catalogo.find(c => c.id == this.id);
        return
      }

    });
  }

}
