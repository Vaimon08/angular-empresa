import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Empresa } from '../Componentes/Entidad/Empresa';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private hhtp: HttpClient) { }

  url = 'http://localhost:8020/api/Empresa/'

  listarC(){
    return this.hhtp.get<Empresa[]>(this.url+ 'listar');
  }

  buscarC(empresa:Empresa){
    return this.hhtp.post<Empresa>(this.url+ 'buscar', empresa);
  }

  guardarC(empresa:Empresa){
    return this.hhtp.post<Empresa>(this.url+ 'guardar', empresa);
  }

  editarC(empresa:Empresa){
    return this.hhtp.post<Empresa>(this.url+ 'editar', empresa);
  }

  eliminarC(empresa:Empresa){
    return this.hhtp.post<Empresa>(this.url+ 'eliminar', empresa);
  }
}
