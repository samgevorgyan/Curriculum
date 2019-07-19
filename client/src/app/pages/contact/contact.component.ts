import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {HttpService} from '../../services/http.service';
import {environment} from '../../../environments/environment';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  sendMessage = this.fb.group({
    name_form: ['', [Validators.required]],
    email_form: ['', [Validators.required,
      Validators.pattern('^[\\w]{1,}[\\w.+-]{0,}@[\\w-]{2,}([.][a-zA-Z]{2,}|[.][\\w-]{2,}[.][a-zA-Z]{2,})$')],],
    message_form: ['', [Validators.required]],
  });
  public isSubmitted = false;

  constructor(private fb: FormBuilder,
              private httpService: HttpService,
              private _snackBar: MatSnackBar) {
  }

  get name_form() {

    return this.sendMessage.get('name_form');

  }

  get email_form() {

    return this.sendMessage.get('email_form');
  }

  get message_form() {

    return this.sendMessage.get('message_form');
  }

  onChanges(): void {
    this.email_form.valueChanges.subscribe(val => {


    });
  }

  openSnackBar() {

    this._snackBar.open('your email was sent successfully ', 'ok', {
      duration: 2500,
      panelClass: 'blue-snackbar'
    });
  }

  onSubmit() {
    const url = `${environment.main_url}/mail`;

    if (this.name_form.value && this.email_form.value && this.message_form.value) {
      const data = {
        name: this.name_form.value,
        email: this.email_form.value,
        msg: this.message_form.value,
      };

      this.httpService.postData(url, data, (resp) => {
        console.log('ekav nodeic arajin angam kyanqum  uraaaaaaaaa', resp);
        this.openSnackBar();

      }, (error) => {

        console.log('ekav  errorerrorerrorerrorerrorerror ', error);
      });
    } else {
      this.isSubmitted = true;
    }

  }

  ngOnInit() {

    this.onChanges();
  }

}
