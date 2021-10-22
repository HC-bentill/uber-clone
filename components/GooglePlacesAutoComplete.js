import React from 'react'
import { View, Text } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from "@env";
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from "../slices/navSlice";

const GooglePlacesAutoComplete = () => {

    const dispatch = useDispatch()

    return (
        <GooglePlacesAutocomplete 
        placeholder="Where from?"
        styles={{
            container: {
                flex: 0,
                marginBottom: 10,
            },
            textInput: {
                fontSize: 18,
                backgroundColor:"whitesmoke",
            },
        }}
        onPress={(data, details = null) => {
         dispatch(
             setOrigin({
             location: details.geometry.location,
             description: data.description,
          })
         );

         dispatch(setDestination(null));
         }}
        query={{
            key: GOOGLE_MAPS_APIKEY, 
            languages: 'en',
        }}

         nearbyPlacesAPI="GooglePlacesSearch"
         debounce={400}
         enablePoweredByContainer={false}
         fetchDetails={true}
         returnKeyType={"search"}
        />
    )
}

export default GooglePlacesAutoComplete
