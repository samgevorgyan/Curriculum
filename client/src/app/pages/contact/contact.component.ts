import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {HttpService} from '../../services/http.service';
import {environment} from '../../../environments/environment';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Meta, Title} from "@angular/platform-browser";

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
  public isSubmitted = false;
  public showSpinner = false;

  constructor(private fb: FormBuilder,
              private httpService: HttpService,
              private matSnackBar: MatSnackBar,
              private titleService: Title,
              private meta: Meta) {
    this.titleService.setTitle('Contact Sam cv ');
    this.meta.addTags([
      { name: 'SAMCVNET', content: 'SAMVEL GEVORGYAN' },
      { name: 'CONTACT', content: 'SAMVEL GEVORGYAN CONTACT' }
    ], true);

    this.meta.updateTag({ name: 'SAMCVNET', content: 'qachal' });
    this.meta.updateTag({ name: 'theme-color', content: '#000000' });
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



  openSnackBar() {

    this.matSnackBar.open('your email was sent successfully ', 'ok', {
      duration: 2500,
      panelClass: 'blue-snackbar'
    });
  }

  onSubmit() {
    const url = `${environment.main_url}/mail`;

    if (this.name_form.value && this.email_form.value && this.message_form.value) {
      this.showSpinner = true;
      const data = {
        name: this.name_form.value,
        email: this.email_form.value,
        msg: this.message_form.value,
      };

      this.httpService.postData(url, data, (resp) => {

        this.openSnackBar();
        this.showSpinner = false;
        this.sendMessage.reset();
      }, (error) => {
        this.showSpinner = false;

      });
    } else {
      this.isSubmitted = true;
    }

  }

  ngOnInit() {

  }

}
