import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AutosService } from '../../services/autos.service';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-editar-carro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  id:any;
  nombre:any;
  categoria: string=""
  precio:any;
  ruta= inject(ActivatedRoute)
  servicio=inject(AutosService)

  ngOnInit()
  {
    this.ruta.params.subscribe((parametros)=>{
     let id = parametros['idAuto']
     this.servicio.getAutosTablaId(id).subscribe(auto=>{
      this.id=auto.id
      this.nombre=auto.nombre
      this.categoria=auto.categoria
      this.precio=auto.precio
     })
  })
  }
  editar(data:NgForm){
    this.servicio.putAutosTabla(data.value).subscribe()
    alert("Auto editado con exito")
  }
  guardar(data:any){
    console.log(data.value);
    this.servicio.postAutosTabla(data.value).subscribe()
    window.location.href="productos"
  }
}