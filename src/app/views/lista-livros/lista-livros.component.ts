import { Component } from '@angular/core';
import { LivroService } from 'src/app/service/livro.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css'],
})
export class ListaLivrosComponent {
  listaLivros: any[];
  filtro: string = '';

  constructor(private service: LivroService) {}

  buscarLivros() {
    this.service.buscarLivros(this.filtro).subscribe(
      (res) => console.log(res),
      (error) => console.log(error)
    );
  }
}
