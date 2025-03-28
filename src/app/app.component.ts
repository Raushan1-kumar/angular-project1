import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { HeaderComponent } from './page/header/header.component';
import { FooterComponent } from './page/footer/footer.component';
import { BodyComponent } from './page/body/body.component';
import { AddNumbersComponent } from './add-numbers/add-numbers.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,FooterComponent,BodyComponent,AddNumbersComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  i=100;
  a:string="show";
  k=false;
  show(){
    this.k= !this.k;
    if(this.k===true){
      this.a="hide";
    }
    else{
      this.a="show";
    }
  }
  title = 'project';
}
