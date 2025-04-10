import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { SecondComponent } from './second/second.component';
// import { ThirdComponent } from './third/third.component';
import { HeaderComponent } from './page/header/header.component';
import { FooterComponent } from './page/footer/footer.component';
import { BodyComponent } from './page/body/body.component';
import { AddNumbersComponent } from './add-numbers/add-numbers.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReverseStringPipe } from './reverse-string.pipe';
import { MyServiceService } from './my-service.service';


import { SquareNumberPipe } from './square-number.pipe';
import { disableDebugTools } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
  
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title="project"
  // i=100;
  // a:string="show";
  // k=false;
  // color='red';
  // names=["prabin","raja","aja","khaja"];
  // show(){
  //   this.k= !this.k;
  //   if(this.k===true){
  //     this.a="hide";
  //   }
  //   else{
  //     this.a="show";
  //   }
  // }
  // title = 'project';
  // color = 'red';
  // status = true;
  // change() {
  //   this.status = !this.status;
  // }



  message="";
  
  constructor(private obj:MyServiceService){ }
  fetchData(){
    this.obj.mymessage().subscribe(data=>
      this.message=data
    );
  }
}
