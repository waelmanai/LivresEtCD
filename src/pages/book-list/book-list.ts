import { Component } from '@angular/core';
import {MenuController, ModalController} from 'ionic-angular';
import {Livres} from "../../models/Livres";
import {BookscdService} from "../../services/bookscd.service";
import {LendBookPage} from "../lend-book/lend-book";

@Component({
  selector: 'page-book-list',
  templateUrl: 'book-list.html',
})
export class BookListPage {

  booklist: Livres[];

  constructor(public modalCtrl: ModalController,
              private bookCdService: BookscdService,
              private menuCtrl: MenuController) {
  }

  ionViewWillEnter(){
    this.booklist = this.bookCdService.booksList.slice();
  }

  onLoadBooks(index: number){
    let modal = this.modalCtrl.create(LendBookPage, {index: index});
    modal.present();
  }

  onToggleMenu(){
    this.menuCtrl.open();
  }
}
