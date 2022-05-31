import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  digits: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  operators: string[] = ['*', '-', '+', '/'];

  constructor() { }

  ngOnInit(): void {
  }

}
