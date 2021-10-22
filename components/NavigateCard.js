import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from "@env";
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/core';
import { useDispatch } from 'react-redux';
import NavFavourites from './NavFavourites';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';

const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    return (
        <View style={tw`bg-white flex-1`}>
            <Text style={tw`text-center p-5 text-xl`}>Good Morning, Henry</Text>
            <View style={tw`border-t border-gray-200 flex-shrink`}>
                <View>
                <GooglePlacesAutocomplete 
                    placeholder="Where To?"
                    styles={toInputBoxStyles}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}
                    enablePoweredByContainer={false}
                    fetchDetails={true}
                    returnKeyType={"search"}
                    minLength={2}
                    query={{
                        key: GOOGLE_MAPS_APIKEY, 
                        languages: 'en',
                    }}
                    onPress={(data, details = null) => {
                        //shoot an action into the data layer/store
                        dispatch  (
                            setDestination({
                            location: details.geometry.location,
                            description: data.description,
                         })); 
                         navigation.navigate('RideOptionsCard');
                        }}
                    />

                </View>
                <NavFavourites/>
            </View>
            <View style={tw`flex-row bg-white justify-evenly py-2 mt-7 border-t border-gray-100`}>

                <TouchableOpacity onPress={() => navigation.navigate("RideOptionsCard")} style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}>
                    <Icon name="car" type="font-awesome" color="white" size={16}/>
                    <Text style={tw`text-white text-center`}>Rides</Text>
                </TouchableOpacity>

                <TouchableOpacity style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}>
                    <Icon name="fast-food-outline" type="ionicon" color="black" size={16}/>
                    <Text style={tw`text-center`}>Eats</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 20,
        flex: 0,
    },
    textInput: {
        backgroundColor: "#DDDDDF",
        borderRadius: 0,
        fontSize: 18,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    },
})