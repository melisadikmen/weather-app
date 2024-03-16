import { MainModel } from "./weatherDetails";

export const WeatherData: MainModel[] = [
  {
    "leftSide": {
      "city": "Ankara",
      "country": "Turkey",
      "temperature": 25,
      "day": "Monday",
      "clock": new Date(),
      "weatherDescr": "Sunny",
      "weatherCondition": "Clear"
    },
    "today": {
      "clocks": [
        { "clock": "00:00 AM", "temp": 15 },
        { "clock": "03:00 AM", "temp": 18 },
        { "clock": "06:00 AM", "temp": 14 },
        { "clock": "09:00 AM", "temp": 19 },
        { "clock": "12:00 AM", "temp": 25 },
        { "clock": "04:00 AM", "temp": 23 },
        { "clock": "08:00 AM", "temp": 27 },
      ],
      "highlights": {
        "uvIndex": 6,
        "wind": 12,
        "humidityValue": 65,
        "humidityDescr": "Moderate",
        "visibilityValue": 10,
        "visibilityDescr": "Good",
        "sunrise": 6,
        "sunset": 18,
        "airQualityValue": 35,
        "airQuailityDescr": "Good"
      }
    },
    "week": {
      "day": [
        { "day": "Sunday", "maxTemp": 32, "minTemp": 17 },
        { "day": "Monday", "maxTemp": 29, "minTemp": 18 },
        { "day": "Tuesday", "maxTemp": 28, "minTemp": 20 },
        { "day": "Wednesday", "maxTemp": 29, "minTemp": 22 },
        { "day": "Thursday", "maxTemp": 27, "minTemp": 19 },
        { "day": "Friday", "maxTemp": 26, "minTemp": 18 },
        { "day": "Saturday", "maxTemp": 27, "minTemp": 19 }
      ],
      "highlights": {
        "uvIndex": 7,
        "wind": 14,
        "humidityValue": 70,
        "humidityDescr": "High",
        "visibilityValue": 9,
        "visibilityDescr": "Moderate",
        "sunrise": 6,
        "sunset": 18,
        "airQualityValue": 40,
        "airQuailityDescr": "Moderate"
      }
    }
  },
  {
    "leftSide": {
      "city": "Çorum",
      "country": "Turkey",
      "temperature": 18,
      "day": "Thursday",
      "clock": new Date(),
      "weatherDescr": "Partly Cloudy",
      "weatherCondition": "Partly Cloudy"
    },
    "today": {
      "clocks": [
        { "clock": "00:00 AM", "temp": 12 },
        { "clock": "03:00 AM", "temp": 13 },
        { "clock": "06:00 AM", "temp": 14 },
        { "clock": "09:00 AM", "temp": 10 },
        { "clock": "12:00 AM", "temp": 12 },
        { "clock": "04:00 AM", "temp": 15 },
        { "clock": "08:00 AM", "temp": 14 },
      ],
      "highlights": {
        "uvIndex": 5,
        "wind": 9,
        "humidityValue": 70,
        "humidityDescr": "Moderate",
        "visibilityValue": 8,
        "visibilityDescr": "Moderate",
        "sunrise": 7,
        "sunset": 18,
        "airQualityValue": 45,
        "airQuailityDescr": "Moderate"
      }
    },
    "week": {
      "day": [
        {"day": "Friday", "maxTemp": 20, "minTemp": 15},
        {"day": "Saturday", "maxTemp": 21, "minTemp": 16},
        {"day": "Sunday", "maxTemp": 22, "minTemp": 17},
        {"day": "Monday", "maxTemp": 23, "minTemp": 18},
        {"day": "Tuesday", "maxTemp": 24, "minTemp": 19},
        {"day": "Tuesday", "maxTemp": 21, "minTemp": 14},
        {"day": "Tuesday", "maxTemp": 24, "minTemp": 14}
      ],
      "highlights": {
        "uvIndex": 6,
        "wind": 10,
        "humidityValue": 75,
        "humidityDescr": "Moderate",
        "visibilityValue": 7,
        "visibilityDescr": "Poor",
        "sunrise": 7,
        "sunset": 18,
        "airQualityValue": 50,
        "airQuailityDescr": "Moderate"
      }
    }
  },
  {
    "leftSide": {
      "city": "Istanbul",
      "country": "Turkey",
      "temperature": 28,
      "day": "Friday",
      "clock": new Date(),
      "weatherDescr": "Sunny",
      "weatherCondition": "Clear"
    },
    "today": {
      "clocks": [
        { "clock": "00:00 AM", "temp": 7 },
        { "clock": "03:00 AM", "temp": 8 },
        { "clock": "06:00 AM", "temp": 11 },
        { "clock": "09:00 AM", "temp": 9 },
        { "clock": "12:00 AM", "temp": 11 },
        { "clock": "04:00 AM", "temp": 10 },
        { "clock": "08:00 AM", "temp": 12 },
      ],
      "highlights": {
        "uvIndex": 8,
        "wind": 15,
        "humidityValue": 60,
        "humidityDescr": "Moderate",
        "visibilityValue": 10,
        "visibilityDescr": "Good",
        "sunrise": 6,
        "sunset": 19,
        "airQualityValue": 40,
        "airQuailityDescr": "Good"
      }
    },
    "week": {
      "day": [
        {"day": "Saturday", "maxTemp": 30, "minTemp": 22},
        {"day": "Sunday", "maxTemp": 31, "minTemp": 23},
        {"day": "Monday", "maxTemp": 32, "minTemp": 24},
        {"day": "Tuesday", "maxTemp": 33, "minTemp": 25},
        {"day": "Wednesday", "maxTemp": 34, "minTemp": 26},
        {"day": "Tuesday", "maxTemp": 24, "minTemp": 19},
        {"day": "Tuesday", "maxTemp": 19, "minTemp": 18}
      ],
      "highlights": {
        "uvIndex": 9,
        "wind": 16,
        "humidityValue": 55,
        "humidityDescr": "Moderate",
        "visibilityValue": 10,
        "visibilityDescr": "Good",
        "sunrise": 6,
        "sunset": 19,
        "airQualityValue": 35,
        "airQuailityDescr": "Good"
      }
    }
  },
  {
    "leftSide": {
      "city": "Erzurum",
      "country": "Turkey",
      "temperature": 5,
      "day": "Saturday",
      "clock": new Date(),
      "weatherDescr": "Snowy",
      "weatherCondition": "Snow"
    },
    "today": {
      "clocks": [
        { "clock": "00:00 AM", "temp": 4 },
        { "clock": "03:00 AM", "temp": 2},
        { "clock": "06:00 AM", "temp": 0 },
        { "clock": "09:00 AM", "temp": -10 },
        { "clock": "12:00 AM", "temp": -5 },
        { "clock": "04:00 AM", "temp": -3 },
        { "clock": "08:00 AM", "temp": -1 },
      ],      "highlights": {
        "uvIndex": 1,
        "wind": 5,
        "humidityValue": 90,
        "humidityDescr": "High",
        "visibilityValue": 3,
        "visibilityDescr": "Poor",
        "sunrise": 7,
        "sunset": 18,
        "airQualityValue": 60,
        "airQuailityDescr": "Poor"
      }
    },
    "week": {
      "day": [
        {"day": "Sunday", "maxTemp": 3, "minTemp": -2},
        {"day": "Monday", "maxTemp": 2, "minTemp": -3},
        {"day": "Tuesday", "maxTemp": 1, "minTemp": -4},
        {"day": "Wednesday", "maxTemp": 0, "minTemp": -5},
        {"day": "Thursday", "maxTemp": -1, "minTemp": -6},
        {"day": "Tuesday", "maxTemp": 2, "minTemp": -4},
        {"day": "Tuesday", "maxTemp": 4, "minTemp": -5}
      ],
      "highlights": {
        "uvIndex": 1,
        "wind": 5,
        "humidityValue": 90,
        "humidityDescr": "High",
        "visibilityValue": 3,
        "visibilityDescr": "Poor",
        "sunrise": 7,
        "sunset": 18,
        "airQualityValue": 60,
        "airQuailityDescr": "Poor"
      }
    }
  },
  {
    "leftSide": {
      "city": "Trabzon",
      "country": "Turkey",
      "temperature": 10,
      "day": "Monday",
      "clock": new Date(),
      "weatherDescr": "Sunny",
      "weatherCondition": "Clear"
    },
    "today": {
      "clocks": [
        { "clock": "00:00 AM", "temp": 4 },
        { "clock": "03:00 AM", "temp": 7 },
        { "clock": "06:00 AM", "temp": 5 },
        { "clock": "09:00 AM", "temp": 2 },
        { "clock": "12:00 AM", "temp": 3 },
        { "clock": "04:00 AM", "temp": 5 },
        { "clock": "08:00 AM", "temp": 6 },
      ],
      "highlights": {
        "uvIndex": 9,
        "wind": 5,
        "humidityValue": 98,
        "humidityDescr": "Moderate",
        "visibilityValue": 13,
        "visibilityDescr": "Good",
        "sunrise": 17,
        "sunset": 14,
        "airQualityValue": 97,
        "airQuailityDescr": "Good"
      }
    },
    "week": {
      "day": [
        { "day": "Sunday", "maxTemp": 11, "minTemp": 8 },
        { "day": "Monday", "maxTemp": 12, "minTemp": 8 },
        { "day": "Tuesday", "maxTemp": 12, "minTemp": 8 },
        { "day": "Wednesday", "maxTemp": 13, "minTemp": 9 },
        { "day": "Thursday", "maxTemp": 13, "minTemp": 8 },
        { "day": "Friday", "maxTemp": 12, "minTemp": 8 },
        { "day": "Saturday", "maxTemp": 12, "minTemp": 9 }
      ],
      "highlights": {
        "uvIndex": 8,
        "wind": 13,
        "humidityValue": 75,
        "humidityDescr": "High",
        "visibilityValue": 10,
        "visibilityDescr": "Moderate",
        "sunrise": 18,
        "sunset":12,
        "airQualityValue": 95,
        "airQuailityDescr": "Moderate"
      }
    }
  },
  {
    "leftSide": {
      "city": "Rize",
      "country": "Turkey",
      "temperature": 11,
      "day": "Monday",
      "clock": new Date(),
      "weatherDescr": "Sunny",
      "weatherCondition": "Clear"
    },
    "today": {
      "clocks": [
        { "clock": "00:00 AM", "temp": 11 },
        { "clock": "03:00 AM", "temp": 9 },
        { "clock": "06:00 AM", "temp": 7 },
        { "clock": "09:00 AM", "temp": 6 },
        { "clock": "12:00 AM", "temp": 5 },
        { "clock": "04:00 AM", "temp": 9 },
        { "clock": "08:00 AM", "temp": 12 },
      ],
      "highlights": {
        "uvIndex": 10,
        "wind": 8,
        "humidityValue": 77,
        "humidityDescr": "Moderate",
        "visibilityValue": 14,
        "visibilityDescr": "Good",
        "sunrise": 19,
        "sunset": 17,
        "airQualityValue": 96,
        "airQuailityDescr": "Good"
      }
    },
    "week": {
      "day": [
        { "day": "Sunday", "maxTemp": 11, "minTemp": 5 },
        { "day": "Monday", "maxTemp": 12, "minTemp": 5 },
        { "day": "Tuesday", "maxTemp": 12, "minTemp": 4 },
        { "day": "Wednesday", "maxTemp": 14, "minTemp": 5 },
        { "day": "Thursday", "maxTemp": 13, "minTemp": 5 },
        { "day": "Friday", "maxTemp": 12, "minTemp": 5 },
        { "day": "Saturday", "maxTemp": 12, "minTemp": 7 }
      ],
      "highlights": {
        "uvIndex": 10,
        "wind": 9,
        "humidityValue": 69,
        "humidityDescr": "High",
        "visibilityValue": 12,
        "visibilityDescr": "Moderate",
        "sunrise":16,
        "sunset":11,
        "airQualityValue":93,
        "airQuailityDescr": "Moderate"
      }
    }
  },
  {
    "leftSide": {
      "city": "Konya",
      "country": "Turkey",
      "temperature": 13,
      "day": "Monday",
      "clock": new Date(),
      "weatherDescr": "Sunny",
      "weatherCondition": "Clear"
    },
    "today": {
      "clocks": [
        { "clock": "00:00 AM", "temp": 13 },
        { "clock": "03:00 AM", "temp": 11 },
        { "clock": "06:00 AM", "temp": 6 },
        { "clock": "09:00 AM", "temp": 2 },
        { "clock": "12:00 AM", "temp": 2 },
        { "clock": "04:00 AM", "temp": 0 },
        { "clock": "08:00 AM", "temp": 4 },
      ],
      "highlights": {
        "uvIndex": 10,
        "wind": 6,
        "humidityValue": 56,
        "humidityDescr": "Moderate",
        "visibilityValue": 11,
        "visibilityDescr": "Good",
        "sunrise": 13,
        "sunset": 16,
        "airQualityValue": 49,
        "airQuailityDescr": "Good"
      }
    },
    "week": {
      "day": [
        { "day": "Sunday", "maxTemp": 13, "minTemp": 0 },
        { "day": "Monday", "maxTemp": 13, "minTemp": -1 },
        { "day": "Tuesday", "maxTemp": 14, "minTemp": 3 },
        { "day": "Wednesday", "maxTemp": 14, "minTemp": 2 },
        { "day": "Thursday", "maxTemp": 12, "minTemp": 0 },
        { "day": "Friday", "maxTemp": 14, "minTemp": 3 },
        { "day": "Saturday", "maxTemp": 14, "minTemp": 4 }
      ],
      "highlights": {
        "uvIndex": 13,
        "wind": 7,
        "humidityValue": 62,
        "humidityDescr": "High",
        "visibilityValue": 14,
        "visibilityDescr": "Moderate",
        "sunrise":17,
        "sunset":14,
        "airQualityValue":63,
        "airQuailityDescr": "Moderate"
      }
    }
  },
  {
    "leftSide": {
      "city": "Malatya",
      "country": "Turkey",
      "temperature": 10,
      "day": "Monday",
      "clock": new Date(),
      "weatherDescr": "Sunny",
      "weatherCondition": "Clear"
    },
    "today": {
      "clocks": [
        { "clock": "00:00 AM", "temp": 10 },
        { "clock": "03:00 AM", "temp": 9 },
        { "clock": "06:00 AM", "temp": 4 },
        { "clock": "09:00 AM", "temp": 4 },
        { "clock": "12:00 AM", "temp": 3},
        { "clock": "04:00 AM", "temp": 4 },
        { "clock": "08:00 AM", "temp": 9 },
      ],
      "highlights": {
        "uvIndex": 14,
        "wind": 6,
        "humidityValue": 67,
        "humidityDescr": "Moderate",
        "visibilityValue": 16,
        "visibilityDescr": "Good",
        "sunrise":17,
        "sunset": 19,
        "airQualityValue": 73,
        "airQuailityDescr": "Good"
      }
    },
    "week": {
      "day": [
        { "day": "Sunday", "maxTemp": 11, "minTemp": 2 },
        { "day": "Monday", "maxTemp": 12, "minTemp":3 },
        { "day": "Tuesday", "maxTemp": 13, "minTemp": 3 },
        { "day": "Wednesday", "maxTemp": 11, "minTemp": 1 },
        { "day": "Thursday", "maxTemp": 8, "minTemp": 4 },
        { "day": "Friday", "maxTemp": 11, "minTemp": 2 },
        { "day": "Saturday", "maxTemp": 13, "minTemp": 4 }
      ],
      "highlights": {
        "uvIndex": 15,
        "wind": 8,
        "humidityValue": 73,
        "humidityDescr": "High",
        "visibilityValue": 14,
        "visibilityDescr": "Moderate",
        "sunrise":18,
        "sunset":14,
        "airQualityValue":75,
        "airQuailityDescr": "Moderate"
      }
    }
  },
  {
    "leftSide": {
      "city": "Ardahan",
      "country": "Turkey",
      "temperature": 1,
      "day": "Monday",
      "clock": new Date(),
      "weatherDescr": "Sunny",
      "weatherCondition": "Clear"
    },
    "today": {
      "clocks": [
        { "clock": "00:00 AM", "temp": 1 },
        { "clock": "03:00 AM", "temp": -5 },
        { "clock": "06:00 AM", "temp": -11 },
        { "clock": "09:00 AM", "temp": -12 },
        { "clock": "12:00 AM", "temp": -14},
        { "clock": "04:00 AM", "temp": -14 },
        { "clock": "08:00 AM", "temp": -10 },
      ],
      "highlights": {
        "uvIndex": 7,
        "wind": 8,
        "humidityValue":58,
        "humidityDescr": "Moderate",
        "visibilityValue": 24,
        "visibilityDescr": "Good",
        "sunrise":11,
        "sunset": 13,
        "airQualityValue": 80,
        "airQuailityDescr": "Good"
      }
    },
    "week": {
      "day": [
        { "day": "Sunday", "maxTemp": 1, "minTemp": -14 },
        { "day": "Monday", "maxTemp": 1, "minTemp":-14 },
        { "day": "Tuesday", "maxTemp": 0, "minTemp": -19 },
        { "day": "Wednesday", "maxTemp": -2, "minTemp": -19  },
        { "day": "Thursday", "maxTemp": 1, "minTemp": -16 },
        { "day": "Friday", "maxTemp": 3, "minTemp": -10 },
        { "day": "Saturday", "maxTemp":5, "minTemp": -9 }
      ],
      "highlights": {
        "uvIndex": 19,
        "wind": 8,
        "humidityValue": 43,
        "humidityDescr": "High",
        "visibilityValue": 58,
        "visibilityDescr": "Moderate",
        "sunrise":16,
        "sunset":19,
        "airQualityValue":84,
        "airQuailityDescr": "Moderate"
      }
    }
  },
  {
    "leftSide": {
      "city": "Sivas",
      "country": "Turkey",
      "temperature": 3,
      "day": "Monday",
      "clock": new Date(),
      "weatherDescr": "Sunny",
      "weatherCondition": "Clear"
    },
    "today": {
      "clocks": [
        { "clock": "00:00 AM", "temp": 3 },
        { "clock": "03:00 AM", "temp": 3 },
        { "clock": "06:00 AM", "temp": -1 },
        { "clock": "09:00 AM", "temp": -2 },
        { "clock": "12:00 AM", "temp": -3},
        { "clock": "04:00 AM", "temp": -4 },
        { "clock": "08:00 AM", "temp": -1 },
      ],
      "highlights": {
        "uvIndex": 9,
        "wind": 5,
        "humidityValue":76,
        "humidityDescr": "Moderate",
        "visibilityValue": 34,
        "visibilityDescr": "Good",
        "sunrise":15,
        "sunset": 18,
        "airQualityValue": 39,
        "airQuailityDescr": "Good"
      }
    },
    "week": {
      "day": [
        { "day": "Sunday", "maxTemp": 3, "minTemp": -4 },
        { "day": "Monday", "maxTemp": 7, "minTemp":-4 },
        { "day": "Tuesday", "maxTemp": 8, "minTemp": -3 },
        { "day": "Wednesday", "maxTemp": 7, "minTemp": -2  },
        { "day": "Thursday", "maxTemp": 6, "minTemp": -3 },
        { "day": "Friday", "maxTemp": 7, "minTemp": -4 },
        { "day": "Saturday", "maxTemp":8, "minTemp": -3 }
      ],
      "highlights": {
        "uvIndex": 17,
        "wind": 4,
        "humidityValue": 57,
        "humidityDescr": "High",
        "visibilityValue": 51,
        "visibilityDescr": "Moderate",
        "sunrise":9,
        "sunset":8,
        "airQualityValue":54,
        "airQuailityDescr": "Moderate"
      }
    }
  },
  {
    "leftSide": {
      "city": "Antalya",
      "country": "Turkey",
      "temperature": 18,
      "day": "Monday",
      "clock": new Date(),
      "weatherDescr": "Sunny",
      "weatherCondition": "Clear"
    },
    "today": {
      "clocks": [
        { "clock": "00:00 AM", "temp": 18 },
        { "clock": "03:00 AM", "temp": 14 },
        { "clock": "06:00 AM", "temp": 8 },
        { "clock": "09:00 AM", "temp":6 },
        { "clock": "12:00 AM", "temp": 5},
        { "clock": "04:00 AM", "temp": 12 },
        { "clock": "08:00 AM", "temp": 17 },
      ],
      "highlights": {
        "uvIndex": 8,
        "wind": 10,
        "humidityValue":87,
        "humidityDescr": "Moderate",
        "visibilityValue": 67,
        "visibilityDescr": "Good",
        "sunrise":20,
        "sunset": 19,
        "airQualityValue": 79,
        "airQuailityDescr": "Good"
      }
    },
    "week": {
      "day": [
        { "day": "Sunday", "maxTemp": 19, "minTemp": 4 },
        { "day": "Monday", "maxTemp": 18, "minTemp":6 },
        { "day": "Tuesday", "maxTemp": 19, "minTemp": 8 },
        { "day": "Wednesday", "maxTemp": 16, "minTemp": 10  },
        { "day": "Thursday", "maxTemp": 18, "minTemp": 6 },
        { "day": "Friday", "maxTemp":18, "minTemp": 7 },
        { "day": "Saturday", "maxTemp":18, "minTemp": 10 }
      ],
      "highlights": {
        "uvIndex": 15,
        "wind": 10,
        "humidityValue": 81,
        "humidityDescr": "High",
        "visibilityValue": 68,
        "visibilityDescr": "Moderate",
        "sunrise":19,
        "sunset":17,
        "airQualityValue":87,
        "airQuailityDescr": "Moderate"
      }
    }
  },


]