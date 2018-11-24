import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ComidasService} from './../comidas.service';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent implements OnInit {

  comidas: any[] = [];


  constructor(private ruta: ActivatedRoute, private _servicio: ComidasService
  ) {
    this.ruta.params.subscribe(params => {
      console.log(params['id']);
      this.comidas = this._servicio.obtenerUno(params['id']);
    });

   }

  ngOnInit() {
  }

}
