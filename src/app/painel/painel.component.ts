import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model'
import { FRASES } from './frases.mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public instrucao : string = 'Traduza a frase:'
  public frases: Frase[] = FRASES
  public resposta: string

  public rodada : number = 0
  public rodadaFrase : Frase
  public progresso : number = 0

  constructor() {

    this.rodadaFrase = this.frases[this.rodada]

  }

  ngOnInit() {
  }

  public atualizaResposta(ev: Event) : void {
     this.resposta = (<HTMLInputElement>ev.target).value
  }

  public verificarResposta() : void {

    if(this.rodadaFrase.frasePtBr == this.resposta) {
      alert('Acertou')
      this.rodada++
      this.rodadaFrase = this.frases[this.rodada]
      this.progresso = this.progresso + (100 / this.frases.length)
    } else {
      alert('Errou')
    }
  }
}
