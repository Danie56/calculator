import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],

})
export class CalculatorComponent implements OnInit {
  inputValue: string = ''; // Variable que almacena el valor del campo de entrada


  buttons: { text: string }[][] = [
    [{ text: '1' }, { text: '2' }, { text: '3' }, { text: '+' }, { text: '-' }],
    [{ text: '4' }, { text: '5' }, { text: '6' }, { text: '*' }, { text: '/' }],
    [{ text: '4' }, { text: '5' }, { text: '6' }, { text: '*' }, { text: '/' }],
  ];


  constructor() { }

  ngOnInit() {
  }
  buttonClick(button: { text: string }) {
    this.inputValue += button.text; 

    console.log(`Clicked: ${button.text}`);
  }


}
