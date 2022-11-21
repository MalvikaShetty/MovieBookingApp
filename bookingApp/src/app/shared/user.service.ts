import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../models/user.model';
import { LoginUser } from '../models/login.model';
import { MovieDetails } from '../models/movie.models';
import { Cart } from '../models/cart.models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  readonly baseURL='https://localhost:7243/api/Users'
  readonly baseURLMovie='https://localhost:7243/api/MovieDetails'
  readonly baseURLCart='https://localhost:7243/api/Cart'
  formData:Users=new Users();
  formDatalogin:LoginUser=new LoginUser();
  formDataCart:Cart=new Cart();
  list: Users[] = [];
  listMovies: MovieDetails[] = [];
  listMoviesById: MovieDetails[] = [];
  loggedIn=false;

  setMyGV(val: boolean){
    this.loggedIn = val;
  }

  getMyGV(){
    return this.loggedIn;
  }

  postUserDetails(card:Users): Observable<any>{
    return this.http.post<any>(this.baseURL+"/createUser", this.formData);
  }

  postCartDetails(cart:Cart): Observable<any>{
    return this.http.post<any>(this.baseURLCart+"/addtocart", this.formDataCart);
  }

  getCartTotalAmt(): Observable<any>{
    return this.http.post<any>(this.baseURLCart+"/cartTotal/"+ this.formDataCart.userId + "/" + this.formDataCart.dateOfMovie + "/" + this.formDataCart.movieId, this.formDataCart);
  }

  // getCartDetails1(){
  //   this.http.get<MovieDetails[]>(this.baseURLMovie+'/cardDeets').subscribe((data) => {
  //     // console.log(data);
  //     this.listMovies = data;
  //     console.log(this.listMovies);
  //     console.log('myname is malvika');
  //   });

  getListDetails(){
    this.http.get(this.baseURL).toPromise().then(res=> this.list = res as Users[]);
   
  }

  loginUser(card:any): Observable<any>{
    return this.http.post<any>(this.baseURL+"/loginUser", this.formDatalogin,{responseType:'text' as 'json'});
  }

  // getMovieDetails():Observable<MovieDetails[]>{
  //   // console.log( this.http.get<MovieDetails[]>(this.baseURLMovie+'/movieDeets'));
  //   return this.http.get<MovieDetails[]>(this.baseURLMovie+'/movieDeets');
  //   // this.http.get(this.baseURLMovie+'/movieDeets').map((res: Response) => res.json());
   
  // }

  getMovieDetails1(){
    this.http.get<MovieDetails[]>(this.baseURLMovie+'/movieDeets').subscribe((data) => {
      // console.log(data);
      this.listMovies = data;
      console.log(this.listMovies);
      console.log('myname is malvika');
    });
    // this.http.get(this.baseURLMovie+'/movieDeets').map((res: Response) => res.json());
   
  }

  getMovieDetailsById(id:number): Observable<MovieDetails[]>{
    return this.http.get<MovieDetails[]>(this.baseURLMovie+'/'+ id);
    // this.http.get<MovieDetails[]>(this.baseURLMovie+'/'+ id).subscribe((data) => {
    //   this.listMoviesById = data;
    //   console.log(this.listMoviesById);
    //   console.log('myname is malvika');
    };
    // this.http.get(this.baseURLMovie+'/movieDeets').map((res: Response) => res.json());
   
  // }


  // putCardDetails(): Observable<any>{
  //   return this.http.put<any>(this.baseURL+'/'+ this.formData.paymentDetailId , this.formData);
  // }

  // deleteCardDetails(id:number): Observable<any>{
  //   return this.http.delete<any>(this.baseURL+'/'+ id);
  // }

}
