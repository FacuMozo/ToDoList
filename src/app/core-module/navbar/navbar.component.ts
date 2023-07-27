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
          elem.requestFullscreen();
          this.icon ="fullscreen-exit"
        }else{
          this.icon ="fullscreen"
          document.exitFullscreen();
        }
      }
    }
}
