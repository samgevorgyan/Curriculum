import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

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
  constructor(private fb: FormBuilder,) { }

  onSubmit(){
    console.log('holla', );
  }
  ngOnInit() {
  }

}
