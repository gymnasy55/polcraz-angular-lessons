import {Component, Input, OnInit} from "@angular/core";
import {ICard} from "../app.component";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: ICard = {
    title: 'Default title',
    text: 'Default text'
  }

  @Input() index: Number = 0

  title: string = 'My Card Title'
  text: string = 'My Sample Text'
  textColor: string = ''

  cardDate: Date = new Date()

  ngOnInit(): void { }

  changeTitle() {
    this.card.title = 'Title has been changed'
  }

  inputHandler(value: any) {
    this.title = value
  }

  changeHandler() {
    console.log(this.title)
  }

}
