import React from 'react'
import {FlatList, Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import {Icon} from 'react-native-elements'

const data = [{
        id: '123',
        title: 'Get a ride',
        image: 'https://links.papareact.com/3pn',
        screen: 'MapScreen'
    },
    {
        id: '456',
        title: 'Order Food',
        image: 'https://links.papareact.com/28w',
        screen: 'EatsScreen'
    }

]

const NavOptions = () => {
    return (
        <FlatList 
            data={data}
            horizontal
            keyExtractor={item => item.id}
            renderItem={
                ({item}) => (
                    <TouchableOpacity style={[tw`p-2 pl-6 pt-4 bg-gray-200 m-2 w-40`, styles.option]}>
                        <View>
                            <Image
                             style={
                                {
                                    height: 120, 
                                    width: 120,
                                    resizeMode: 'contain'
                                }
                            }
                                source={
                                    {
                                        uri: item.image
                                    }
                                }
                            />
                            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                            <Icon name='arrowright' color='white' type='antdesign' />
                        </View>
                    </TouchableOpacity>
                )
            }
        />
    )
}

export default NavOptions


const styles = StyleSheet.create({
    option: {
        height: 200
    }
})


