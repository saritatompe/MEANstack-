import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MovieComponent} from './Movies/movie.component';
import { MovieDetailComponent } from '../app/Movie_detail/moviedetail.component';
import { ReviewComponent } from './Reviews/reviews.component';
import { GenresComponent } from './Genre/genre.component';


const routes: Routes = [
  { path: '', component: MovieComponent },
  { path: 'listreviwes', component: ReviewComponent },
  { path : 'movie/:id', component: MovieDetailComponent},
  {path: 'genres/:id', component: GenresComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
