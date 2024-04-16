import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  form!: FormGroup;

  constructor(public fb: FormBuilder) { }

  get f(): any {return this.form.controls;}


  ngOnInit() {
    this.validation();
  }

  public validation() :void  {
    this.form = this.fb.group({
      primeiroNome : ['', Validators.required],
      ultimoNome : ['', Validators.required],
      email : ['', Validators.required],
      telefone : ['', Validators.required],
      funcao : ['', Validators.required],
      descricao : ['', Validators.required],
      senha : ['', Validators.required],
      confirmarSenha: ['', Validators.required]
    })

  }

}
