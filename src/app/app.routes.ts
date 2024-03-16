import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UyduComponent } from './uydu/uydu.component';
import { RadarComponent } from './radar/radar.component';

export const routes: Routes = [
    {path: "", component:HomeComponent},
    {path: "uydu", component:UyduComponent},
     {path: "radar", component:RadarComponent}
];
