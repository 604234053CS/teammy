import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FriendrestProvider } from '../../providers/friendrest/friendrest';
import { Friend } from '../../models/friend.model';

/**
 * Generated class for the ListFriendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-list-friend',
  templateUrl: 'list-friend.html',
})
export class ListFriendPage {

  major:string;
  friends:Friend;

  constructor(public friendrest: FriendrestProvider ,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListFriendPage');
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter');
    this.major=this.navParams.get("major");
    console.log(this.major);
    this.friendrest.getBookList().subscribe( date =>{
        this.friends=date.filter(friend=> friend.major === this.major);

      }
    );
  }
}