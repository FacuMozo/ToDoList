import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit{
  
  public user :string="";
  public password :string="";

  constructor(private authenticationService: AuthenticationService, private router: Router){}


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.user = this.authenticationService.getUser()
    this.password = this.authenticationService.getPassword()
  }

  navigateHome() {

    this.router.navigateByUrl('/tasks');
  }


}
