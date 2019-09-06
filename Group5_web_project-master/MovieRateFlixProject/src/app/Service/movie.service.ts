import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpClientModule  } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Movie} from './movie';
const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
   'Access-Control-Allow-Methods': 'GET,PUT,POST,OPTIONS'
  })
};
@Injectable({
  providedIn: 'root'
})
export class MovieService {
 
  private baseUrl: string = 'http://localhost:8081';

  constructor(private httpClient: HttpClient){}
  private movies:any  = []; 

  
  // getMovieDetails(){
  // return   this.httpClient.get(this.baseUrl + '/listmovies');
  // }
  getGenre(){
    return this.httpClient.get(this.baseUrl+'/genre');
    }
  postReviews(user :any){
    return this.httpClient.post(this.baseUrl+'/review',user,{responseType:'text'});
  }
  getTopRatedMovies(){
    return this.httpClient.get(this.baseUrl+'/topratedmovies');
  }
 
  getMoviesByGenre(id: string) {
    var search = new URLSearchParams();
    return this.httpClient.get(this.baseUrl+'/genres/'+ id);
  }

  getMovie(id : any){
    debugger
   return this.httpClient.get(this.baseUrl+'/movie/'+id);
  }

  searchMovies(searchstr :string){
  return  this.httpClient.get(this.baseUrl+'/topratedmovies');
  }

  getMovieNames(){
    return this.httpClient.get(this.baseUrl+'/movienames');
  }
  
  
}
