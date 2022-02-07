import React, {Component} from 'react'
import { View, Text, Image} from 'react-native'

export default function Novidades({item}) {
    return(
            <View style={{height: 200, width: 250, margin: 10}}>
                <Text>{item.nome} {item.preco}</Text>
                <Image source={{uri: item.imagem}} style={{flex: 1,borderRadius: 20}} />
                
            </View>
    )
}