import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    currentAccount: {
        id: 1,
        username: 'burakparcall',
        fullName: 'Burak',
        avatar: 'https://pbs.twimg.com/profile_images/1729080081539067904/1oZGW1xG_normal.jpg'
    },
    accounts: [
        {
            id: 1,
            username: 'burakparcall',
            fullName: 'Burak',
            avatar: 'https://pbs.twimg.com/profile_images/1729080081539067904/1oZGW1xG_normal.jpg'
        },
        {
            id: 2,
            username: '_burkware',
            fullName: 'Burkware',
            avatar: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png'
        }
    ]
}

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        //state manipule etme metotları
        
        _addAccount: (state, action) => {
            state.accounts.push(action.payload)
        },
        _removeAccount: (state, action) => {
            state.accounts = state.accounts.filter(account => account.id !== action.payload)
            if(state.currentAccount && action.payload == state.currentAccount.id) {
                this._setCurrentAccount(false)
            }
        },
        _setCurrentAccount: (state, action) => {
            state.currentAccount = action.payload
        }
    }
})


export const {_addAccount, _setCurrentAccount, _removeAccount} = auth.actions

export default auth.reducer;