import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup
   validacionEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    constructor(private fb: FormBuilder) {
        this.loginForm = this.fb.group({
            //usuario: ['', [Validators.required, Validators.email]]
            usuario: ['', [Validators.required, Validators.email]],
            pass: ['',Validators.required]
        })
    }

    ngOnInit(): void { 
    }
    accesoUsuario(){
        console.log(this.loginForm);
        console.log(this.loginForm.get('usuario')?.value);

        const data_usuario: Usuario = {
            correo: this.loginForm.get('usuario')?.value,
            password: this.loginForm.get('pass')?.value
        }

        

        console.log(data_usuario);

    }
}