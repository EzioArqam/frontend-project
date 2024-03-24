import { Component, ErrorHandler, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { LimitToTwentyDirective } from '../../directives/limit-to-twenty/limit-to-twenty.directive';
import { ScriptingErrorHandler } from '../../global-error-handler/error-handler.service';
import { GridGeneratorService } from '../../services/grid-generator/grid-generator.service';
import { NotifierService } from '../../services/notifier/notifier.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [MatInput,MatLabel,MatFormField,ReactiveFormsModule,MatButton,LimitToTwentyDirective],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss',
  providers: [{provide: ErrorHandler, useClass: ScriptingErrorHandler}]
})
export class UserInputComponent {
  constructor(private gridGenerator: GridGeneratorService,
     private notifierService: NotifierService){

  }
  gridGeneratorForm = new FormGroup({
    totalSum: new FormControl('')
  });
  @Output() gridGenerationInvoked: EventEmitter<any> = new EventEmitter();
  gridItems:  number[][]= [];
  
  onGenerateGrid(){
    if(this.gridGeneratorForm.controls['totalSum'].value !== "" && this.gridGeneratorForm.controls['totalSum'].value !== undefined){
    let randomNumbers = this.gridGenerator.generateRandomNumbers(this.gridGeneratorForm.controls['totalSum'].value);
    this.gridItems = this.gridGenerator.createMatrix(randomNumbers);
    let flattenedArray = this.gridGenerator.flattenArray(this.gridItems)
    this.gridGenerationInvoked.emit({
      gridNumbers: flattenedArray
    })
    this.notifierService.showInfoSnackbar("Grid Generated Successfully")
    if(this.checkRowSums(this.gridItems) && this.checkColSums(this.gridItems)){
      this.notifierService.showInfoSnackbar("The generated Sums equal to the Actual Sum")
    }
    else{
      this.notifierService.showErrorSnackbar("The generated Sums do not equal to the actual sum")
    }
  }
  else{
    this.notifierService.showErrorSnackbar("Please Enter a value for Total Sum to Proceed");
  }
  }
  checkRowSums(matrix: number[][]){
    let sum = 0
    for(let i=0; i<4; i++){
      for(let j=0; j<4; j++){
          sum = sum + matrix[i][j];
      }
      if(!this.checkWithActualSum(sum)){
        return false; 
      }
      sum = 0;
    }
    return true;
  }
  checkColSums(matrix: number[][]){
    let sum = 0
    for(let i=0; i<4; i++){
      for(let j=0; j<4; j++){
          sum = sum + matrix[j][i];
        }
        if(!this.checkWithActualSum(sum)){
          return false;
        }
        sum = 0;
    }
    return true;
  }
  checkWithActualSum(sum: number){
  if(this.gridGeneratorForm.controls['totalSum'].value == sum.toString()){
     return true;
  }
  else{
    return false;
  }
  }
}
