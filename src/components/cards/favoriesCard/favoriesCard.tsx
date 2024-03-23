import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import React, { FC } from 'react'
import { favoriEnabled, rickAndMorty } from 'assets'
import style from './style'

interface IFavoriesCard {
    title: string
}

export const FavoriesCard: FC<IFavoriesCard> = ({ title }) => {
    const handleIcon = () => {
          Alert.alert('Dikkat', '... isimli karakteri favorilerden kaldırmak istediğinize emin misiniz?', [       
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
    }
    return (

        <View style={style.container}>
            <Image
                source={rickAndMorty}
                style={style.image}
            />
            <Text style={style.title}>
                {title}
            </Text>
            <TouchableOpacity onPress={handleIcon} style={style.favoriIconCotainer}>
                <Image
                    source={favoriEnabled}
                    style={style.favoriIcon}
                />
            </TouchableOpacity>
        </View >

    )
}
