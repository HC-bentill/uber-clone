import React from 'react';
import { ScrollView,SafeAreaView, StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import { Header } from 'react-native-elements';
import tw from "tailwind-react-native-classnames"
import GooglePlacesAutoComplete from '../components/GooglePlacesAutoComplete';
import NavOptions from '../components/NavOptions';
import { ListItem, Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import HomeMap from '../components/HomeMap';
import NavFavourites from '../components/NavFavourites';


const list = [
    {
      title: 'Choose a saved place',
      icon: 'av-timer',
      screen: 'FullMapScreen',
    },
    {
      title: 'Set destination on map',
      icon: 'star',
      screen:'FullMapScreen',
    },
  ]
  

 
const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <>
        <Header
        leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
        />
        <SafeAreaView style={tw`bg-white h-full`}>
          <View style={tw`p-5`}>
              <Image
              style={{
                  width: 100, height:100, resizeMode: "contain",
              }}
              source={{
                  uri: "https://links.papareact.com/gzs",
              }}
               />
                <GooglePlacesAutoComplete />
            <ScrollView>
               <NavOptions/>
             <NavFavourites/>
           
            <View style={tw`mt-5`}>
                <Text style={{fontSize: 18, paddingTop: 15, paddingBottom: 15, }}>Around You</Text>
                <View style={tw`h-48`}>
                    <HomeMap/>
                </View>
                
            </View>
            <View style={tw`mt-5`}>
                {
                    list.map((item, i) => (
                    <ListItem key={i} bottomDivider onPress={()=> navigation.navigate(item.screen)} >
                        <Icon name={item.icon} />
                        <ListItem.Content>
                        <ListItem.Title>{item.title}</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                    ))
                }
            </View>
            </ScrollView>
          </View>
        </SafeAreaView>
        </>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({

})

 