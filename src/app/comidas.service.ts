import { Injectable } from '@angular/core';

@Injectable()
export class ComidasService {


  comida: any[] = [
    {
      nombre: 'Muzzarella' ,
      precio: 120,
      ingredientes: 'Salsa, Muzzarella, aceitunas' ,
      descripcion: 'Es la pizza tipica, mas sencilla y común. Tambien es la más comida en la ciudad de Concepción del Uruguay',
      img: 'assets/img/muzza.jpg' },
    {
      nombre: 'Especial',
      precio: 150,
      ingredientes: 'Salsa, muzzarella, aceitunas, jamón, morrón.',
      descripcion: 'Esta es la segunda pizza más pedida a nivel mundial, tiene sabor a jamón con morrón.',
      img: 'assets/img/especial.jpg'},
    {
      nombre: 'Fugazzeta',
      precio: 140,
      ingredientes: 'Salsa, queso, cebolla',
      descripcion: 'Esta pizza es conocida entre los amantes de la cebolla ya que lleva gran cantidad de esta.',
      img: 'assets/img/fugazzeta.jpg'
    },
    {
      nombre: 'Napolitana',
      precio: 180,
      ingredientes: 'Salsa, queso, tomate aceitunas',
      descripcion: 'Esta se caracteriza por tener una capa de tomates en su superficie.',
      img: 'assets/img/napolitana.jpg'
    },
    {
      nombre: 'Peperoni',
      precio: 210,
      ingredientes: 'Salsa, peperoni, queso.',
      descripcion: 'Esta pizza se caracteriza por comerse en Estados Unidos, es cara ya que el peperoni no es fácil de conseguir.',
      img: 'assets/img/peperoni.png'
    }
  ];

  constructor() {
    console.log('Servicio funcionando');

  }

  obtenerComida( ) {
    return this.comida;
  }

  obtenerUno(i) {
    return this.comida[i];
  }

}
