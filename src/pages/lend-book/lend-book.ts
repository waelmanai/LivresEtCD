import {Component, OnInit} from '@angular/core';
import {NavParams, ViewController} from 'ionic-angular';
import {BookscdService} from "../../services/bookscd.service";
import {Livres} from "../../models/Livres";

@Component({
  selector: 'page-lend-book',
  templateUrl: 'lend-book.html',
})
export class LendBookPage implements OnInit{

  index: number;
  book: Livres;

  constructor(public viewCtrl: ViewController, public navParams: NavParams, public bookCdService: BookscdService) {
  }

  ngOnInit(){
    this.index = this.navParams.get('index');
    this.book = this.bookCdService.booksList[this.index];
  }

  dismissModal(){
    this.viewCtrl.dismiss();
  }

  onToggleLendBook(){
    this.book.isLend = !this.book.isLend;
  }

}
