// import { Component } from '@angular/core';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
// import { LeftContainerComponent } from "./left-container/left-container.component";
// import { RightContainerComponent } from "./right-container/right-container.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http'
// import { WeatherData } from './models/weather-data.const';
// import { MainModel } from './models/weatherDetails';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { WeatherData } from '../models/weather-data.const';
import { MainModel } from '../models/weatherDetails';
import { RightContainerComponent } from "../right-container/right-container.component";
import { LeftContainerComponent } from "../left-container/left-container.component";
@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [FontAwesomeModule, HttpClientModule, MatButtonModule, MatSlideToggleModule, MatToolbarModule, MatIconModule, MatSidenavModule, RightContainerComponent, LeftContainerComponent]
})
export class HomeComponent {
  title = 'weather-app';
  weatherData = WeatherData;
  selectedData: MainModel | undefined = this.weatherData[0];
  theme: boolean = false;
  showFiller = false;
  constructor(private _router: Router, public cdr: ChangeDetectorRef) { }

  selectedCity(cityName: string | null) {
    this.selectedData = this.weatherData.find(data => data?.leftSide?.city === cityName);
  }

  changeTheme() {
    if (this.theme == true) {
      this.theme = false;
      console.log(this.theme)
    }
    else this.theme = true;
    const element = document.getElementById("container");
    console.log(element);

    if (element) {
      element.style.backgroundImage = ""
      element.style.backgroundColor = "black";
      this.cdr.markForCheck()
    }
  }
  goToLink(path:string){
    this._router.navigateByUrl(path)
  }

}
