import { Component, OnInit } from '@angular/core';
import { UsuarioProxy } from '../modelo/usuario';
import { ProductosService } from '../service/productos.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  usuario: UsuarioProxy;
  constructor(private servicio: ProductosService) { 
    this.usuario = new UsuarioProxy();
  }

  ngOnInit() {
  }

  enviarMensaje = () => {
    this.servicio.enviarCorreo(this.usuario).subscribe((response) => { alert("Informacion enviada correctamente"); }, (error) => { console.error(error) });
  }

}
