import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../Service/movie.service';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Component({
  selector: 'movies',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent  implements OnInit{

  topRatedList: any;
  topRatedListResp :any;
  searchMoviesdata:any;
  searchStr: string;

  constructor(private _moviesService: MovieService){
     debugger;
      this._moviesService.getTopRatedMovies().subscribe((res)=>{
      this.topRatedListResp = res;
     
    })
  }
  ngOnInit() {
       
  } 
   
  searchMovies() {
    
    this._moviesService.searchMovies(this.searchStr).subscribe((res) => {
      this.searchMoviesdata = res;
    })
    // if(this.searchStr){
    //   console.log(this.searchStr);
    // }
  }

}
