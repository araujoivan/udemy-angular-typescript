import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit {

  //@Input('xyz') public progresso : number   //no binding do html iria [xyz]="progresso"
  @Input() public progresso : number

  constructor() { }

  ngOnInit() {
  }

}
