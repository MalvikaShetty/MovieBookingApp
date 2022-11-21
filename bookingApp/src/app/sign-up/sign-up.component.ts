import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { NgForm } from '@angular/forms';
import { Users } from '../models/user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(public uservice:UserService) { }
  currentDate = new Date();
  public today: string | undefined;
  
  ngOnInit(): void {
    this.today = new Date().toISOString().split('T')[0];
    // this.uservice.formData.createdDate = this.currentDate.toString();
  }

  resetForm(form:NgForm){
    form.form.reset();
    this.uservice.formData=new Users();
  }

  onSubmit(form:NgForm){
    if(this.uservice.formData.userId==null)
      this.insertDetails(form);
    // else
    // this.updateDetails(form);
 
  }

  insertDetails(form:NgForm){
    this.uservice.postUserDetails(this.uservice.formData)
    .subscribe(
      (      res: any) => {
        alert("Registered Successfully")
        this.uservice.getListDetails();
        console.log(res);
        }, //Bind to view
      (                    err: any) => {
                // Log errors if any
                console.log(err);
            });
            this.resetForm(form);
            
  }


}
