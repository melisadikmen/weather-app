import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';
import { TodayModel, WeekModel } from '../models/weatherDetails';
@Component({
  selector: 'app-right-container',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './right-container.component.html',
  styleUrl: './right-container.component.scss'
})
export class RightContainerComponent {
  @Input() todayData: TodayModel | undefined = {}
  @Input() weekData: WeekModel | undefined = {}

  faThumbsUp: any = faThumbsUp;
  faThumbsDown: any = faThumbsDown;
  faFaceSmile: any = faFaceSmile;
  faFaceFrown: any = faFaceFrown;
  today: boolean = false;
  week: boolean = true;



  onTodayClick() {
    this.today = true;
    this.week = false;
  }

  onWeekClick() {
    this.week = true;
    this.today = false;
  }

  getHumidityIcon(event: any) {
    if (event > 60) return faThumbsUp;
    else return faThumbsDown;
  }

  getVisibilityIcon(event: any) {
    if (event === "Good") return faFaceSmile;
    else return faFaceFrown;
  }

  getAirQualityIcon(event: any) {
    if (event > 50) return faThumbsUp;
    else return faThumbsDown;
  }



}
