import { Component, inject } from '@angular/core';
import { AutosService } from '../../services/autos.service';
import { RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-autos',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './autos.component.html',
  styleUrl: './autos.component.css'
})
export class AutosComponent {
  service=inject(AutosService)

  auto: any[] = []; 
  id:any;
  nombre:any;
  categoria: string=""
  precio:any;

  
  ngOnInit()
  {
   this.service.getAutosTabla().subscribe(data =>{
      this.auto=data
    })
  }
  buscar(form:NgForm){
    this.service.getAutosTablaId(this.id).subscribe(
      data => {
        this.auto = data; 
        console.log(data)
        alert("Elemento encontrado: " + JSON.stringify(data));
      },
    )
   

  }
 
}