import { Component, OnInit } from '@angular/core';
declare var anime: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  myStyle: object = {
    'width': '100%',
    'height': '100%',
    'z-index': 1,
    'top': 0,
    'left': 0,
    'right': 0,
    'bottom': 0,
  'position' : 'absolute'};
  myParams: object = {
    particles: {
      number: {
        value: 80,

      },
      color: {
        value: '#ffffff'
      },
      shape: {
        type: 'triangle',
      },
      move : {
        enable : true,
      }
    }};

  constructor() { }

  ngOnInit() {
    anime.timeline({loop: false})
      .add({
        targets: '.ml15 .word',
        scale: [14,1],
        opacity: [0,1],
        easing: "easeOutCirc",
        duration: 800,
        delay: function(el, i) {
          return 800 * i;
        }
      })
  }

}
