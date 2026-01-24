import {configureStore} from "@reduxjs/toolkit"
import slice from './slice'

const store = configureStore({
    reducer:{
        criketers : slice
    }
})

export default store