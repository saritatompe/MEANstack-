import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import {MovieService} from '../Service/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movies: Object;
  reviews: Array<Object>;
  similarMovies: Array<Object>;
  cast: object;
  video: Object;
  review : Object;

  constructor(
    private _moviesServices: MovieService,
    private router: ActivatedRoute,
    private sanitizer: DomSanitizer
    ) {

  }

  ngOnInit() {
   
    let id = this.router.snapshot.paramMap.get('id'); 
    console.log(id);
   // const id =this.route.snapshot.params.id;
    this._moviesServices.getMovie(id).subscribe(res => {
        this.movies = res;
        var temp= JSON.stringify(this.movies);
        console.log(JSON.parse(temp));
        
      });
    }
}