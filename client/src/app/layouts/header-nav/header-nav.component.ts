import {Component, HostListener, Input, ViewEncapsulation} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderNavComponent {

  @Input() environment: string;
  @Input() position: string;
  public menuItemsBlue = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches
      )
    );

  constructor(private breakpointObserver: BreakpointObserver) {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {

    if (this.environment === 'home' && this.getIsHandset()) {
      this.makeDownloadBlue(this.position);
    } else {
      this.makeDownloadBlue(this.position);
    }


  }

  getIsHandset() {
    return this.breakpointObserver.isMatched('(max-width: 599px)');
  }

  makeDownloadBlue(position) {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.menuItemsBlue = scrollPosition > position;
  }

}
