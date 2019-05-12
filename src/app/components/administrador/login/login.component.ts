import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdministradorRoute } from '../administrador.route';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  user = {
    name: 'jose.llanos',
    pass: 'jm.llanos.2019'
  };

  validaContrasena = true;


  constructor(private formBuilder: FormBuilder,
              private router: Router) {
    this.formLogin = this.formBuilder.group({
      usuario: ['', Validators.required],
      contrasenia: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  iniciarSesion() {
    const usuario = this.formLogin.get('usuario').value;
    const contrasena = this.formLogin.get('contrasenia').value;
    if (usuario === this.user.name && contrasena === this.user.pass) {
      this.validaContrasena = true;
      this.formLogin.reset();
      this.router.navigate(['/administrador/clientes']);
    } else {
      this.validaContrasena = false;
    }
  }
}
