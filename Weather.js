import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Weather({temp, condition}) {
    return (
        <View style={styles.container}>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons size={96} name="weather-lightning-rainy"></MaterialCommunityIcons>
                <Text style={styles.temp}>{temp}</Text>
                <Text>{condition}</Text>
            </View>
            <View style={styles.halfContainer}>

            </View>
        </View>
    );
}

Weather.propTypes = {
    temp:PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm", 
        "Drizzle", 
        "Rain", 
        "Snow",  
        "Atmosphere", 
        "Clear", 
        "Clouds",
        "Haze",
        "Dust",
        "Mist"
    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize:42
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})