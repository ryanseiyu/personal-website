import { configureStore } from '@reduxjs/toolkit'
import estadoReducer from '../features/estado/estadoSlice'

export default configureStore({
    reducer: {
        estado: estadoReducer,
    },
})