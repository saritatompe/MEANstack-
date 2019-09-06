import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

 import {MovieService} from '../Service/movie.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenresComponent implements OnInit {
  title: string;
  movies: Object;
  // movies :any;
  constructor(
    private _moviesServices: MovieService,
    private router: ActivatedRoute ) {

  }

  ngOnInit() {
   this.router.params.subscribe((params) => {
      const id = params['id'];
      this.title = params['name'];
      this._moviesServices.getMoviesByGenre(id).subscribe((res )=>{
        //console.log(res);
        this.movies = res;
     });
    })
  }

}
