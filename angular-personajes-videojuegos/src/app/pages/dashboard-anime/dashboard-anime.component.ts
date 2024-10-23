import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';  // <--- Importa FormsModule
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';


interface Personaje {
  id?: number;
  nombre: string;
  nivel: number;
  clase: string;
  habilidades: string;
  imagen: File | null;
}

  @Component({
  selector: 'app-dashboard-anime',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule],
  templateUrl: './dashboard-anime.component.html',
  styleUrl: './dashboard-anime.component.css'
})
export class DashboardAnimeComponent {
  title = 'personajes-videojuegos';

  personaje: any = {
    id: 0,
    nombre: '',
    nivel: '',
    clase: '',
    habilidades: '',
    imagen: null
  };
  personajes: any[] = [];
  isModalOpen = false;

  private apiUrl = 'https://localhost:44357/api/Personajes';

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    this.getPersonajes();
  }

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.resetForm();
    this.getPersonajes();
  }

  getPersonajes(): void {
    this.http.get<any[]>(this.apiUrl).subscribe(
      (personajes) => {
        this.personajes = personajes; // Asigna correctamente a this.personajes
        this.cdr.detectChanges(); // Llama a detectChanges si es necesario
      },
      (error) => {
        console.error('Error fetching personajes:', error);
      }
    );
  }
  

  onSubmit(form: NgForm): void {

    if (this.personaje.id === 0) {
      // Si el id es 0, se asume que se está creando un nuevo personaje
      this.http.post(this.apiUrl, this.personaje).subscribe(() => {
        this.getPersonajes();
        this.closeModal();
        Swal.fire('Éxito', 'Persona creada exitosamente.', 'success');
      }, (error) => {
        console.error('Error creando personaje:', error); // Manejo de error
      });
    } else {
      // Si el id es distinto de 0, se está actualizando un personaje existente
      this.http.put(this.apiUrl, this.personaje).subscribe(() => {
        this.getPersonajes();
        this.closeModal();
        Swal.fire('Éxito', 'Persona actualizada exitosamente.', 'success');
      }, (error) => {
        console.error('Error actualizando personaje:', error); // Manejo de error
      });
    }
  }    

  onFileChange(event: any) {
    const file = event.target.files[0];

    // Validación para permitir solo imágenes JPG y PNG
    if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
      this.personaje.imagen = URL.createObjectURL(file); // Crear URL de objeto para la vista previa
    } else {
      Swal.fire('Error', 'Solo se permiten archivos PNG y JPG.', 'error');
      this.personaje.imagen = null; // Resetear imagen si hay un error
    }
  }

  resetImageInput() {
    this.personaje.imagen = null; // Resetear la imagen en el objeto personaje
    const fileInput: HTMLInputElement = document.getElementById('imagen') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = ''; // Limpiar el valor del input de archivo
    }
  }

  removeImage() {
    this.resetImageInput(); // Limpiar la imagen y el input de archivo
  }

  editPersonaje(person: any): void {
    this.personaje = { ...person };
    this.openModal();
  }

  verItem(personaje: Personaje) {
    // Lógica para mostrar más detalles del personaje
    // Puedes abrir un nuevo modal o navegar a una página de detalles
  }
  deletePersonaje(id: number): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminarlo',
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.delete(`${this.apiUrl}/${id}`).subscribe(() => {
          this.getPersonajes();
          Swal.fire('¡Eliminado!', 'El personaje ha sido eliminada.', 'success');
        });
      }
    });
  }

  resetForm() {
    this.personaje = {
      id: 0,
      nombre: '',
      nivel: '',
      clase: '',
      habilidades: '',
      imagen: null
    };
  }

}
