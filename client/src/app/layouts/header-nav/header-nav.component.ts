import {Component, HostListener, Input, ViewEncapsulation} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderNavComponent {

  @Input() environment: string;
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

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (this.environment === 'home') {
      if (scrollPosition > 500) {
        console.log('You are 100px from the top to bottom');
        this.menuItemsBlue = true;
      } else {
        console.log('You are eeeeeeeeeeeeeeeeeeee from the top to bottom');
        this.menuItemsBlue = false;
      }
    }


  }


}
