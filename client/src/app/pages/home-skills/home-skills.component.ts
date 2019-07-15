import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-home-skills',
  templateUrl: './home-skills.component.html',
  styleUrls: ['./home-skills.component.scss']
})
export class HomeSkillsComponent implements OnInit {
  show_circle_css3  = false;
  show_circle_html5  = false;
  show_circle_js  = false;
  show_circle_angular  = false;
  show_circle_php  = false;
  @ViewChild('ff', {static : false}) ff: any;
  public ngCircleOptions: any = {

    radius: '100',
    outerStrokeWidth: '10',
    innerStrokeWidth: '10',
    space: -10,
    outerStrokeColor: '#1c2a5e',
    outerStrokeGradient: true,
    outerStrokeGradientStopColor: '#53a9ff',
    innerStrokeColor: 'white',
    animation: true,
    animationDuration: '300',
    renderOnClick: true,
    lazy: false,
    subtitleColor: '#ffffff',
    titleColor: '#ffffff',
    unitsColor: '#ffffff',
    subtitleFontSize: '32px',


  };

  showCircles(querySelector, currentCircl) {
    document.addEventListener(`aos:in:${querySelector}`, () => {
      this[currentCircl] = true;
    });
    document.addEventListener(`aos:out:${querySelector}`, () => {

      setTimeout(() => {
        this[currentCircl] = false;
      }, 400);
    });
  }

  ngOnInit() {
    this.showCircles('html5', 'show_circle_html5');
    this.showCircles('css3', 'show_circle_css3');
    this.showCircles('js', 'show_circle_js');
    this.showCircles('angular', 'show_circle_angular');
    this.showCircles('php', 'show_circle_php');





  }

}
