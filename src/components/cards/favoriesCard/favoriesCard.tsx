import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { favoriEnabled, rickAndMorty } from 'assets'
import style from './style'

interface IFavoriesCard {
    title: string
}
export const FavoriesCard: FC<IFavoriesCard> = ({ title }) => {
    return (

        <View style={style.container}>
            <Image
                source={rickAndMorty}
                style={style.image}
            />
            <Text style={style.title}>
                {title}
            </Text>
            <TouchableOpacity onPress={()=>console.log("first")}style={style.favoriIconCotainer}>
                <Image
                    source={favoriEnabled}
                    style={style.favoriIcon}
                />
            </TouchableOpacity>
        </View>

    )
}
