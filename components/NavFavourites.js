import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import tw from 'tailwind-react-native-classnames';

const data = [
    {
        id: "123",
        icon: "home",
        location: "Home",
        destination: "Hc Technologies, Atta Mills Road, Weija, Ghana",
    },
    {
        id: "456",
        icon: "briefcase",
        location: "Work",
        destination: "Accra Mall, Spintex Road, Accra, Ghana",
    }
];

const NavFavourites = () => {
    return (
    <FlatList 
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item: {location, destination, icon}}) => (
            <TouchableOpacity style={tw`flex-row items-center pb-3 pt-6 pl-2 border-b border-gray-200 `}>
                <Icon
                    style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                    name={icon}
                    type="ionicon"
                    color="white"
                    size={18}
                />
                 <View>
                    <Text style={tw`font-semibold text-lg`}>{location}</Text>
                    <Text style={tw`text-gray-500`}>{destination}</Text>
                </View> 
            </TouchableOpacity>
        )}

    />
    )
}

export default NavFavourites;

const styles = StyleSheet.create({})
