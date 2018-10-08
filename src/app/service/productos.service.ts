import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  public catalogo: any;
  constructor() {
    this.catalogo = [{
      "id": 1,
      "imagen": "../../assets/images/catalogo-1.png",
      "titulo": "Bisuteria",
      "descripcion": "Hecho a mano con las mejores piedras",
      "precio": "$10.000",
      "adicional" : "Bisuteria personalizada hecha a la medida"
    },
    {
      "id": 2,
      "imagen": "../../assets/images/catalogo-3.png",
      "titulo": "Pulseras",
      "descripcion": "Pulseras fabricadas artesanalmente",
      "precio": "$10.000",
      "adicional" : "Pulseras realizadas artesanalmente con los mas finos detalles"
    },
    {
      "id": 3,
      "imagen": "../../assets/images/catalogo-2.png",
      "titulo": "Busos de dama",
      "descripcion": "Busos de dama variados estilos",
      "precio": "$10.000",
      "adicional" : "Busos de dama realizados con la mejor tela"
    },
    {
      "id": 4,
      "imagen": "../../assets/images/catalogo-4.png",
      "titulo": "Busos de hombre",
      "descripcion": "Busos de hombre variados estilos",
      "precio": "$10.000",
      "adicional" : "Tejido a mano, descuento por mes de halloween"
    }]
  }

  public obtenerProductos = () => {
    return this.catalogo;
  }
}
