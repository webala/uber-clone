import React from 'react'
import {FlatList, Image, Text, TouchableOpacity, View } from 'react-native'

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
                    <TouchableOpacity>
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
                        </View>
                    </TouchableOpacity>
                )
            }
        />
    )
}

export default NavOptions


