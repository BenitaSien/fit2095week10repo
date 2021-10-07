import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};
@Injectable({
  providedIn: "root",
})
export class DatabaseService {
  constructor(private http: HttpClient) {}
  result: any;
  getActors() {
    return this.http.get("/actors");
  }
  getActor(id: string) {
    let url = "/actors/" + id;
    return this.http.get(url);
  }
  createActor(data: { name: string; bYear: number; }) {
    return this.http.post("/actors", data, httpOptions);
  }
  updateActor(id: string, data: { name: string; bYear: number; }) {
    let url = "/actors/" + id;
    return this.http.put(url, data, httpOptions);
  }
  deleteActor(id: string) {
    let url = "/actors/" + id;
    return this.http.delete(url, httpOptions);
  }

  addMovie(data: {title: string; year: number}) {
    let url = "/movies";
    return this.http.post(url, data, httpOptions);
  }

  deleteMovieByTitle(title: string) {
    let url = "/movies/" + title + "/deletebytitle";
    return this.http.delete(url, httpOptions);
  }

  deleteMoviesBetweenYears(aYear1: number, aYear2: number){
    let url = "/movies/" + aYear1 + "/" + aYear2;
    return this.http.delete(url, httpOptions);
  }

  addActorToMovie(movieId: string, actorId: string) {
    let url = "/movies/" + movieId + "/actors";
    return this.http.post(url, {id: actorId}, httpOptions);
  }

  getMovies() {
    let url = "/movies";
    return this.http.get(url, httpOptions);
  }
}