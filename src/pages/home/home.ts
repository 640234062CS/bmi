import { BmiProvider } from './../../providers/bmi/bmi';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  height:number;
  weight:number;
  bmivalue:number;

  constructor(public bmiRest:BmiProvider, public navCtrl: NavController) {

  }

  CalculateBMI(){
    console.log(this.height);
    console.log(this.weight);
    this.bmivalue=this.bmiRest.bmiCalculate(this.height,this.weight)


  }
}
