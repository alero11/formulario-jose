import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CasosJuridicos } from '../../core/interfaces/casos-juridicos.interface';
import { CasosJuridicosService } from '../../core/services/casos-juridicos.service';


@Component({
  selector: 'app-casos-juridicos',
  templateUrl: './casos-juridicos.component.html',
  styleUrls: ['./casos-juridicos.component.css']
})
export class CasosJuridicosComponent implements OnInit {

  formNacformCasosJuridicosido: FormGroup;
  casosJuridicos: CasosJuridicos[] = [];

  constructor(private casosJuridicosServices: CasosJuridicosService) {
  }

  ngOnInit() {
    this.casosJuridicosServices.getCasosJuridicos()
      .subscribe(data => {
        console.log(data);
        data.forEach(element => {
          if (element !== null) {
            this.casosJuridicos.push(element);
          }
        });
      });
    console.log(this.casosJuridicos);
  }

}
