import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MovieComponent } from '../app/Movies/movie.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ReviewComponent } from './Reviews/reviews.component';
import { MovieCardComponent } from '../app/Movie-Card/movie-card.component';
import { GenresComponent } from '../app/Genre/genre.component';
import  {MovieDetailComponent } from '../app/Movie_detail/moviedetail.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    ReviewComponent,
    MovieDetailComponent,
    MovieCardComponent,
    GenresComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
   
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
