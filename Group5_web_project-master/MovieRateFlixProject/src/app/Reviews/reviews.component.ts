import { Component,ViewChild, OnInit } from '@angular/core';
import { MovieService } from '../Service/movie.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'listreviwes',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewComponent implements OnInit{
  @ViewChild('userreview') formValues;
  private uname :string
  private rating: number; 
  private mname :string;
  private comment :string;
  private selected_movie:string; 
  movie_name_list : object;
  
 private movies : Observable<any[]> ; 
  constructor(private movieService: MovieService) { }
  onChange(deviceValue) {
    console.log(deviceValue);
    this.selected_movie=deviceValue;

  }
  ngOnInit() {
    this.movieService.getMovieNames().subscribe(res => {
      this.movie_name_list = res;
      var temp= JSON.stringify(this.movie_name_list);
      console.log(JSON.parse(temp));
      
    });
  }
  onClickSubmit(data) {
    debugger;
    var temp={
      "user":data.uname,
      "id" : this.selected_movie,
      
      "comment":data.comment,
      "rating":data.rating
    }
 //   console.log("User Review \n Username : " + data.uname+"\n Movie_Name :"+data.mname+"\n User_comment:"+data.comment+"\n Rating :"+data.rating);
     this.movieService.postReviews(temp).subscribe((res) => {
      console.log(res);
    })
  //    console.log("movies"+this.movies);    
    this.formValues.resetForm();
  //   console.log("Response"+JSON.stringify(resp));
  // }
  }
}
