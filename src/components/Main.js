import React from 'react'
import './Main.css'
import Loader from './functions/Loader.js'
import './Footer.css'


class Main extends React.Component{
    constructor() {
        super()
        this.state = {
            weather: {},
            city:'Moscow',
            loading: false,
            forecast: {},
        }
        this.handleKeyDown = this.handleKeyDown.bind(this)
    }

    componentDidMount() {
        this.setState({loading: true})
        fetch(`https://ru.api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=metric&appid=95f2254e0dedd1a3a97cdf2b6303e974`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    weather: data,
                })
            })

        fetch(`https://ru.api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&units=metric&appid=95f2254e0dedd1a3a97cdf2b6303e974`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    forecast: data,
                    loading: false,
                })
            })

    }

    handleKeyDown(event) {
        if (event.key === 'Enter') {
            this.setState({
                city: event.target.value,
                loading: true,
            })

            setTimeout(
                () => {
                    this.componentDidMount()
                    console.log(this.state.city)
                },
                1 * 1000
              );

        }
    }
    
    render() {

        let iconLink = `https://openweathermap.org/img/wn/${this.state.weather?.weather?.[0]?.icon}@4x.png`
        console.log(this.state.weather)
        let iconForecast = [
            `https://openweathermap.org/img/wn/${this.state.forecast?.list?.[0]?.weather?.[0]?.icon}@4x.png`,
            `https://openweathermap.org/img/wn/${this.state.forecast?.list?.[1]?.weather?.[0]?.icon}@4x.png`,
            `https://openweathermap.org/img/wn/${this.state.forecast?.list?.[2]?.weather?.[0]?.icon}@4x.png`,
            `https://openweathermap.org/img/wn/${this.state.forecast?.list?.[3]?.weather?.[0]?.icon}@4x.png`,
            `https://openweathermap.org/img/wn/${this.state.forecast?.list?.[4]?.weather?.[0]?.icon}@4x.png`,
            `https://openweathermap.org/img/wn/${this.state.forecast?.list?.[5]?.weather?.[0]?.icon}@4x.png`,
        ]


        return (
            <><input type="text" className="search" name="search" placeholder="Search your city..." onKeyDown={this.handleKeyDown} />
            <><>
            {this.state.loading ? <Loader /> :            
            <div className="right-panel">
                <h3 id="right">Full forecast now</h3>
                <img src={iconLink} id="full-icon" />
                <h1 id="city-full">{this.state.weather?.name}</h1>
                <h1 id="cloud">Cloudness: {this.state.weather?.clouds?.all}%</h1>
                <h1 id="max">Max temperature: {this.state.weather?.main?.temp_max}°C</h1>
                <h1 id="min">Min temperature: {this.state.weather?.main?.temp_min}°C</h1>
                <h1 id="temp-full">Temperature now: {this.state.weather?.main?.temp}°C</h1>
                <h1 id="humidity-full">Humidity about: {this.state.weather?.main?.humidity}%</h1>
            </div>}

            {this.state.loading ? <Loader /> :                 
            <div className="main">
                    <h1 id="city">{this.state.weather?.name}</h1>
                    <h3 id="humidity">Humidity about: {this.state.weather?.main?.humidity}%</h3>
                    <h1 id="temp">{this.state.weather?.main?.temp}°C</h1>
                    <img src={iconLink} id="temp-icon" />
                </div>}
</>         {this.state.loading ? <Loader /> :
                <div className="forecast">
                    <h3>Today's forecast</h3>
                    <div id="card1" className="forecast-card">
                        <h3>6:00</h3>
                        <img src={iconForecast[0]} id="forecast-icon" />
                        <h3 className="forecast-temp">{this.state.forecast?.list?.[0]?.main?.temp}°C</h3>
                    </div>
                    <div id="card2" className="forecast-card">
                        <h3>9:00</h3>
                        <img src={iconForecast[1]} id="forecast-icon" />
                        <h3 className="forecast-temp">{this.state.forecast?.list?.[1]?.main?.temp}°C</h3>
                    </div>
                    <div id="card3" className="forecast-card">
                        <h3>12:00</h3>
                        <img src={iconForecast[2]} id="forecast-icon" />
                        <h3 className="forecast-temp">{this.state.forecast?.list?.[2]?.main?.temp}°C</h3>
                    </div>
                    <div id="card4" className="forecast-card">
                        <h3>15:00</h3>
                        <img src={iconForecast[3]} id="forecast-icon" />
                        <h3 className="forecast-temp">{this.state.forecast?.list?.[3]?.main?.temp}°C</h3>
                    </div>
                    <div id="card5" className="forecast-card">
                        <h3>18:00</h3>
                        <img src={iconForecast[4]} id="forecast-icon" />
                        <h3 className="forecast-temp">{this.state.forecast?.list?.[4]?.main?.temp}°C</h3>
                    </div>
                    <div id="card6" className="forecast-card">
                        <h3>21:00</h3>
                        <img src={iconForecast[5]} id="forecast-icon" />
                        <h3 className="forecast-temp">{this.state.forecast?.list?.[5]?.main?.temp}°C</h3>
                    </div>
                    <div className="footer">
                <h3>Air conditions</h3>
                <h3 id="temp-feels">Feels like: {this.state.weather?.main?.feels_like}°C</h3>
                <h3 id="wind">Wind: {this.state.weather?.wind?.speed} km/h</h3>
                <h3 id="pressure">Pressure: {this.state.weather?.main?.pressure} millibars</h3>
            </div>

                </div>
            }   


            </></>
        )
    }

}

export default Main