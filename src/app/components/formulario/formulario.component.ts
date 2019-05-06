import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CasosJuridicosService } from 'src/app/core/services/casos-juridicos.service';
import { ClientesService } from 'src/app/core/services/clientes.service';
import { Formulario } from '../../core/interfaces/formulario.interface';
import { Pattern } from '../../core/pattern/pattern';

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
              private casosJuridicosServices: CasosJuridicosService,
              private clientesService: ClientesService) {
    this.formularioCliente = this.formBuilder.group({
      nombres: ['', [Validators.required, Validators.pattern(Pattern.regxDatosPrimarios)]],
      celular: ['', [Validators.required]],
      correo: ['', [Validators.required,Validators.pattern(Pattern.regxCorreo)]],
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


  guardar() {
    const cliente: Formulario = {
      nombres: this.formularioCliente.get('nombres').value,
      celular: this.formularioCliente.get('celular').value,
      correo: this.formularioCliente.get('correo').value,
      descripcion: this.formularioCliente.get('descripcion').value,
      codigoCaso: ''
    };
    // console.log(cliente);
    this.clientesService.insertClient(cliente).subscribe(data => {
      console.log(data)
    });
  }
}
