import { Component, input } from '@angular/core';

interface TierInfoProps {
  title: string;
  number: number;
  icon: string;
}

@Component({
  selector: 'app-info-card',
  imports: [],
  templateUrl: './info-card.html',
  styles: ``,
})
export class InfoCard {
  tierInfo = input.required<TierInfoProps>();
}
