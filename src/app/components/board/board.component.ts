import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {
  boardCols = [1,2,3];
  boardRows = [1,2,3];
  turn = 'x';
  setX: boolean | undefined;
  setO: boolean | undefined;

  setSquare(){
    if(this.turn == 'x'){

    }
  }
}
