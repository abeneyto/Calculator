import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {
  @Output() buttonClicked = new EventEmitter<string | number>();

  @Input() digits: number[];
  @Input() operators: string[];
  constructor() { }

  ngOnInit(): void {
  }
  clickButton(dataClicked: number | number): void {
    console.log(dataClicked)
    this.buttonClicked.emit(dataClicked);
  }
}
