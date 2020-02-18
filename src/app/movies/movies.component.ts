import { Component, OnInit } from '@angular/core';
import {MovieServie} from '../movie.service';

@Component({
  selector: 'app-movies',
 template: `<h2>Movies</h2>
 <div *ngFor="let movie of movies">
 <app-movie [data]="movie" ></app-movie>
 </div>`,
  styleUrls: ['./movies.component.css'],
  providers : [MovieServie]
})
export class MoviesComponent implements OnInit {
  movies;
  constructor(private moviesServices : MovieServie) { 
    this.movies = this.moviesServices.getMovies();
  }
  
  ngOnInit(): void {
   
  }

}
