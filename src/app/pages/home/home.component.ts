import {Component, OnInit} from '@angular/core';

declare var anime: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {

  myStyle: object = {
    'width': '100%',
    'height': '100%',
    'z-index': 0,
    'top': 0,
    'left': 0,
    'right': 0,
    'bottom': 0,
    'position': 'absolute'
  };

  myParams: object = {
    'particles': {
      'number': {'value': 110, 'density': {'enable': false, 'value_area': 1000}},
      'color': {'value': '#ffffff'},
      'shape': {
        'type': 'circle',
        'stroke': {'width': 0, 'color': '#000000'},


      },
      'opacity': {'value': 1, 'random': false, 'anim': {'enable': false, 'speed': 1, 'opacity_min': 0.1, 'sync': false}},
      'size': {'value': 3, 'random': true, 'anim': {'enable': true, 'speed': 40, 'size_min': 0.1, 'sync': false}},
      'line_linked': {'enable': true, 'distance': 150, 'color': '#ffffff', 'opacity': 1, 'width': 1},
      'move': {
        'enable': true,
        'speed': 10,
        'direction': 'none',
        'random': false,
        'straight': false,
        'out_mode': 'out',
        'bounce': true,

      }
    },
    'interactivity': {
      'detect_on': 'canvas',
      'events': {'onhover': {'enable': true, 'mode': 'repulse'}, 'onclick': {'enable': true, 'mode': 'push'}, 'resize': true},
      'modes': {
        'grab': {'distance': 400, 'line_linked': {'opacity': 1}},
        'bubble': {'distance': 400, 'size': 40, 'duration': 2, 'opacity': 8, 'speed': 3},
        'repulse': {'distance': 200, 'duration': 0.4},
        'push': {'particles_nb': 4},
        'remove': {'particles_nb': 2}
      }
    },
    'retina_detect': true

}

constructor()
{

}

animateText()
{
  anime.timeline({loop: false})
    .add({
      targets: '.ml15 .word',
      scale: [14, 1],
      opacity: [0, 1],
      duration: 1500,
    });

}


ngOnInit()
{
  this.animateText();


}

}
