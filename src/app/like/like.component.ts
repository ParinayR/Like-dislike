import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'like-box',
  templateUrl: './like.component.html',
  
})
export class LikeComponent  {

  numberOfLikes : number = 20 ;


  likeButtonClick() {
    this.numberOfLikes++;
  }

  

}
