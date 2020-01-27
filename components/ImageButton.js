import React from "react";
import { View, StyleSheet, TouchableOpacity, Image} from "react-native";

const ImageButton = props => {
    return (
        <View style={{...styles.imageButton, ...props.style}}>
            <TouchableOpacity onPress={props.onPress}>
                <Image 
                    style={{...styles.imageStyle, ...props.imageStyle}}
                    source={props.source}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    imageButton: {
        flex: 1,
        alignItems: "center", 
        justifyContent: "center"
    }, 
    imageStyle: {
        width: 120,
        height: 120
    }

});

export default ImageButton;