import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  host: { class: 'flex flex-1 w-full' },
  imports: [RouterLink],
  templateUrl: './not-found.html',
  styles: ``,
})
export class NotFound {}
