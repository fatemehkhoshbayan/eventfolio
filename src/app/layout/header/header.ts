import { Component } from '@angular/core';
import { NAV_LINKS } from './constants';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styles: ``,
})
export class Header {
  NAV_LINKS = NAV_LINKS;
}
