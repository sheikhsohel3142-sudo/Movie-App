import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Movie } from './services/movie';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Movie-Web-App');
  movieList:any;
  a:any;
  typingTimer: any;




constructor(private movie: Movie){}

inputValue(event: Event){
  clearTimeout(this.typingTimer);  // ← हर keypress पर timer reset

  this.a = (event.target as HTMLInputElement).value;

  // 400ms wait karega, fir API fire hogi → smooth search
  this.typingTimer = setTimeout(() => {
    if(this.a.length > 2){              // ← 3 letters se pehle search nahi hoga
      this.movie.getMovieList(this.a).subscribe((res:any)=>{
        this.movieList = res.Search;
        console.log(this.movieList)
      });
    } else {
      this.movieList = null;           // ← input chhota hoga to list clear
    }
  }, 400);
}

  getMovie(){
  this.movie.getMovieList(this.a).subscribe((res:any)=>{
    this.movieList = res.Search;   // <-- multiple movies
    console.log(this.movieList);
  })
}
  
}


    
 
  



