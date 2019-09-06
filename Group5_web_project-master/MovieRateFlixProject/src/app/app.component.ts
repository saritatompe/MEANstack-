import { Component } from '@angular/core';
import { MovieService } from './Service/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MovieRateFlixProject';
  public searchText : string;
  public genre :any;
  constructor(private _moviesService: MovieService){
    
    this._moviesService.getGenre().subscribe((res )=>{
      //console.log(res);
      this.genre = res;
    
   });
  }
}
