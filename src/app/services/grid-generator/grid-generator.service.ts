import { Injectable } from '@angular/core';
import { NotifierService } from '../notifier/notifier.service';

@Injectable({
  providedIn: 'root'
})
export class GridGeneratorService {

  constructor(private notifierService: NotifierService) { }
  createMatrix(numbers: number[]): number[][]  {
    if (numbers.length !== 4) {
      this.notifierService.showErrorSnackbar("Generated Random Numbers exceeded the allowed limit")
      return [];
    }
  
    // Shuffle the numbers to ensure randomness in Latin square construction
    const shuffledNumbers = numbers.slice();
  
    // Construct the Latin square
    const matrix: number[][] = [];
    for (let i = 0; i < 4; i++) {
        matrix[i] = [];
        for (let j = 0; j < 4; j++) {
            matrix[i][j] = shuffledNumbers[(i + j) % 4];
        }
    }
  
    return matrix;
  }
  generateRandomNumbers(targetSum: any): number[]  {
    // Check if the target sum is greater than 20
    if (targetSum > 20) {
      this.notifierService.showErrorSnackbar("Input value must be from 1 - 20")
      return [];
    }
    
    const numbers: number[] = [];
    let remainingSum: number = targetSum;
    
    // Generate three random numbers
    for (let i = 0; i < 3; i++) {
        const num: number = Math.floor(Math.random() * remainingSum);
        numbers.push(num);
        remainingSum -= num;
    }
    
    // Add the fourth number to make the sum correct
    numbers.push(remainingSum);
    
    return numbers;
  }
  flattenArray(arr: any[][]): any[] {
    return arr.reduce((acc, curr) => acc.concat(curr), []);
  }
}
