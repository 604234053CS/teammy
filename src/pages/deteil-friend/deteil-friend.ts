import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { friend } from '../../models/friend.model';
import { FriendrestProvider } from '../../providers/friendrest/friendrest';

/**
 * Generated class for the friendDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-friend-detail',
  templateUrl: 'friend-detail.html',
})
export class friendDetailPage {

  friendId:number;
  friend:friend;

  constructor(public friendRest:FriendrestProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad friendDetailPage');
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter');
    this.friend=this.navParams.get("studentID");
    console.log(this.friendId);
    this.friendRest.getFriendList().subscribe( date =>{
    this.friend=date.filter(friend=> friend.friendId === this.friendId)[0];
      }
    );

  }
  goBck(){
    this.navCtrl.pop();
  }

}
