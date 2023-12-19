import { Component } from '@angular/core';
import { GameService } from './services/game-service.';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Game } from './models/game';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tictactoe';
  form: FormGroup;
  playerName = new FormControl('', [Validators.required]);

  constructor(private gameService: GameService, public firestore: Firestore, private fb: FormBuilder) {
    this.form = this.fb.group({
      playerName: this.playerName
    });
  }


  getReadyGame() {
    if (this.form.valid) {
      const gamesRef = collection(this.firestore, 'games');
      const gamesObservable = collectionData(gamesRef, { idField: 'id' }) as Observable<Game[]>;

      gamesObservable.subscribe(resp => {
        const games = resp;
        for (let g of games) {
          if (g.player1 === '') {
            return g;
          }
        }

        return this.gameService.createNewGame(this.playerName.value);
      })
    }else{
      console.log("Form is invalid")
    }
  }

}
