import React, { Component } from 'react';

import Header from './components/Header';
import WeatherInfo from './components/WeatherInfo';
import Form from './components/Form';

import './App.css';

class App extends Component {

	state = {
		country: 'AR',
		location: '',
		ApiKey: '119ed424f5803d3f068436b031368255',
		currentWeather: {},
		extendedWeather: [],
		status: '',
		loading: false,
		empty: false
	}

	componentDidUpdate () {
		this.setStorage();
	}

	componentDidMount () {
		this.getStorage();
	}

	getStorage = () => {
		const locationStorage = localStorage.getItem('location');
		if (locationStorage) {
			this.setState({
				location: JSON.parse(locationStorage),
			})
			const { country, ApiKey } = this.state;
			this.getWeather(JSON.parse(locationStorage), country, ApiKey);
		} else {
			this.setState({
				empty: true
			})
		}
	}

	setStorage = () => {
		localStorage.setItem(
			'location',
			JSON.stringify(this.state.location)
		)
	}
	
	getLocation = (location) => {
		this.setState({
			location
		})
		const { country, ApiKey } = this.state;
		this.getWeather(location, country, ApiKey);
	}

	getWeather = async ( location, country, ApiKey ) => {
		this.setState({
			loading: true
		})
		await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location},${country}&appid=${ApiKey}&units=metric`)
			.then(resp => resp.json())
			.then(data => {
				this.setState({
					currentWeather: {
						name: data.name,
						humidity: data.main.humidity,
						pressure: data.main.pressure,
						temp: data.main.temp,
						wind_speed: data.wind.speed,
						weather_code: data.weather[0].id,
						weather_icon: data.weather[0].icon,
						weather_desc: data.weather[0].description
					},
					status: data.cod,
					loading: false,
					empty: false
				})
			})
			.catch(e => {
				console.log(e);
				this.setState({
					status: 404,
					loading: false
				})
			})

		await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location},${country}&appid=${ApiKey}&units=metric`)
			.then(resp => resp.json())
			.then(data => {
				this.setState({
					extendedWeather: data.list
				})
			})
			.catch(e => {
				console.log(e)
			})
	}

	render() {
		return (
			<div className="App">
				<Header>
					<Form
						getLocation={this.getLocation}
					/>
				</Header>
				<WeatherInfo
					currentWeather={this.state.currentWeather}
					extendedWeather={this.state.extendedWeather}
					status={this.state.status}
					loading={this.state.loading}
					empty={this.state.empty}
				/>
			</div>
		);
	}
}

export default App;