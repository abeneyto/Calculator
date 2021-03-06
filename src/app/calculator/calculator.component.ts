import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  msgError = '';
  result = '';
  operation = {
    firstNumber: '',
    operator: '',
    secondNumber: ''
  };
  dataButtons: (string | number)[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '*', '-', '+', '/'];

  constructor() { }

  ngOnInit(): void {
  }
  addToOperation(value: number | string): void {
    this.msgError = '';
    if (!this.operation.firstNumber) {
      typeof value === 'number' ? this.operation.firstNumber += value : this.msgError = 'Invalid data.'
    } else {
      if (this.operation.operator) {
        typeof value === 'number' ? this.operation.secondNumber += value :
          this.msgError = 'Please, only one operation per time.';
      } else {
        typeof value === 'number' ? this.operation.firstNumber += value : this.operation.operator = value;
      }
    }
  }
  submitOperation(): void {
    this.msgError = '';
    if (this.operation.firstNumber && this.operation.operator && this.operation.secondNumber) {
      this.result = eval(`${this.operation.firstNumber}${this.operation.operator} ${this.operation.secondNumber}`);
      console.log(this.result);
    } else {
      this.msgError = 'Incorrect operation';
    }
  }
  deleteData(): void {
    this.msgError = '';
    this.result = '';
    this.operation = {
      firstNumber: '',
      operator: '',
      secondNumber: ''
    };
  }
}
