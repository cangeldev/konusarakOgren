import { Text } from 'react-native'
import React, { FC } from 'react'
import style from './style'

interface IEpisodeDetailsCard {
    title: string
    info: string
}

export const EpisodeDetailsCard: FC<IEpisodeDetailsCard> = ({ title, info }) => {
    return (
        <Text style={style.detailText}>
            <Text style={style.boldText}>
                {title}: {" "}
            </Text>
            {info}
        </Text>
    )
}
