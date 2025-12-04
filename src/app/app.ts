import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Movie } from './services/movie';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Movie-Web-App');
  movieName:any;
  a:any;
  constructor(private movie:Movie){}
  inputValue(event:Event){
    this.a = (event.target as HTMLInputElement).value;
    
         this.movie.getMovieByTitle(this.a).subscribe((res:any)=>
    { 
      this.movieName=res;
      

      console.log(res);
    })

  }
  getMovie(){
        this.movie.getMovieByTitle(this.a).subscribe((res:any)=>
    { 
      this.movieName=res;
      

      console.log(res);
    })
  
}
}

    
 
  



