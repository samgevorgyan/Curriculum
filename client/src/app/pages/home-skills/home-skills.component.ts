import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-home-skills',
  templateUrl: './home-skills.component.html',
  styleUrls: ['./home-skills.component.scss']
})
export class HomeSkillsComponent implements OnInit {
  showCircleHtml5  = false;
  showCircleCss3  = false;
  showCircleBootstrap  = false;
  showCircleJs  = false;
  showCircleAngular  = false;
  showCircleMaterial = false;
  showCircleFlex = false;
  showCirclePhp  = false;
  showCircleJava  = false;
  showCircleJquery  = false;
  @ViewChild('ff', {static : false}) ff: any;

  public ngCircleOptions: any = {

    radius: '80',
    outerStrokeWidth: '10',
    innerStrokeWidth: '10',
    space: -10,
    outerStrokeColor: '#1c2a5e',
    outerStrokeGradient: true,
    outerStrokeGradientStopColor: '#53a9ff',
    innerStrokeColor: '#dfe1e5',
    animation: true,
    animationDuration: '300',
    renderOnClick: true,
    lazy: false,
    subtitleColor: 'black',
    titleColor: 'black',
    unitsColor: 'black',
    subtitleFontSize: '22px',


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
    this.showCircles('html5', 'showCircleHtml5');
    this.showCircles('css3', 'showCircleCss3');
    this.showCircles('bootstrap', 'showCircleBootstrap');
    this.showCircles('js', 'showCircleJs');
    this.showCircles('jquery', 'showCircleJquery');
    this.showCircles('angular', 'showCircleAngular');
    this.showCircles('material', 'showCircleMaterial');
    this.showCircles('flex', 'showCircleFlex');
    this.showCircles('php', 'showCirclePhp');
    this.showCircles('java', 'showCircleJava');






  }

}
