import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form){
        border: 1px solid red;
    }
    `]
})
export class TemplateComponent  {

usuario = {
  nombre: null,
  apellldo: null,
  correo: null,
  pais: '',
  sexo: 'Femenino',
  acepta: false
};

paises = [
  {
  nombre: 'Mexico',
  codigo: 'MxN'
 },
 {
  nombre: 'España',
  codigo: 'Esp'
 }
];
sexos = ['Femenino', 'Masculino'];
  constructor() { }

  Guardar(forma: NgForm) {
    console.log(forma);
    console.log('ngForm', forma);
    console.log('Valor', forma.value);
    console.log('usuarios', this.usuario);
  }


}
