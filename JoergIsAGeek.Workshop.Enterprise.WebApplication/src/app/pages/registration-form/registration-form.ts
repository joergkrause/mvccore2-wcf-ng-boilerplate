import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserRegistration } from '../../viewmodels/userregistration';
import { UserService } from '../../services/userservice';

@Component({
  moduleId: module.id,
  selector: 'site-registration',
  templateUrl: './registration-form.html'
})
export class PageRegistration implements OnInit {

 errors: string;  
 isRequesting: boolean;
 submitted: boolean = false;
 
 constructor(private userService: UserService,private router: Router) { 
   
 }

  ngOnInit() {
          
  }

  registerUser({ value, valid }: { value: UserRegistration, valid: boolean }) {
     this.submitted = true;
     this.isRequesting = true;
     this.errors='';
     if(valid)
     {
         this.userService.register(value.email,value.password,value.firstName,value.lastName,value.location)
                   .then(() => this.isRequesting = false)
                   .then(
                     result  => {if(result){
                         this.router.navigate(['/login'],{queryParams: {brandNew: true,email:value.email}});                         
                     }},
                     errors =>  this.errors = errors);
     }      
  }  
}
