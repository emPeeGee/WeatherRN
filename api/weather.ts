import axios from 'axios';
import { apiKey } from '../constants';
import topCities from './topCities.json';

type Params = { cityName: string };

const forecastEndpoint = (params: Params) =>
  `https://api.tomorrow.io/v4/weather/forecast?location=${params.cityName}&timesteps=daily&apikey=${apiKey}`;

const apiCall = async (endpoint: string) => {
  const options = {
    method: 'GET',
    url: endpoint,
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const fetchWeatherForecast = (params: Params) => {
  const forecastUrl = forecastEndpoint(params);

  return apiCall(forecastUrl);
};

export const fetchLocations = (params: Params) => {
  return topCities
    .filter((city) => city.name.includes(params.cityName))
    .splice(0, 3);
};
