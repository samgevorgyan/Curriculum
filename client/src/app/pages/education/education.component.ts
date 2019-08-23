import { Component, OnInit } from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  constructor( private titleService: Title,
               private meta: Meta) {
    this.titleService.setTitle('Education Sam cv ');
    this.meta.addTags([
      { name: 'SAMCVNET', content: 'SAMVEL GEVORGYAN' },
      { name: 'EDUCATION', content: 'SAMVEL GEVORGYAN EDUCATION' }
    ], true);

    this.meta.updateTag({ name: 'theme-color', content: '#000000' });
  }

  ngOnInit() {
  }

}
