import { Component } from '@angular/core';

export interface ICard {
  title: string
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  toggle: boolean = true;

  cards: ICard[] = [
    { title: 'Card 1', text: 'This is card #1' },
    { title: 'This is card 2', text: 'This is card #2' },
    { title: 'Last card!', text: 'This is card #3' },
  ]

  toggleCards(): void {
    this.toggle = !this.toggle
  }
}
