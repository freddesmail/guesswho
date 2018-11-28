import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamescreenComponent } from './gamescreen/gamescreen.component';
import { RemoteControlComponent } from './remote-control/remote-control.component';

@NgModule({
  declarations: [
    AppComponent,
    GamescreenComponent,
    RemoteControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
