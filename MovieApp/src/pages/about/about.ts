import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { MovieProvider } from '../../providers/movie/movie'

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  public name$: Observable<movModel>
  constructor(private movieProvider: MovieProvider, public navCtrl: NavController) {
  }
  showProfile(name: any){
   this.name$=this.movieProvider.getProfile(name)
   }

}
