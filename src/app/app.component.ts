// import { ChangeDetectorRef, Component } from '@angular/core';
 import { Router, RouterOutlet } from '@angular/router';
// import { LeftContainerComponent } from "./left-container/left-container.component";
// import { RightContainerComponent } from "./right-container/right-container.component";
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { HttpClientModule } from '@angular/common/http'
// import { WeatherData } from './models/weather-data.const';
// import { MainModel } from './models/weatherDetails';
// import { MatButtonModule } from '@angular/material/button';
// import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import {MatIconModule} from '@angular/material/icon';
// import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSidenavModule} from '@angular/material/sidenav';
import { Component } from "@angular/core";




@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
imports: [RouterOutlet,MatSidenavModule]

})
export class AppComponent {
  
}
