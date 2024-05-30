import { Component, OnInit } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { IntegralService } from 'src/app/services/integral.service';

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
  inputValue: string = ''; // Variable que almacena el valor del campo de entrada
  color?: 'primary' | 'accent' | 'warn' | string;

  buttons: Button[][] = [
    [{ text: '1' }, { text: '2' }, { text: '3' }, { text: '+', color: 'accent' }, { text: '-', color: 'accent' }],
    [{ text: '4' }, { text: '5' }, { text: '6' }, { text: '*', color: 'accent' }, { text: '/', color: 'accent' }],
    [{ text: '7' }, { text: '8' }, { text: '9' }, { text: '^', color: 'accent' }, { text: '{a}^{b}', color: 'accent' }],
    [{ text: 'nth_root()', color: 'accent' }, { text: 'e' }, { text: 'pi' }, { text: 'sqrt', color: 'accent' }, { text: 'log10', color: 'accent' }],
  ];


  constructor(private intetegralService:IntegralService) { }
  

  ngOnInit() {
  }
  buttonClick(button: { text: string }) {
    this.inputValue += button.text; 

    console.log(`Clicked: ${button.text}`);
  }
  calculate(){
    /*this.intetegralService.save().subscribe(()=>{

    })*/
  }
  


}

