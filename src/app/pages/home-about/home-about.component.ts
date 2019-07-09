import { Component, OnInit } from '@angular/core';
import   AOS from 'aos';
// declare var AOS: any;
@Component({
  selector: 'app-home-about',
  templateUrl: './home-about.component.html',
  styleUrls: ['./home-about.component.scss']
})
export class HomeAboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init();
  }

}
