import styled from "@emotion/native";
import Lottie from 'lottie-react-native'

export const Wrapper = styled.View`
    width: 300px;
    height: 300px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const IconAnimation = styled(Lottie) <{ position: 'left' | 'right' }>`
    width: 100px;
    top: 25%;
    left: ${({ position }) => position === 'left' ? '10px' : '100px'};
    position: absolute;
`


export const RobotAnimation = styled(Lottie)`
    width: 190px;
`