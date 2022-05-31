import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-viewer',
  templateUrl: './result-viewer.component.html',
  styleUrls: ['./result-viewer.component.scss']
})
export class ResultViewerComponent implements OnInit {
  @Input() result;
  constructor() { }

  ngOnInit(): void {
  }
  addToOperation(value: Event): void {
    console.log(value);
  }
}
