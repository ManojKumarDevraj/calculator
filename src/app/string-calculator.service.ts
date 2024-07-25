import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StringCalculatorService {
  constructor() {}

  add(numbers: string): number {
    if (!numbers) {
      return 0;
    }

    let delimiter = ',';
    if (numbers.startsWith('//')) {
      const delimiterEndIndex = numbers.indexOf('\n');
      delimiter = numbers.substring(2, delimiterEndIndex);
      numbers = numbers.substring(delimiterEndIndex + 1);
    }
    const delimiters = new RegExp(`[${delimiter}\n]`);
    const numberArray = numbers.split(delimiters).map((n) => parseInt(n, 10));

    const negatives = numberArray.filter((n) => n < 0);
    if (negatives.length) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
    }

    return numberArray.reduce((sum, number) => sum + number, 0);
  }
}