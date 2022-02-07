import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'

import Novidades from '../Components/Novidades';
import Jogo from '../Components/Jogo';

export default function Home() {
    const novidades = [
        {id: 1, nome: 'God of War', imagem: 'https://cdn1.epicgames.com/offer/3ddd6a590da64e3686042d108968a6b2/EGS_GodofWar_SantaMonicaStudio_S1_2560x1440-5d74d9b240bba8f2c40920dcde7c5c67_2560x1440-5d74d9b240bba8f2c40920dcde7c5c67'},
        {id: 2, nome: 'Horizon Forbidden West', imagem: 'https://images6.alphacoders.com/108/thumb-1920-1082417.jpg' }
    ];

    const promocoes = [
        {id: 1, nome: 'The King of Fighters', preco: 'R$ 32,00', imagem: 'https://bdjogos.com.br/capas/9829-the-king-of-fighters-xv-capa-1.jpg'},
        {id: 2, nome: 'Pokémon Legends Arceus', preco: 'R$ 400,00', imagem: 'https://cdn1.dotesports.com/wp-content/uploads/sites/3/2021/10/12141328/Pokemon-Legends-Arceus-keyart.jpg' },
        {id: 3, nome: 'Uncharted: Coleção Legado dos Ladrões', preco: 'R$ 100,00', imagem: 'https://i0.wp.com/www.portaldonerd.com.br/wp-content/uploads/2021/12/uncharted-hub-legacy-thieves-keyart-16x9-en-17sept21-1.jpg' },
        

    ]

    return(
      <ScrollView style={style.container}>
          <Text style={style.titulo}><Icon name="game-controller" size={26} /> Novidades</Text>
            
            <View style={{flex: 1}}>
            <FlatList 
                data={novidades}
                renderItem={({item}) => Novidades({item})}
                key={(item) => item.id}
                horizontal={true}
            />
            </View>

            <View style={{flex: 1, marginBottom: 15}}>
                <Text style={style.titulo}><Icon2 name="sale" size={26} />Promoções</Text>
                
                <FlatList 
                data={promocoes}
                renderItem={({item}) => (Jogo({item}))}
                key={(item) => item.id}
                horizontal={true}
                />
            </View>
      </ScrollView>
    )
}

const style = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        
    },
    titulo: {
        fontSize: 26,
        fontWeight: 'bold',
        color: 'black'
    }
})