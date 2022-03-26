import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import NavOptions from '../components/NavOptions'

const HomeScreen = () => {
    return (
        <SafeAreaView style={tw`mt-8 bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image 
                    source={{
                    uri: 'https://links.papareact.com/gzs'
                }}
                style={{
                    height: 100,
                    width: 100,
                    resizeMode: 'contain'
                }}
                />
            </View>

            <NavOptions />
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    
    
})
