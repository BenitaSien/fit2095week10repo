import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from "../database.service";

@Component({
  selector: 'app-deletemovie',
  templateUrl: './deletemovie.component.html',
  styleUrls: ['./deletemovie.component.css']
})
export class DeletemovieComponent implements OnInit {
  
  movieDB: any[] = [];
  title: string = "";
  constructor(private dbService: DatabaseService, private router: Router) {}

  ngOnInit(): void {
    this.onGetMovies;
  }

  // Delete movie by title
  onDeleteMovieByTitle() {
    this.dbService.deleteMovieByTitle(this.title).subscribe(result => {
      this.router.navigate(["/listmovies"]);
    });
  }

   // List movies
   onGetMovies() {
    this.dbService.getMovies().subscribe((data: any) => {
      this.movieDB = data;
    });
  }

}
