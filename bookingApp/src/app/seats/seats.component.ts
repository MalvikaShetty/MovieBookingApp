import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../shared/user.service';
import { CommonModule } from '@angular/common';
import { MovieDetails } from '../models/movie.models';
import { Cart } from '../models/cart.models';
// import {name, countSelected} from '../../seats.js';

// declare var populateUI: any;
// declare var setMovieData: any;
// declare var updateSelectedCount: any;
declare var name: any;
declare var countSelected: any;


@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {

  listMoviesById: MovieDetails[] = [];
  // cartTotal:  Map<string,number> = {};
  cartTotal: {[key: string]: number} = {} ;
  list: Cart[] = [];
  // cartTotal = this.sservice.getCartTotalAmt()
  // formDataCart:Cart=new Cart();
  // SeatsArray = [];
  
  constructor(public sservice:UserService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    //var amountTotal =this.sservice.formDataCart.amount;
    // populateUI();
    // setMovieData();
    // updateSelectedCount();
    
    this.sservice.getMovieDetailsById(this.route.snapshot.params['movieId']).subscribe(
      (data: MovieDetails[]) => this.listMoviesById = data);
      
    countSelected();
    // this.sservice.getMovieDetailsById(this.route.snapshot.params['movieId']);
    console.log(this.sservice.listMoviesById);
  }
  cartSum(){
    var res=0;
    console.log(this.cartTotal["A1"]+" carttt total");
    for(var m in this.cartTotal){
      // this.cartTotal[m]
      res+=this.cartTotal[m];
      console.log(this.cartTotal[m]+" carttt ww total");
    }
    return res;
  }
  
  toggleA1 = true;
  toggleA2 = true;
  toggleA3 = true;
  amt = 0;
saveToTable(){
  this.sservice.postCartDetails(this.sservice.formDataCart).subscribe(
    (res: any) => {
      alert("Added Successfully")
      console.log(res);
      this.amt = res.amount;
      }, 
    ( err: any) => {console.log(err);});
    console.log("workkks");
} 

selectSeat(x:any) {
  
    if(x=='A1'){
      this.toggleA1 = !this.toggleA1;
      if(this.toggleA1==false){
        delete this.cartTotal[1];
      }
      this.sservice.formDataCart={
        "id":0,
        "seatNo":"A1",
        "userId": this.sservice.formData.userId,
        "dateOfMovie":"2022-11-18",
        "amount":100,
        "movieId": 1,
        "paid":"No"
     }

    this.cartTotal["A1"] !== undefined ? [this.sservice.formDataCart.amount]:'10';
     
    console.log(this.cartTotal["A1"]+" cart total");
    //  this.list.
     console.log(JSON.stringify(this.sservice.formDataCart));
      // amt =this.sservice.formDataCart.amount;

    }

    if(x=='A2'){
      this.toggleA2 = !this.toggleA2;
      this.sservice.formDataCart={
        "id":0,
        "seatNo":"A2",
        "userId":this.sservice.formData.userId,
        "dateOfMovie":"2022-11-18",
        "amount":101,
        "movieId": 1,
        "paid":"No"
     }
    //  this.cartTotal.add(this.sservice.formDataCart.amount);
    this.cartTotal["A2"] !== undefined ? [this.sservice.formDataCart.amount]:'99';
     console.log(JSON.stringify(this.sservice.formDataCart));
    }

    if(x=='A3')
    this.toggleA3 = !this.toggleA3;
    if(this.toggleA3 == false){
    console.log(x);
   }

 

   console.log(this.sservice.formDataCart.amount);
   console.log('Thissss');
   return x; 
}

}


