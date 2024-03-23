import { View, Text, FlatList } from 'react-native'
import React from 'react'
import style from './style'
import { FavoriesCard } from 'components/cards'

export const FavoriesScreen = () => {
    const DATA = [
        { id: '1', meyve: 'tes1' },
        { id: '2', meyve: 'tes1' },
        { id: '3', meyve: 'tes1' },
        { id: '4', meyve: 'tes1' },
        { id: '5', meyve: 'tes1' },
        { id: '6', meyve: 'tes1' },
        { id: '7', meyve: 'tes1' },
        { id: '8', meyve: 'tes1' },
        { id: '9', meyve: 'tes1' },
        { id: '10', meyve: 'tes1' },
    ];
    const renderItem = ({ item }: any) => <FavoriesCard title={item.meyve} />
    const ItemSeparator = () => <View style={style.separator} />
    return (

        <View style={style.container}>
            <Text style={style.title}>
                Favories Screen
            </Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={2}
                ItemSeparatorComponent={ItemSeparator}
                columnWrapperStyle={style.columnWrapper}
            />
        </View>
    )
}