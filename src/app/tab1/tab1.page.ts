import { Component, OnInit } from '@angular/core'; // Import OnInit interface
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public weather: any = {}; // Define weather as any initially
  public temp: number = 0; // Specify temp as a number
  public city: string = ''; // Specify city as a string

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getData().subscribe((result: any) => { // Cast result as any
      this.weather = result;
      this.temp = result.main.temp;
      this.city = result.name;
      console.log(this.weather);
    });
  } 
}