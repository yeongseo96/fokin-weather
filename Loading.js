import React from "react";
import { StyleSheet, Text, View } from 'react-native';

export default function Loading(){
    return (
        // view = div 개념
        <View style={styles.container}>
            <Text style={styles.text}>Getting the fucking weather</Text>
        </View>
    );
}

//크기, 비율조정 width height 말고 flex로 하자.
//디바이스 크기에 맞춰서 조정해주기 때문
const styles = StyleSheet.create({
    //container : 부모
    container: {
      flex: 1, //모든 공간 사용 가능
      // alignItems: 'center',
      justifyContent: 'flex-end',
      paddingHorizontal: 30,
      paddingVertical: 100,
      backgroundColor: "#FDF6AA"
    },
    text: {
        color: "#2c2c2c",
        fontSize: 30
    }
});
  