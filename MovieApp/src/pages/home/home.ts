import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { MovieProvider } from '../../providers/movie/movie'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public movie$: Observable<movModel>
  constructor(private movieProvider: MovieProvider, public navCtrl: NavController) {
  }
  showMovie(title:any){
    this.movie$=this.movieProvider.getMovie(title)
  }
}
