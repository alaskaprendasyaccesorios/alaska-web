import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../service/productos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  public catalogo: any;
  public id: any;
  constructor(private servicio: ProductosService, private router: ActivatedRoute) {
    this.router.params.subscribe(id => {
      this.id = id['id'];
      if (this.id === '1') {
        this.catalogo = servicio.obtenerBusos();
        return;
      }
      if (this.id === '2') {
        this.catalogo = servicio.obtenerBisuteria();
        return;
      }
    })
  }


  ngOnInit() {
  }

}
