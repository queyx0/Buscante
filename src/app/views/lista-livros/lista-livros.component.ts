import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Item, Livro } from 'src/app/models/interfaces';
import { LivroVolumeInfo } from 'src/app/models/livroVolumeInfo';
import { LivroService } from 'src/app/service/livro.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css'],
})
export class ListaLivrosComponent {
  listaLivros: Livro[];
  filtro: string = '';
  subscription : Subscription
  livro: Livro

  constructor(private service: LivroService) {}

  buscarLivros() {
    this.subscription = this.service.buscarLivros(this.filtro).subscribe(
    {next: items => {this.listaLivros = this.livrosResultadoParaLivros(items)},
      error: erro => console.log(erro),
    }
    );
  }

  livrosResultadoParaLivros(items: Item[]): LivroVolumeInfo[]{
    return items.map(item => {
      return new LivroVolumeInfo(item)
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
