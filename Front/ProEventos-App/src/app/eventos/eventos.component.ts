import { Component, OnInit } from '@angular/core';
import { EventoService } from '../service/evento.service';
import { Evento } from '../models/Evento';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  public eventos: Evento[] = [];
  public eventosFiltrados: Evento[] = [];

  public widthImg : number = 150;
  public marginImg: number = 2;
  public mostrarImagem: boolean = true;
  private filtroListrado: string = '';

  public get filtroLista(): string {
    return this.filtroListrado;
  }

  public set filtroLista(value : string) {
    this.filtroListrado = value;
    this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos;
  }

  public filtrarEventos (filtrarPor : string) : Evento[] {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter((evento: { tema: string; local: string; }) => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
    evento.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1);
  };

  constructor(private eventoService: EventoService) { }


  public ngOnInit(): void {
    this.getEventos();
  }

  public alterarImagem() {
    this.mostrarImagem = !this.mostrarImagem;
  }

  public getEventos() : void {
    const observer = {
      next: (eventosResp : Evento[]) => {
        this.eventos = eventosResp;
        this.eventosFiltrados = this.eventos;

      },
      error: (error: any) => console.log(error),
      complete: () => {}
      };

    this.eventoService.getEventos().subscribe(observer);
  }

}
