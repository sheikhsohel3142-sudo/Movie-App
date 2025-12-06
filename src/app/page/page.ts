import { NgFor, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listing',
  imports: [NgClass],
  templateUrl: './page.html',
  styleUrl: './page.css',
})
export class Page {
  @Input() movie:any[] = [];

}
