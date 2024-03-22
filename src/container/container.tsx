import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { CharacterDetailScreen, EpisodeDetailScreen, FavoriesScreen, HomeScreen } from 'screens'

export const Container = () => {
    const Stack = createStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name='HomeScreen'
                    component={HomeScreen}
                />
                <Stack.Screen
                    name='EpisodeDetailScreen'
                    component={EpisodeDetailScreen}
                />
                <Stack.Screen
                    name='CharacterDetailScreen'
                    component={CharacterDetailScreen}
                />
                <Stack.Screen
                    name='FavoriesScreen'
                    component={FavoriesScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
