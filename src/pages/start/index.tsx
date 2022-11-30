import React from 'react'
import { View, ScrollView, Image, Text } from 'react-native'

export const Start = () => {

    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image source={require("../../assets/icons/logo3.png")} />
                <Text>
                    Vamos transformar sua vida {"/n"} em jogo, buscando sempre {"/n"} o melhor nivel.
                </Text>
            </ScrollView>
        </View>
    )
}