import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IntegralService } from 'src/app/services/integral.service';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Button {
  text: string;
  color?: 'primary' | 'accent' | 'warn' | string;
}

  @Component({
    selector: 'app-calculator',
    templateUrl: './calculator.component.html',
    styleUrls: ['./calculator.component.css'],

  })

export class CalculatorComponent implements OnInit {
cls() {
  this.inputValue =''
}
  inputValue: string = ''; 
  color?: 'primary' | 'accent' | 'warn' | string;

  buttons: Button[][] = [
    [{ text: '1' }, { text: '2' }, { text: '3' }, { text: '+', color: 'accent' }, { text: '-', color: 'accent' }],
    [{ text: '4' }, { text: '5' }, { text: '6' }, { text: '*', color: 'accent' }, { text: '/', color: 'accent' }],
    [{ text: '7' }, { text: '8' }, { text: '9' }, { text: '^', color: 'accent' }, { text: '{a}^{b}', color: 'accent' }],
    [{ text: 'nth_root()', color: 'accent' }, { text: 'e' }, { text: 'pi' }, { text: 'sqrt', color: 'accent' }, { text: 'log10', color: 'accent' }],
  ];
  form: FormGroup;


  constructor(private fb: FormBuilder, private integralService : IntegralService,private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      expression: [''],
      sub_intervals: [''],
      type_method: ['']
    });
  
  }
  
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 4000, 
    });
  }

  ngOnInit() {
  }
  buttonClick(button: { text: string }) {
    this.inputValue += button.text; 

    console.log(`Clicked: ${button.text}`);
  }
  calculate(){
    this.form.value.expression = `\\${this.inputValue} \\, dx`
    console.log(this.form.value.expression)
    this.integralService.save(this.form.value).subscribe(()=>{
      console.log('a')

    },() => {
      this.openSnackBar('asegurate de que el formato LaTeX sea corecto','Cerrar')
    });
  }
  addValue(value:string){
    this.inputValue += value
  }
  


}

