import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { ComidasService } from './comidas.service';
import { from } from 'rxjs';
import { PizzasComponent} from './pizzas/pizzas.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';


const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'pizzas/:id', component: PizzasComponent},
  {path: '**', redirectTo: 'inicio', pathMatch: 'full'  }

];

@NgModule({

  declarations: [
    AppComponent,
    InicioComponent,
    FooterComponent,
    PizzasComponent,
    EncabezadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)

  ],
  providers: [ComidasService],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
