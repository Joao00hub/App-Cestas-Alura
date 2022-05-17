import React from "react";
import { Text, StyleSheet } from "react-native";


function Texto({ children, style }) {
    let estilo = styles.text;

    if (style?.fontWeight === 'bold'){
        estilo = styles.textBold;
    }

    return <Text style={[style, estilo]}>{ children }</Text>
}

const styles = StyleSheet.create({
    text: {
        fontWeight: 'normal',
        fontFamily: 'Montserrat-Regular',
    }, 
    
    textBold: {
        fontWeight: 'normal',
        fontFamily: 'Montserrat-Bold',
    }
})

export default Texto;