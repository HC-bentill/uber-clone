import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements';
import MapView, {Marker} from 'react-native-maps'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';



const OverlayComponent = () => {
    const navigation = useNavigation();
    return(
        <TouchableOpacity>
            <Icon 
            onPress={()=> navigation.navigate("HomeScreen")}
            style={tw`p-3 bg-black rounded-full w-12 mt-16 z-50 ml-2`}
            name="arrowleft" color="white" type="antdesign"
            />
        </TouchableOpacity>
    )
    }
    


const FullMapScreen = () => {
    return (
        <View>
              <View style={tw`h-full`}>
                <MapView
                style={tw`flex-1`}
                initialRegion={{
                latitude: 5.603717,
                longitude: -0.186964,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }}
            >
                <OverlayComponent />
                
                <Marker
                coordinate={{
                    latitude: 5.603717,
                    longitude: -0.186964,
                }}
                title="Origin"
                identifier="origin"
                />
                
            </MapView>

             </View>

           
        </View>
    
        
    )
}

export default FullMapScreen

const styles = StyleSheet.create({})
