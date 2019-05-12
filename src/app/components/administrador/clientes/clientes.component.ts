import { Component, OnInit } from '@angular/core';
import { CasosJuridicos } from '../../../core/interfaces/casos-juridicos.interface';
import { CasosJuridicosService } from '../../../core/services/casos-juridicos.service';
import { ClientesService } from '../../../core/services/clientes.service';
import { Formulario } from '../../../core/interfaces/formulario.interface';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  casosJuridicos: CasosJuridicos[] = [];
  clientes: Formulario[] = [];
  mostrarCliente = false;
  displayedColumns: string[] = ['celular', 'correo'];

  casoJuridico: CasosJuridicos;
  constructor(private casosJuridicosServices: CasosJuridicosService, private clientesService: ClientesService) { }

  ngOnInit() {
    this.casosJuridicosServices.getCasosJuridicos()
      .subscribe(data => {
        data.forEach(element => {
          if (element !== null) {
            this.casosJuridicos.push(element);
          }
        });
      });
  }

  mostrarClientes(codigo) {
    if (codigo != null || codigo !== '') {
      this.casoJuridico = this.casosJuridicos.find(x => x.codigo === codigo);
      this.clientesService.getClients().subscribe(data => {
        this.clientes = data;
      });
      this.mostrarCliente = true;
    }
  }
}
