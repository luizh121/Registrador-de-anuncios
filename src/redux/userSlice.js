import{createSlice} from '@reduxjs/toolkit'

const initialState = {
  email: "",
  uid: "",
  username: "",
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers : {
    setEmail: (state, action) => {state.email = action.payload},
    setUid: (state, action)  => {state.uid = action.payload},
    setUsername: (state, action) => {state.username = action.payload},
  },
})

export const {setEmail, setUid, setUsername} = userSlice.actions 
export default userSlice.reducer;