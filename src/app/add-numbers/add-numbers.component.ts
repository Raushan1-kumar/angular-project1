import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-numbers',
  imports: [FormsModule],
  templateUrl: './add-numbers.component.html',
  styleUrl: './add-numbers.component.css'
})
export class AddNumbersComponent {
    num1: number = 0;
    num2: number = 0;
    result:number=0;
    calculate(K:Event){
      let btn =  K.target as HTMLInputElement;
      if(btn.value=="add"){
        this.result = this.num1 + this.num2;
      }
      else if(btn.value=="subtract"){
        this.result = this.num1 - this.num2;
        }
      else if(btn.value == "mul"){
        this.result = this.num1 * this.num2;
      }
      else{
        this.result = this.num1 / this.num2;
      }
    }
}
