import { Component, OnInit } from '@angular/core';


// Importamos todo esto para poder usar la informacion por medio de Data
import { FormGroup, FormControl, Validators, FormArray, Validator } from '@angular/forms';
import { promise } from 'protractor';
import { Observable } from 'rxjs';
import { resolve } from 'url';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})

export class DataComponent  {

  // Declaramos una forma de tipo formGroup
  forma: FormGroup;

  usuario = {
    nombrecompleto: {
      nombre: 'Simona',
      apellido: 'Maldonado'
    },
    correo: 'Marco.balderaspq@gmail.com',
    pasatiempos: ['correo', 'dormir', 'comer']
  };

  constructor() {
    // Armamos nuestra forma
    this.forma = new FormGroup({
      nombrecompleto: new FormGroup({
        nombre: new FormControl(/*this.usuario.nombrecompleto.nombre*/ '',   [Validators.required, Validators.minLength(3)]),
        apellido: new FormControl(/*this. usuario.nombrecompleto.apellido*/ '', Validators.required)
      }),
      // tslint:disable-next-line: max-line-length
      correo: new FormControl(/*this.usuario.correo*/ '',   [Validators.required , Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      pasatiempos: new FormArray([
        new FormControl('correr', Validators.required)
      ]),
      username:  new FormControl('', Validators.required, this.existeUsuario ),
      password1: new FormControl('', Validators.required),
      password2: new FormControl('')
    });
    // de esta forma cargamos los datos a nuestras cajas si el objeto esta estructurado igual
    // this.forma.setValue(this. usuario);

    this.forma.controls.password2.setValidators([
      Validators.required,
      this.ValidatePwd.bind(this.forma)
    ]);
  }

  AgregarPasatiempo() {
    (this.forma.controls.pasatiempos as FormArray).push(
      new FormControl('', Validators.required)
    );
  }

  ValidatePwd(control: FormControl): {[s: string]: boolean} {
const forma: any = this;

if (control.value !== forma.controls.password1.value ) {
      return {validatepwd: true };
    }
return null;
  }

  existeUsuario(control: FormControl): Promise <any> | Observable <any> {
        // tslint:disable-next-line: no-shadowed-variable
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
          if (control.value === 'strider') {
              resolve( {existe: true});
          } else {
            resolve(null);
          }
            }, 3000 );
        }
      );
        return promesa;
  }


  GuardarCambios() {
    // imprimimos los valores que tiene la forma
    console.log(this.forma.value);
    // imprimimos la forma
    console.log(this.forma);


    // this.forma.reset();
  }

}
