import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  msgError = '';
  result = '';
  digits: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  operators: string[] = ['*', '-', '+', '/'];

  constructor() { }

  ngOnInit(): void {
  }
  addToOperation(value: number | string): void {
    if (this.result.length === 0) {
      typeof value === 'number' ? this.result += value : this.msgError = 'Invalid data.'
    } else {
      if (this.operators.some(operator => this.result.includes(operator))) {
        typeof value === 'number' ? this.result += value : this.msgError = 'Please, only one operation per time.'
      } else {
        this.result += value;
      }
    }
  }
}
