import { NavController } from 'ionic-angular';
import { ListFriendPage } from '../list-friend/list-friend';
import { Component } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  showBookList(sciname:string){
    console.log(sciname);
    this.navCtrl.push(ListFriendPage, 
      {major:sciname}
      );
  }
}
