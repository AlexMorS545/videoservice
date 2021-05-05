import { createStore } from 'vuex'
import film from './modules/film'
import serial from './modules/serial'

export default createStore({
  
  modules: {
    film,
    serial
  }
})
