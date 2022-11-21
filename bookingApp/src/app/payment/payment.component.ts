import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  cartTotalAmt = this.pservice.getCartTotalAmt();
  
  constructor(public pservice:UserService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    // console.log(cartTotalAmt);
  }
 
}
