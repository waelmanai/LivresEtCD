import { Component } from '@angular/core';
import {MenuController, ModalController} from 'ionic-angular';
import {Cd} from "../../models/Cd";
import {BookscdService} from "../../services/bookscd.service";
import {LendCdPage} from "../lend-cd/lend-cd";


@Component({
  selector: 'page-cd-list',
  templateUrl: 'cd-list.html',
})
export class CdListPage {

  cdList: Cd[];

  constructor(public modalCtrl: ModalController,
              private bookCdService: BookscdService,
              private menuCtrl: MenuController) {
  }

  ionViewWillLoad(){
    this.cdList = this.bookCdService.cdList.slice();
  }

  onLoadCd(index: number){
    let modal = this.modalCtrl.create(LendCdPage, {index: index});
    modal.present();
  }

  onToggleMenu(){
    this.menuCtrl.open();
  }
}
