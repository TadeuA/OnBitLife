import React from 'react'
import { View, ScrollView, Image, Text } from 'react-native'
import * as S from './styles'
export const Start = () => {

    return (
        <S.Wrapper>
            <ScrollView showsVerticalScrollIndicator={false}>
                <S.Logo source={require("../../assets/icons/logo3.png")} />
                <S.Description>
                    Vamos transformar sua vida{'\n'}em jogo, buscando sempre{'\n'}o melhor nivel.
                </S.Description>
            </ScrollView>
        </S.Wrapper>
    )
}