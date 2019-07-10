import {Component, HostListener, OnInit} from '@angular/core';
declare var anime: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {
  scroll ;
  myStyle: object = {
    'width': '100%',
    'height': '100%',
    'z-index': 0,
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

  constructor() {

  }

animateText(){
  anime.timeline({loop: false})
    .add({
      targets: '.ml15 .word',
      scale: [14,1],
      opacity: [0,1],
      duration: 1500,
    })

}


    ngOnInit() {
    this.animateText()



  }

}
