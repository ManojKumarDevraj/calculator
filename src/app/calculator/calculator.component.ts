import { Component } from '@angular/core';
import { StringCalculatorService } from '../string-calculator.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  inputString: string = '';
  result: number | null = null;
  error: string | null = null;

  constructor(private calculatorService: StringCalculatorService) {}

  calculate() {
    try {
      this.result = this.calculatorService.add(this.inputString);
      this.error = null;
    } catch (err: any) {
      this.error = err.message;
      this.result = null;
    }
  }
}
