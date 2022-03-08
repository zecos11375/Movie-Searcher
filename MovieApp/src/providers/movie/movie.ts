import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { movModel } from '../../models/movie.model'
/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {
  private movURL = 'http://8b054f60af82.ngrok.io'
  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }

  public getMovie(title: any) {
    return this.http.get<movModel>(this.movURL+'/get?ti='+title);
  }

  public getProfile(name: any) {
    return this.http.get<movModel>(this.movURL+'/getN?n='+name);
  }

  public newMovie(title:string,dir:string,dur:string,act1:string,
    act2:string,act3:string,gen:string,lang:string,coun:string,
    year:string,score:num,rev:string,link:string) {
    return this.http.get<movModel>(this.movURL+'/insert?ti='+title+
    '&di='+dir+'&du='+dur+'&a1='+act1+'&a2='+act2+'&a3='+act3+'&g='+
    gen+'&la='+lang+'&c='+coun+'&y='+year+'&s='+score+'&r='+rev+
    '&li='+link).subscribe(data=>{});;
  }


}
