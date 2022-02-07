import React, { Component, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList, Button } from 'react-native'
import Jogo from '../Components/Jogo';

export default function Categorias() { 

    const rpg = [
      {id: 1, nome: "Final Fantasy VII Remake", preco: 'R$ 99,99',imagem: 'https://upload.wikimedia.org/wikipedia/pt/0/09/Final_Fantasy_VII_Remake_capa.png'},
      {id: 2, nome: 'Persona 5', preco: 'R$ 99,99', imagem: 'https://image.api.playstation.com/vulcan/img/cfn/11307XlqDFlHmHWGjBPndSappCDTnE9OmnP2P-dSzcvLX9i0pvH_okJOl6dP1AnZefxthD-2k3RrsdzYU_BqUy9K5_sv-Tnx.png' }
    ]

    const acao = [
      {
        id: 1, 
        nome: 'Devil May Cry 5', 
        preco: 'R$ 99,99',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imagem: 'https://s1.gaming-cdn.com/images/products/2670/orig/devil-may-cry-5-vergil-pc-jogo-steam-europe-cover.jpg'
      }
    ]
    
    return(
      <ScrollView style={style.container}>

          <Text style={style.titulo}>Ação</Text>
            
            <View style={{flex: 1}}>
            <FlatList 
                data={acao}
                renderItem={({item}) => Jogo({item})}
                key={(item) => item.id}
                horizontal={true}
            />
            </View>

            <View style={{flex: 1}}>
                <Text style={style.titulo}>RPG</Text>
                
                <FlatList 
                data={rpg}
                renderItem={({item}) => (Jogo({item}))}
                key={(item) => item.id}
                horizontal={true}
                />
            </View>

            <View style={{marginBottom: 10}}> 
              {/* Espaçamento para não deixar o conteúdo ser tapado pelo Tab Navigator */}
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