import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss']
})
export class DetailPage implements OnInit {
  weather: any;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      if (params && params.special) {
        this.weather = JSON.parse(params.special);
      }
    });
  }

  formatDateTime(dateTime: string): string {
    const date = new Date(dateTime);
    const day = date.getDate().toString().padStart(2, '0');
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    const month = monthNames[date.getMonth()]; // Ambil nama bulan dari array monthNames
    let hour = date.getHours();
    const minute = date.getMinutes().toString().padStart(2, '0');
    const ampm = hour >= 12? 'PM' : 'AM';
    hour = hour % 12 || 12; // Convert 24-hour format to 12-hour format
    return `${day} ${month} - ${hour}:${minute} ${ampm}`;
  }

  save() {
     localStorage.setItem('fav', JSON.stringify(this.weather));
  }
}