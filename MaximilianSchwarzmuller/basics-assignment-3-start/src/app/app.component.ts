import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrLog = [
    {
      'number':'0',
      'time': new Date().toString()
    }, 
    {
      'number':'1',
      'time': new Date().toString()
    }
  ];

  myStyle = {'color': 'red'};

  getStyle(){
    return this.myStyle;
  }

  creatNewArrLogObj(){
    return {
      'number': this.arrLog.length.toString(),
      'time': new Date().toString()
    }
  }

  getColor(number){
    if(number>4){
      return 'blue';
    }
    return 'white';
  }

  onBtnClick(){
    if(this.myStyle.color == 'red'){
      this.myStyle.color = 'black'
    }else{
      this.myStyle.color = 'red'
    }
    this.arrLog.push(this.creatNewArrLogObj());
  }

}
