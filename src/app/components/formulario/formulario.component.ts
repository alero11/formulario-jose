import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formularioCliente: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formularioCliente = this.formBuilder.group({
      nombres: ['', [Validators.required]],
      celular: ['', [Validators.required]],
      correo: ['', [Validators.required]],
      descripcion: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

}
