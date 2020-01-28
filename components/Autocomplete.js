import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView, TouchableWithoutFeedback, Dimensions } from "react-native";

import Modal from "react-native-modal";
import PropTypes from "prop-types";

import Input from "./Input";
import ImageButton from "./ImageButton";

const height = Math.round(Dimensions.get('window').height);

const Autocomplete = props => {
    Autocomplete.propsTypes = {
        visible: PropTypes.bool,
        autocompleteOptions: PropTypes.array,
        defaultOptions: PropTypes.array,
        dividerTitle: PropTypes.string,
        onSelect: PropTypes.func,
        onInputChange: PropTypes.func,
        hideAutocomplete: PropTypes.func
    };

    const [textValue, setTextValue] = useState("");

    const onValueSelect = (value) => {
        props.onSelect(value);
        setTextValue("");
    };

    const onTextChange = textValue => {
        setTextValue(textValue);
        props.onInputChange(textValue);
    };

    return (
        <Modal
            style={styles.modal}
            coverScreen={true} 
            backdropColor={"#FFFFFF"}
            backdropOpacity={1} 
            isVisible={props.visible}
        >
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.inputContainer}>
                        <Input
                            style={styles.input}
                            value={textValue}
                            onChangeText={onTextChange}
                            autoFocus={true}
                        />
                    </View>
                    <View style={styles.optionContainer}> 
                        {props.autocompleteOptions.map((autoOption) => {
                            return (
                                <View style={styles.option} key={autoOption.id}>
                                    <TouchableWithoutFeedback
                                        onPress={() => onValueSelect(autoOption)}
                                    >
                                        <View>
                                            <Text>
                                                {autoOption.description}
                                            </Text>
                                        </View>
                                    </TouchableWithoutFeedback>
                                </View>
                            )
                        })}
                        <View style={styles.dividerTitle}>
                            <Text style={styles.dividerTitleText}>{props.dividerTitle}</Text>
                        </View>
                        {props.defaultOptions.map((defaultOption) => {
                            return (
                                <View style={styles.option} key={defaultOption.id}>
                                
                                    <TouchableWithoutFeedback
                                        onPress={() => onValueSelect(defaultOption)}
                                    >
                                        <View>
                                            <Text style={styles.textLabel}>{defaultOption.label}</Text>
                                            <Text>{defaultOption.description}</Text>
                                        </View>
                                    </TouchableWithoutFeedback>
                                </View>
                            )
                        })}
                    </View>
                </ScrollView>
                <View style={styles.buttonContainer}>
                    <ImageButton
                        imageStyle={styles.cancelButton}
                        source={require("../images/cancel.png")}
                        onPress={props.hideAutocomplete}
                    />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modal: {
        justifyContent: "center",
        alignItems: "center",
        minHeight: height,
        height: height
    }, 
    container: {
        flex: 1,
        justifyContent: "center",
        width: "100%",
    }, 
    inputContainer: {
        flex: 1
    }, 
    dividerTitle: {
        padding: 20
    },
    dividerTitleText: {
        fontFamily: "System",
        fontSize: 18
    },
    textLabel: {
        fontSize: 16, 
        fontWeight: "bold"
    },
    optionContainer: {
        flex: 5, 
        alignItems: "center" 
    }, 
    option: {
        padding: 10, 
        borderBottomWidth: 1, 
        borderBottomColor: "#E7E3E3",
        width: "90%"
    },
    input: {
        marginTop: 60,
        marginBottom: 30
    },
    buttonContainer: {
        flex: 1,
        paddingBottom: 30
    },
    cancelButton: {
        width: 40,
        height: 40
    }
});

export default Autocomplete;