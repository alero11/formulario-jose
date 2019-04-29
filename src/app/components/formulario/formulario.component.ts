import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CasosJuridicosService } from 'src/app/core/services/casos-juridicos.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {

  formularioCliente: FormGroup;
  caso: any;
  constructor(private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private casosJuridicosServices: CasosJuridicosService) {
    this.formularioCliente = this.formBuilder.group({
      nombres: ['', [Validators.required]],
      celular: ['', [Validators.required]],
      correo: ['', [Validators.required]],
      descripcion: ['', [Validators.required]]
    });
    this.activatedRoute.params.subscribe(parametros => {
      this.casosJuridicosServices.getCasosJuridicos()
        .subscribe(data => {
          data.forEach(element => {
            if (element !== null) {
              if (element.codigo === parametros.codigo) {
                this.caso = element;
              }
            }
          });
        });
    });
  }

  ngOnInit() {

  }

}
