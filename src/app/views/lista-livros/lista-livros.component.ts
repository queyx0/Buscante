import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LivroService } from 'src/app/service/livro.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css'],
})
export class ListaLivrosComponent {
  listaLivros: any[];
  filtro: string = '';
  subscription : Subscription

  constructor(private service: LivroService) {}

  buscarLivros() {
    this.subscription = this.service.buscarLivros(this.filtro).subscribe(
     {next: retornoAPI => console.log(retornoAPI),
      error: erro => console.log(erro),
      complete: ()=> console.log('Observable completo')}
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

  }
}
