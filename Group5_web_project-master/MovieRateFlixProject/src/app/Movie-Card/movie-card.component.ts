import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  topRatedList : any;
  jsondata :any;
  ngOnInit(){
   
  }
  @Input()
  movie: Object;
 
  


}
