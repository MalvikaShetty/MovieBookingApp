import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { MovieDetails } from '../models/movie.models';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
 
  constructor(public bservice:UserService) { }
  
  ngOnInit(): void {
    this.CheckLoggedIn();
    this.bservice.getMovieDetails1();
    console.log(this.bservice.listMovies);
    
  }


  loggedInCheck=false;

  CheckLoggedIn(){
    if(this.bservice.getMyGV()==true){
      this.loggedInCheck=true;
    }
    else{
      this.loggedInCheck=false;
    }
  
  }

  bookTicket(id:any){
    this.bservice.getMovieDetailsById(id);
  }
 
}
