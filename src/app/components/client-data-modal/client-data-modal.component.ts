import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-client-data-modal',
  templateUrl: './client-data-modal.component.html',
  styleUrls: ['./client-data-modal.component.scss'],
})
export class ClientDataModalComponent  implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  form!: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      pessoas: new FormControl('', [Validators.required, Validators.max(20), Validators.min(1)]),
    })
  }

  close() {
    this.modalController.dismiss({
      ...this.form.value
    });
  }

}
