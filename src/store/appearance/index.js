import { createSlice } from "@reduxjs/toolkit"


const initialState = {
     
    backgroundColor: {
        name: 'dark',
        primary: '#000',
        secondary: '#16181c',
        third: '#202327',
        buttonPrimary: '#1d9bf0',
        buttonSecondary: '#fff'
    },
    color: {
        primary: '#1d9bf0',
        secondary: '#8ecdf8',
        base: '#e7e9ea',
        baseSecondary: '#71767b',
        borderPrimary: '#2f3336'
        },
    hoverColor: {
        primary: '#d7dbdc',
        secondary: '#e7e9ea1a',
        third: '#1a8cd8'
    },
    fontSize: 16

    /*backgroundColor: {
        name: 'dim',
        primary: '#15202b',
        secondary: '#1e2732',
        third: '#273340',
        buttonPrimary: '#1d9bf0',
        buttonSecondary: '#fff'
    },
    color: {
        primary: '#1d9bf0',
        secondary: '#8ecdf8',
        base: '#e7e9ea',
        baseSecondary: '#71767b',
        borderPrimary: '#38444d'
    },
    hoverColor: {
        primary: '#d7dbdc',
        secondary: '#e7e9ea1a',
        third: '#1a8cd8'
    },
    fontSize: 16,*/

    /*backgroundColor: {
        name: 'default',
        primary: '#fff',
        secondary: '#fff',
        third: '#fff',
        buttonPrimary: '#0f1419',
        buttonSecondary: '#0f1419'
    },
    color: {
        primary: '#1d9bf0',
        secondary: '#8ecdf8',
        base: '#000',
        baseSecondary: '#536471',
        borderPrimary: '#eff3f4'
    },
    hoverColor: {
        primary: '#272c30',
        secondary: '#e7e9ea1a',
        third: '#272c30'
    },
    fontSize: 16,*/
}

const appearance = createSlice({
    name: 'appearance',
    initialState,
    reducers:{
        //state manipule etme metotları

        _setBackgroundColor: (state, action) => {
            state.backgroundColor = action.payload
        },
        _setColor: (state, action) => {
            state.color = action.payload
        },
        _setFontSize: (state, action) => {
            state.fontSize = action.payload
        },
    }
})


export const {_setBackgroundColor, _setColor, _setFontSize} = appearance.actions

export default appearance.reducer
