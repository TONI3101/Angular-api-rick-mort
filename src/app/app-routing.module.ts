import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterPageComponent } from './page/character-page/character-page.component';
import { HomePageComponent } from './page/home-page/home-page.component';

const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path: "characters", component: CharacterPageComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
