import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  fontColor: 'black' | 'red' | 'green' | 'blue' | 'orange' | 'purple' = 'black';
  buttonText: 'Preto' | 'Vermelho' | 'Verde' | 'Azul' | 'Laranja' | 'Roxo' =
    'Vermelho';
  fontSize: number = 20;

  mudaTamanho() {
    this.fontSize += 1;
    if (this.fontSize >= 40) {
      this.fontSize = 20;
    }
  }
  mudaCor() {
    if (this.fontColor === 'black') {
      this.fontColor = 'red';
      this.buttonText = 'Verde';
    } else if (this.fontColor === 'red') {
      this.fontColor = 'green';
      this.buttonText = 'Azul';
    } else if (this.fontColor === 'green') {
      this.fontColor = 'blue';
      this.buttonText = 'Laranja';
    } else if (this.fontColor === 'blue') {
      this.fontColor = 'orange';
      this.buttonText = 'Roxo';
    } else if (this.fontColor === 'orange') {
      this.fontColor = 'purple';
      this.buttonText = 'Preto';
    } else if (this.fontColor === 'purple') {
      this.fontColor = 'black';
      this.buttonText = 'Vermelho';
    }
  }
}
