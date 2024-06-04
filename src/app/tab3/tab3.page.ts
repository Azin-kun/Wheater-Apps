import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss']
})
export class Tab3Page implements OnInit {
  fav: any;

  constructor() { }

  ngOnInit(): void {
    const fav = localStorage.getItem('fav');
    if (fav) {
      this.fav = JSON.parse(fav);
    }
  }

  
}