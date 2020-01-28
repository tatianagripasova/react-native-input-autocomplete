# react-native-input-autocomplete

A simple and fully customizable React Native component that can be used for autocompletion when searching data from local or remote source.

![Autocomplete Example](example.gif)

### Installation

`$ npm install --save react-native-input-autocomplete`

or 

`$ yarn add react-native-input-autocomplete`


### Usage

```javascript
// ...


import React, { useState } from "react";
import Autocomplete from "react-native-input-autocomplete";

const ExampleApp = props => {

    const [isVisible, setIsVisible] = useState(false);
    const [addressOptions, setAddressOptions] = useState([]);

    const defaultOptions = [
        {
            id: "1",
            label: "Home",
            description: "200 Larkin St, San Francisco, CA 94102"
        },
        {
            id: "2",
            label:"Work",
            description: "1 Dr Carlton B Goodlett Pl, San Francisco, CA 94102"
        }
    ];

    const autocompleteInputHandler = async input => {
        const result = await fetch("http://example.com/address");
        const data = await result.json();
        setAddressOptions(data);
    };

    const selectValue = (value) => {
        // Value is whatever user selected in autocomplete.
    };

    render() {
        return (
            <Autocomplete 
                visible={isVisible}
                autocompleteOptions={addressOptions}
                defaultOptions={defaultOptions}
                dividerTitle={"Your Favourite Addresses"}
                onInputChange={autocompleteInputHandler}
                onSelect={selectValue}
                hideAutocomplete={() => setIsVisble(false)}
            />
        );
    }

};

// ...
```

### Props
| Prop | Type | Description |
| :------------ |:---------------:| :-----|
| visible | boolean | Set to `true` to show the component. |
| autocompleteOptions | array | An array with the list of suggested options.
| defaultOptions | array | An array with the list of pre-saved favourite options. |
| dividerTitle | string | A string that divides the suggested list from the default list. |
| onInputChange | function | The callback that will be called when the user starts typing in the input container. |
| onSelect | function | The callback that will be called once the user selects an option from the autocomplete suggestions. |
| hideAutocomplete | function | The callback hides the autocomplete component. |

## Contribute
Feel free to open issues or do a PR!