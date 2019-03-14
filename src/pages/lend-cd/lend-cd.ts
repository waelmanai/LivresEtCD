import {Component, OnInit} from '@angular/core';
import {NavParams, ViewController} from 'ionic-angular';
import {Cd} from "../../models/Cd";
import {BookscdService} from "../../services/bookscd.service";

@Component({
  selector: 'page-lend-cd',
  templateUrl: 'lend-cd.html',
})
export class LendCdPage implements OnInit{

  index: number;
  cd: Cd;

  constructor(public viewCtrl: ViewController,
              public navParams: NavParams,
              public bookCdService: BookscdService) {
  }

  ngOnInit(){
    this.index = this.navParams.get('index');
    this.cd = this.bookCdService.cdList[this.index];
  }

  dismissModal(){
    this.viewCtrl.dismiss();
  }

  onToggleLendCd(){
    this.cd.isLend = !this.cd.isLend;
  }

}
