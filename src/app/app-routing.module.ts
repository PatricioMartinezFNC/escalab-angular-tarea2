import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'harrypotter', loadChildren: () => import('./harry-potter/harry-potter.module').then(m => m.HarryPotterModule) }, { path: 'gameofthrone', loadChildren: () => import('./game-of-throne/game-of-throne.module').then(m => m.GameOfThroneModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
