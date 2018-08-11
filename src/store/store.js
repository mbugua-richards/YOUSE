import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
   strict: true,
   state: {
     token: null,
     user: null,
     isUserLoggedIn: false,
   },
   mutation: {
     setToken (state, token) {
       state.token = token
       if (token) {
         state.isUserLoggedIn = true
       } else {
         state.isUserLoggedIn - false
       }
     },
     setUser (state, user) {
       state.token = user
     }
   },
   actions: {
     setToken ({commut}, token) {
       commit('setToken', token)
     },
     setUser ({commut}, user) {
       commit('setToken', user)
     }
   }
})
