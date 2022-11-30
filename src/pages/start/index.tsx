import React from 'react'
import { ScrollView } from 'react-native'
import * as S from './styles'
import { LifeStatus } from '../../components'
export const Start = () => {

    return (
        <S.Wrapper>
            <ScrollView showsVerticalScrollIndicator={false}>
                <S.Logo source={require("../../assets/icons/logo3.png")} />
                <LifeStatus />
                <S.Description>
                    Vamos transformar sua vida{'\n'}em jogo, buscando sempre{'\n'}o melhor nivel.
                </S.Description>
            </ScrollView>
        </S.Wrapper>
    )
}