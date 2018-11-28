import { GamescreenComponent } from './gamescreen/gamescreen.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RemoteControlComponent } from './remote-control/remote-control.component';

const routes: Routes = [
  { path: 'gamescreen', component: GamescreenComponent},
  {path: '', redirectTo: '/gamescreen', pathMatch: 'full'},
  { path: 'remote', component: RemoteControlComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
