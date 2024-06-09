import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'header-main',
  templateUrl: './header-main.component.html',
  styleUrls: ['./header-main.component.scss'],
})
export class HeaderMainComponent  implements OnInit {

  @Input({
    required: true
  }) title!: string;

  @Input() haveBack: boolean = false;
  @Input() backRoute!: string;

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {}

  back() {
    if(!this.backRoute) {
      this.navCtrl.back();
      return;
    }
    this.navCtrl.navigateRoot(this.backRoute);
  }

}
