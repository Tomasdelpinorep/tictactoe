import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAnalytics, provideAnalytics, ScreenTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { GamePageComponent } from './ui/game-page/game-page.component';
import { BoardComponent } from './components/board/board.component';
import { SquareComponent } from './components/square/square.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GamePageComponent,
    BoardComponent,
    SquareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({"projectId":"tictactoe-e4bd0","appId":"1:825053445910:web:2dd0d50fa9702db4ec1a37","storageBucket":"tictactoe-e4bd0.appspot.com","apiKey":"AIzaSyAh2a5a2XKmSZRhJvk7Z1IHm_pb0dcrijs","authDomain":"tictactoe-e4bd0.firebaseapp.com","messagingSenderId":"825053445910","measurementId":"G-SJK67F1Q3F"})),
    provideAnalytics(() => getAnalytics()),
    provideFirestore(() => getFirestore()),
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    ScreenTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
