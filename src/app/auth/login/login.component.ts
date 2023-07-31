import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

constructor(private authenticationService :AuthenticationService,private router:Router){}

  
  private user:string="";
  private password:string="";

  login(){
    if( this.authenticationService.login(this.user,this.password)){
      this.router.navigateByUrl('/tasks');
    }else{
      console.log("WRONG USER OR PASSWORD")
    }
  }

  updateUserText(textInput: string){
    this.user = textInput;
  }
  updatePasswordText(textInput: string){
    this.password = textInput;
  }
}
