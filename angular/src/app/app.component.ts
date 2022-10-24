import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calc';
  inputVals='';
  getInput(e: any) {
    e.preventDefault();
    console.log(e.target.innerHTML)
    const value = e.target.innerHTML;
    if(value == 'X') {
      this.inputVals += '*';
    } else if(value == '=' && this.inputVals == '.') {
        alert("Please enter a valid mathmatical expression.")
    } else if(value == 'DEL') {
      this.inputVals = this.inputVals.toString().slice(0, -1);
    } else if(value == 'RESET') {
      this.inputVals = '';
    } else if(value == '=') {
         this.inputVals = eval(this.inputVals);
    } else {
      this.inputVals += value;
    }
  }
}
