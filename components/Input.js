import React from "react";
import { TextInput, StyleSheet } from "react-native";

class Input extends React.Component {
    render() {
        return <TextInput {...this.props} style={{ ...styles.input, ...this.props.style }} />
    }  
}

const styles = StyleSheet.create({
    input: {
        alignItems: "center",
        width: "100%",
        height: 40,
        borderColor: "#B9B5B5",
        borderWidth: 1 
    }
});

export default Input;