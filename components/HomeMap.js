import React from 'react'
import { Icon } from 'react-native-elements'
import MapView, {Marker} from 'react-native-maps'
import tw from 'tailwind-react-native-classnames'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';



const HomeMap = () => {
    
    return (
        <MapView
            style={tw`flex-1`}
            initialRegion={{
            latitude: 5.603717,
            longitude: -0.186964,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            }}
        >
            <Marker
              coordinate={{
                latitude: 5.603717,
                longitude: -0.186964,
              }}
              title="Origin"
              identifier="origin"
            />
            
        </MapView>

    )
}

export default HomeMap