import { InfoCard } from '@/shared';
import { Component } from '@angular/core';
import { TIER_INFO } from './constant';

@Component({
  selector: 'app-home',
  imports: [InfoCard],
  templateUrl: './home.html',
  styles: ``,
})
export class Home {
  protected readonly TIER_INFO = TIER_INFO;
}
