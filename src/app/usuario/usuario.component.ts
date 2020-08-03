import { Component, OnInit } from '@angular/core';
import { mySpApi } from '../sp/sp-api-service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  mensaje: any;

  constructor(private spServicio:mySpApi) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  async getCurrentUser(){
    this.mensaje= await this.spServicio.getCurrentUser();
    console.log(this.mensaje);
  }

}
