import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorField } from '@app/helpers/ValidatorFields';

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
    const formOptions: AbstractControlOptions = {
      validators: ValidatorField.MustMatch('senha', 'confirmarSenha')
    };

    this.form = this.fb.group({
      primeiroNome : ['', [Validators.required, Validators.minLength(2)]],
      ultimoNome : ['', Validators.required],
      email : ['',[ Validators.required, Validators.email]],
      telefone : ['', Validators.required],
      funcao : ['', Validators.required],
      descricao : ['', Validators.required],
      senha : ['', [Validators.required, Validators.minLength(6)]],
      confirmarSenha: ['', Validators.required],
      titulo: ['', Validators.required]
    }, formOptions)

  }
}
