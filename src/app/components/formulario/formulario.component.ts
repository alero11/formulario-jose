import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { CasosJuridicosService } from 'src/app/core/services/casos-juridicos.service';
import { ClientesService } from 'src/app/core/services/clientes.service';
import { Formulario } from '../../core/interfaces/formulario.interface';
import { Pattern } from '../../core/pattern/pattern';
import { MatDialog } from '@angular/material';
import { OpendialogComponent } from './opendialog/opendialog.component';

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
              private clientesService: ClientesService,
              public dialog: MatDialog,
              private router: Router) {
    this.formularioCliente = this.formBuilder.group({
      nombres: ['', [Validators.required, Validators.pattern(Pattern.regxDatosPrimarios)]],
      celular: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.pattern(Pattern.regxCorreo)]],
      descripcion: ['', [Validators.required]]
    });
    this.router.events.subscribe((evt) => {
      // if (!(evt instanceof NavigationEnd)) {
      //   return;
      // }
      window.scrollTo(0, 0);
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(parametros => {
      this.casosJuridicosServices.getCasosJuridicos()
        .subscribe(data => {
          data.forEach(element => {
            if (element !== null) {
              if (element.codigo === parametros.codigo) {
                this.caso = element;
                console.log('caso>>>', this.caso);
              }
            }
          });
        });
    });

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }


  guardar() {
    const cliente: Formulario = {
      nombres: this.formularioCliente.get('nombres').value,
      celular: this.formularioCliente.get('celular').value,
      correo: this.formularioCliente.get('correo').value,
      descripcion: this.formularioCliente.get('descripcion').value,
      codigoCaso: this.caso.codigo
    };
    this.clientesService.insertClient(cliente).subscribe(data => {
      const dialogRef = this.dialog.open(OpendialogComponent);
      dialogRef.afterClosed().subscribe(result => {
        this.formularioCliente.reset();
        this.router.navigate(['/']);
      });
    });
  }
}
