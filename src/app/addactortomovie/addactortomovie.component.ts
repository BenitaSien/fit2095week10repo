import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-addactortomovie',
  templateUrl: './addactortomovie.component.html',
  styleUrls: ['./addactortomovie.component.css']
})
export class AddactortomovieComponent implements OnInit {

  movieDB: any[] = [];
  actorsDB: any[] = [];
  movieId: string = "";
  actorId: string = "";
  
  constructor(private dbService: DatabaseService, private router: Router) {}

  ngOnInit() {
    this.onGetMovies();
    this.onGetActors();
  }

  onGetActors() {
    this.dbService.getActors().subscribe((data: any) => {
      this.actorsDB = data;
    });
  }

  // List movies
  onGetMovies() {
    this.dbService.getMovies().subscribe((data: any) => {
      this.movieDB = data;
    });
  }

  // Add actor to movie
  onAddActorToMovie() {
    this.dbService.addActorToMovie(this.movieId, this.actorId).subscribe(result => {
      this.onGetMovies();
    });
  }

  onSelectActor(actorId: string){
    this.actorId = actorId;
  }

  onSelectMovie(movieId: string){
    this.movieId = movieId;
  }

}
