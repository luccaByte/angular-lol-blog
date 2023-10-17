import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-plus-card',
  templateUrl: './plus-card.component.html',
  styleUrls: ['./plus-card.component.css']
})
export class PlusCardComponent {

  @Input()
  photoCover: string = ""
  @Input()
  cardTitle: string = ""
  @Input()
  Id: string = "0"
}
