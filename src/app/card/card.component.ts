import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  title: string = 'My Card Title'
  text: string = 'My Sample Text'

  ngOnInit(): void { }

  changeTitle() {
    this.title = 'Title has been changed'
  }

  inputHandler(value: any) {
    this.title = value
  }

  changeHandler() {
    console.log(this.title)
  }

}
