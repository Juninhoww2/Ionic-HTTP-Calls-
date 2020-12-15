import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  MyVariable: string = "The force is with me!";

  updateMyValue() {
    this.MyVariable = "Now the force is even stronger!";
  }
}
