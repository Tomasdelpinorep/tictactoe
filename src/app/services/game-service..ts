import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, doc, getDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(public firestore: Firestore) { }

  async createNewGame(player1: string | null) {
    const gameRef = await addDoc(collection(this.firestore, 'games'), {
      player1: player1,
      player2: '',
      winner: ''
    });
    console.log('Game created with ID: ', gameRef.id);

    // Retrieve the document data using the gameRef
    const gameDoc = await getDoc(doc(this.firestore, 'games', gameRef.id));

    // Return the document data
    return gameDoc.data();
  }
}
