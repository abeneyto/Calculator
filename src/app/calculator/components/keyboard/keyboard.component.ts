import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {
  @Output() buttonClicked = new EventEmitter<string | number>();
  @Output() submit = new EventEmitter();
  @Output() delete = new EventEmitter();
  @Input() dataButtons: (string | number)[];
  constructor() { }

  ngOnInit(): void {
  }
  clickButton(dataClicked: number | number): void {
    this.buttonClicked.emit(dataClicked);
  }
  submitClick(): void {
    this.submit.emit();
  }
  deleteClick(): void {
    this.delete.emit();
  }
}
