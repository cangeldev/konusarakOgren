import React, { FC } from 'react'
import { TouchableOpacity, Image } from 'react-native'
import style from './style'
import { iconButtonEnabled, iconButtonDisabled } from 'assets'

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