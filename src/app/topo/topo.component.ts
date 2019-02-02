import { Component } from '@angular/core'

@Component({
    selector: 'app-topo',
    templateUrl: './topo.component.html',
    styleUrls: ['./topo.component.css']
   // styles: [' .font-color-blue { color: blue }']
   //template: `<p>Hello Template</p>`   `Allows breaking lines
})
export class TopoComponent {

    public titulo: string = 'Aprendendo Inglês'

}