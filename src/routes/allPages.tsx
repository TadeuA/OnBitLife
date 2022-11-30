import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import type { NativeStackNavigationOptions } from '@react-navigation/native-stack'

/**
 * Pages
 */

import { Start } from '../pages/start'


/**
 * Navigation
 */
const Stack = createNativeStackNavigator()
const screenOptionsNavigator: NativeStackNavigationOptions = {
    headerShown: false
}

export const AllPages = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={screenOptionsNavigator}
            >
                <Stack.Screen name='Start' component={Start} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}