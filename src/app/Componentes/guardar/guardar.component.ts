import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Servicios/service.service';
import { Empresa } from '../Entidad/Empresa';

@Component({
  selector: 'app-guardar',
  templateUrl: './guardar.component.html',
  styleUrls: ['./guardar.component.css']
})
export class GuardarComponent implements OnInit {
  constructor(private router : Router, private service : ServiceService){}

  ngOnInit()  {
  }

  empresa : Empresa = new Empresa();

  guardar(){
    this.service.guardarC(this.empresa).subscribe(data=>{
    alert("Se guardo la empresa "+this.empresa.nombre);
    this.router.navigate(["listar"]);
  });
  }

}
