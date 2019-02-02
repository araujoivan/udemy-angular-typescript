import { Component, OnInit } from '@angular/core';

import Coracao from '../shared/coracao.model'

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  public coracaoVazio: string = '/assets/coracao_vazio.png'
  public coracaoCheio: string = '/assets/coracao_cheio.png'

  //public coracoes: Coracao[]
  public coracoes: Array<Coracao> = []

  constructor() { 
    this.coracoes.push(new Coracao(true))
    this.coracoes.push(new Coracao(true))
    this.coracoes.push(new Coracao(true))
  }

  ngOnInit() {
  }

}
