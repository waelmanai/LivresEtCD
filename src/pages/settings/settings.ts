import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  tabsPage = TabsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
