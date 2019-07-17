import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  sendMessage = this.fb.group({
    name_form: ['', [Validators.required]],
    email_form: ['', [Validators.required,
      Validators.pattern('^[\\w]{1,}[\\w.+-]{0,}@[\\w-]{2,}([.][a-zA-Z]{2,}|[.][\\w-]{2,}[.][a-zA-Z]{2,})$')], ],
    message_form: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder,
              private httpService: HttpService) {
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

  onSubmit() {
    const url = 'https://curriculumj.herokuapp.com/mail';
    // const url = 'http://localhost:3000/mail';
    const data = {
      name : this.name_form.value,
      email : this.email_form.value,
      msg : this.message_form.value,
    };
    this.httpService.postData(url, data, (resp) => {
      console.log('ekav nodeic arajin angam kyanqum  uraaaaaaaaa', resp);
    }, (error) => {

      console.log('ekav  errorerrorerrorerrorerrorerror ', error);
    });

  }

  ngOnInit() {
  }

}
