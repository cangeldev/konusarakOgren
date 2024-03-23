import { View, Text, Image } from 'react-native'
import React, { FC } from 'react'
import style from './style'
import { user, statusPng, genders, species, location, circle, female, male } from 'assets'

interface ICharacterInfoCard {
    title: 'Name' | 'Status' | 'Species' | 'Gender' | 'Location'
    info: string
}

export const CharacterInfoCard: FC<ICharacterInfoCard> = ({ title, info }) => {

    const imageMap: { [key: string]: any } = {
        'Name': user,
        'Status': statusPng,
        'Species': species,
        'Gender': genders,
        'Location': location
    }

    const statusImage = info === 'Alive' ? style.aliveStatusImage : style.deadStatusImage

    const genderImage = info === 'Female' ? female : male

    return (
        <View style={style.container}>
            <View style={style.imageContainer}>
                <Image
                    source={imageMap[title]}
                    style={style.image}
                />
            </View>
            <Text style={style.infoText}>
                {info}
            </Text>
            {(info === 'Alive' || info === 'Dead') &&
                <Image
                    source={circle}
                    style={statusImage}
                />
            }
            {(info === 'Female' || info === 'Male') &&
                <Image
                    source={genderImage}
                    style={style.genderImage}
                />
            }
        </View>
    )
}
