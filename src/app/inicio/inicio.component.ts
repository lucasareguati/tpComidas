import { Component, OnInit } from '@angular/core';
import {ComidasService} from './../comidas.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  comida: any[] = [];

  constructor(private _servicio: ComidasService) {
    this.comida = _servicio.obtenerComida();
  }
  ngOnInit() {
  }

}
