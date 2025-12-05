import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-page',
  imports: [NgFor],
  templateUrl: './page.html',
  styleUrl: './page.css',
})
export class Page {
movieList: any;

}
