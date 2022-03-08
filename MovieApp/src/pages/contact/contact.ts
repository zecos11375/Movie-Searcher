import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { MovieProvider } from '../../providers/movie/movie'
import { movModel } from '../../models/movie.model'

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  public newMovie$: Subscription<movModel>;
  public title: string;
  public dir: string;
  public dur: string;
  public act1: string;
  public act2: string;
  public act3: string;
  public gen: string;
  public lang: string;
  public coun: string;
  public year: string;
  public score: num;
  public rev: string;
  public link: string;


  constructor(private movieProvider: MovieProvider, public navCtrl: NavController) {

  }
  insertMovie(title:string,dir:string,dur:string,act1:string,act2:string,act3:string,
                       gen:string,lang:string,coun:string,year:string,score:num,rev:string,link:string){
    this.newMovie$=this.movieProvider.newMovie(title,dir,dur,act1,act2,act3,
                       gen,lang,coun,year,score,rev,link)
  }


}
