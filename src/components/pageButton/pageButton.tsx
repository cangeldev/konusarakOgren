import { TouchableOpacity, Image } from 'react-native'
import React, { FC } from 'react'
import { iconButtonEnabled, iconButtonDisabled } from 'assets'
import style from './style'

interface IPageButton {
    onPress?: () => void
    disabled?: boolean
    status?: string
}

export const PageButton: FC<IPageButton> = ({ onPress, disabled, status }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}>
            <Image
                source={disabled == true ? iconButtonDisabled : iconButtonEnabled}
                style={[style.image, status == "nextButton" ? style.imageNext : null]}
            />
        </TouchableOpacity>
    )
}