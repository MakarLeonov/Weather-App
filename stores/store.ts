import axios from "axios";

export const useStore = defineStore('store', {
  state: () => ({
    city: '',
    coordinates: {
      lat: 0,
      lon: 0,
    },
    weather: {},
    forecast: [],
    errorMessage: ''
  }),
  actions: {
    async getCoordinates(payload: string) {
      try {
        let data = await axios.get('http://api.openweathermap.org/geo/1.0/direct', {params: {
          q: payload,
          limit: 5,
          appid: '475ca2379b1fe1b671f6aa7424efbbc6',
          lang: 'ru',
        }})
          .then((data) => {
            this.city = payload;
            this.coordinates = {
              lat: data.data[1].lat,
              lon: data.data[1].lon,
            }
          })
          .then(() => {
            this.getWeather()
            this.getForecast()
          })
      } catch {
        this.errorMessage = 'Такой город не найден, повторите попытку'
      }
    },

    async getWeather() {
      try {
        let data = await axios.get('https://api.openweathermap.org/data/2.5/weather', {params: {
          lat: this.coordinates.lat,
          lon: this.coordinates.lon,
          appid: '475ca2379b1fe1b671f6aa7424efbbc6',
          lang: 'ru',
        }})
          .then(data => {
              this.weather = {
                description: data.data.weather[0].description,
                icon: data.data.weather[0].icon,
                temp: Math.round(data.data.main.temp - 273.15),
                feels_like: Math.round(data.data.main.feels_like - 273.15),
                temp_min: Math.round(data.data.main.temp_min - 273.15),
                temp_max: Math.round(data.data.main.temp_max - 273.15),
                pressure: data.data.main.pressure,
                humidity: data.data.main.humidity,
            }
          })

          this.errorMessage = ''
      } catch {
        this.errorMessage = 'Данные не получены, попробуйте ещё раз'
      }
    },

    async getForecast() {
      try {
        let data = await axios.get('https://api.openweathermap.org/data/2.5/forecast', {params: {
          lat: this.coordinates.lat,
          lon: this.coordinates.lon,
          appid: '475ca2379b1fe1b671f6aa7424efbbc6',
          cnt: 5,
          lang: 'ru',
        }})
          .then(data => {
              this.forecast = data.data.list
          })
      } catch {
        this.errorMessage = 'Прогноз погоды не оплучен, попробуйте ещё раз'
      }
    }
  }
})