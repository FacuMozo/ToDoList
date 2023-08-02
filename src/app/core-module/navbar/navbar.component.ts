import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

    icon = "fullscreen";

    fullscreen: boolean = false;

  constructor(private router: Router, private authenticationService: AuthenticationService){}

  logOut(){
    this.authenticationService.logout();
  }
  redirectToSettings(){
    this.router.navigateByUrl('/tasks/settings');

  }
  
    toggleFullscreen(){
      if(document.fullscreenEnabled){
        let elem = document.documentElement;
        this.fullscreen = !this.fullscreen;
        
        if(this.fullscreen){
          this.icon ="fullscreen-exit"
          elem.requestFullscreen();
          console.log("entro en fullscreen")
        }else{
          this.icon ="fullscreen"
          document.exitFullscreen();
        }
      }
    }
}
