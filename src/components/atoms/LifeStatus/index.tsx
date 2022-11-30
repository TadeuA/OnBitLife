import React from 'react';
import * as S from './styles'
export const LifeStatus = () => {
    /**
     * Status:
     *  - 100 = Max
     *  - 50 = Medium
     *  - 25 = Low
     *  - 00 = Short (Game Over)
     * 
     * The Robot, has happy for first and health after xx-xx
     */
    return (
        <S.Wrapper>
            <S.IconAnimation
                source={require("../../../assets/education/education-100.json")}
                autoPlay
                loop
                position='left'
            />
            <S.IconAnimation
                source={require("../../../assets/money/money-100.json")}
                autoPlay
                loop
                position='right'
            />
            <S.RobotAnimation
                source={require("../../../assets/robot/robot-100-100.json")}
                autoPlay
                loop
            />
        </S.Wrapper>
    )
}