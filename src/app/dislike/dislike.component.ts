import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dislike-box',
  templateUrl: './dislike.component.html',
})
export class DislikeComponent  {

  numberOfDislikes : number = 0 ;

  dislikeButtonClick() {
    this.numberOfDislikes++;
  }


}
