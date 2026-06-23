import { Component } from '@angular/core';
import { FOOTER_LINKS } from './constants';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styles: ``,
})
export class Footer {
  FOOTER_LINKS = FOOTER_LINKS;
}
