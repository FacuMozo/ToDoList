import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

    icon = "fullscreen";

    fullscreen: boolean = false;
    
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
