import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  varName : string = "";
  varEmpty : boolean = true;

  onKey(event: any) { // without type info
    if(this.varName.length == 0){
      this.varEmpty = true;
    }else{
      this.varEmpty = false;
    }
  }

  clearName(){
    this.varName = "";
    this.varEmpty = true;
  }

}
