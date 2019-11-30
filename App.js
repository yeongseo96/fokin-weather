import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";

const API_KEY = "bd078f21da2fb663d15a3acd9a7b26f0";
export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}`
      );
      console.log(data);

  }
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      // console.log(response);
      const {
        coords : {latitude, longitude}
       } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude)
      this.setState({ isLoading: false });
      //send to API and get weather
     } catch (error){
       Alert.alert("can't find you", "so sad")
    }
    
  };
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const {isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}

