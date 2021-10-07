import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit {

  title: string = "";
  year: number = 0;
  movieDB: any[] = [];

  constructor(private dbService: DatabaseService, private router: Router) {}
  // Add movie
  onAddMovie() {
    let obj = { title: this.title, year: this.year };
    this.dbService.addMovie(obj).subscribe(result => {
      this.router.navigate(["/listmovies"]);
    });
  }

  onGetMovies() {
    this.dbService.getMovies().subscribe((data: any) => {
      this.movieDB = data;
    });
  }

  ngOnInit(): void {
  }

  

}
