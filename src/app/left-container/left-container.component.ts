import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { faCloudRain } from '@fortawesome/free-solid-svg-icons';
import { LeftSideModel } from '../models/weatherDetails';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-left-container',
  standalone: true,
  imports: [FontAwesomeModule, MatSelectModule, MatFormFieldModule, MatOptionModule, ReactiveFormsModule],
  templateUrl: './left-container.component.html',
  styleUrl: './left-container.component.scss'
})
export class LeftContainerComponent {
  @Input() leftContainerData: LeftSideModel | undefined= {};
  @Output() selectedCity = new EventEmitter<string | null>();
  cities: string[] = ["Ankara","Antalya", "Istanbul","Çorum", "Erzurum","Trabzon","Rize","Konya","Malatya","Ardahan","Sivas"];
  selectedCityForm = new FormControl("Ankara");
  faMagnifyingGlass: any = faMagnifyingGlass;
  
  faCloud: any = faCloud;
  faCloudRain: any = faCloudRain;
  faSunny: any = faCloudRain; // Güneş olarak değiştir


  ngOnInit() {
    console.log(this.leftContainerData);
  }

  citySelectHandle() {
    this.selectedCity.emit(this.selectedCityForm.value)
  }

  getWeatherCondition(condition: any) {
    if (condition === "Rainy") return faCloudRain;
    else if (condition === "Cloudy") return faCloud;
    else return this.faSunny;
  }

  getCityImage(cityName:any):string{
    if(cityName ==="Ankara") return "./../../assets/ankara.jpg";
    else if(cityName ==="Istanbul") return "./../../assets/istanbul.jpg";
    if(cityName ==="Çorum") return "./../../assets/corum.jpg";
    if(cityName ==="Erzurum") return "./../../assets/erzurum.jpeg";
    else if(cityName==="Ardahan") return "./../../assets/ardahan.jpeg";
    else if(cityName==="Konya") return "./../../assets/konya.jpg";
    else if(cityName==="Rize") return "./../../assets/rize.jpg";
    else if(cityName==="Sivas") return "./../../assets/sivas.jpg";
    else if(cityName==="Malatya") return "./../../assets/malatya.png";
    else if(cityName==="Trabzon") return "./../../assets/trabzon.png";
    else if(cityName==="Antalya") return "./../../assets/antalya.jpeg";
    else return "";
  }
  



}
{ }