import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public lservice:UserService,private router:Router) { }
  
  ngOnInit(): void {
  }
  
  onSubmit(form:NgForm){
    this.checkLogin(form);
  }

  checkLogin(form:NgForm){
    this.lservice.loginUser(this.lservice.formDatalogin)
    .subscribe(
      res => {
        if(res=='Success'){
          alert("Login Successful")
          
          this.lservice.getListDetails();
          this.router.navigate(['home']);
          this.lservice.setMyGV(true);
          console.log(res);
        }
       else{
          alert("Oops")
          this.lservice.getListDetails();
          this.router.navigate(['login']);
          console.log(res);
       }
        }, //Bind to view
      (err: any) => {
                // Log errors if any
                console.log(err);
            });
                  
  }

}
