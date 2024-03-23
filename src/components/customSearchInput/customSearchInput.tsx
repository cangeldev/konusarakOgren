import { TextInput } from 'react-native'
import React, { FC, useState } from 'react'
import style from './style'

interface ICustomSearchInput {
    placeHolder: string
    onInputChange: (inputText: string) => void
}

export const CustomSearchInput: FC<ICustomSearchInput> = ({ placeHolder, onInputChange }) => {

    const [inputText, setInputText] = useState('')

    const handleTextChange = (text: string) => {
        setInputText(text)
        onInputChange(text)
    }

    return (
        <TextInput
            style={style.txtInputContainer}
            placeholder={placeHolder}
            value={inputText}
            onChangeText={handleTextChange}
        />
    )
}
