

export interface MainModel{
  leftSide?: LeftSideModel;
  today?:TodayModel;
  week?:WeekModel;
}
export interface LeftSideModel {
  city?: string;
  country?: string;
  temperature?: number;
  day?: string;
  clock?: Date;
  weatherDescr?: string;
  weatherCondition?: string;
}
export interface TodayModel {
  clocks?: ClockModel[];
  highlights?: Highlights;
}
export interface WeekModel {
  day?: DaysModel[];
  highlights?: Highlights;
}
export interface Highlights {
  uvIndex: number;
  wind: number;
  humidityValue: number;
  humidityDescr: string;
  visibilityValue: number;
  visibilityDescr: string;
  sunrise: number;
  sunset: number;
  airQualityValue: number;
  airQuailityDescr: string;
}

export interface ClockModel{
  clock:string;
  temp:number
}
export interface DaysModel {
  day: string;
  maxTemp: number;
  minTemp: number;
}