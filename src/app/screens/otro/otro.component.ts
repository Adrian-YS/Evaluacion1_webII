import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PersonajesService } from '../../services/personajes.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-api-vehiculo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './otro.component.html',
  styleUrls: ['./otro.component.css']
})
export class OtroComponent implements OnInit {
  servicio = inject(PersonajesService);
  personaje: any[] = []; // Asegúrate de que sea un array

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.servicio.getPersonaje().subscribe(
      (p: any) => {
        console.log('Datos recibidos del servicio:', p); // Verifica la respuesta aquí
        if (p && p.personajes) {
          this.personaje = p.personajes; // Asegúrate de que estás asignando la propiedad correcta
        } else {
          console.warn('La respuesta no contiene personajes:', p);
          this.personaje = []; // Asigna un array vacío si no hay personajes
        }
        this.cdr.detectChanges(); // Forzar la detección de cambios si es necesario
      },
      (error) => {
        console.error('Error al obtener los personajes:', error); // Manejar errores
        this.personaje = []; // Asegúrate de que esté vacío en caso de error
      }
    );
  }
  

  trackByFn(index: number, item: any): any {
    return item.id || index; // Usar 'item.id' para hacer seguimiento si está disponible
  }
}
