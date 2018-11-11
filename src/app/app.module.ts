import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InformcionComponent } from './informcion/informcion.component';
import {RouterModule, Routes} from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'informacion', component: InformcionComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'catalogo/:id', component: CatalogoComponent },
  { path: 'catalogo/:id', component: CatalogoComponent },
  { path: 'detalle/:id/:catalogo', component: DetalleComponent },
  { path: '**', redirectTo: '/inicio' }
];

@NgModule({
  declarations: [
    AppComponent,
    CatalogoComponent,
    InicioComponent,
    ContactoComponent,
    InformcionComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
