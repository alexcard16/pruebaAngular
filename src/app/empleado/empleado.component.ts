import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
  //styles:["p{background-color:red;}"]
})
export class EmpleadoComponent implements OnInit {

  nombre = "juan";
  apellido ="cardona"
  edad = 30;
  //empresa = "";
  usuRegistrado = false;
  getRegistroUsu(){

  this.usuRegistrado = true;
  
  }
  /*getEdad(){

    return this.edad;
  }*/
  constructor() { }

  ngOnInit(): void {
  }

}
