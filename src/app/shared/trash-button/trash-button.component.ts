import { Component } from '@angular/core';

@Component({
  selector: 'app-trash-button',
  templateUrl: './trash-button.component.html',
  styleUrls: ['./trash-button.component.css']
})
export class TrashButtonComponent {


  deleteEvent(){
    console.log("Delete event");
    
  }
}
