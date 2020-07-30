import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'
import router from './router'
import firebase from 'firebase';


Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  render: h => h(App),
  router,
  created(){
    firebase.initializeApp({
      apiKey: 'AIzaSyAieid_nHAFaS8bOTa3SdwdjO-HOxLCjUg',
      authDomain: 'ads-project-9dce3.firebaseapp.com',
      databaseURL: 'https://ads-project-9dce3.firebaseio.com',
      projectId: 'ads-project-9dce3',
      storageBucket: 'ads-project-9dce3.appspot.com',
      messagingSenderId: '598283365416',
      appId: '1:598283365416:web:9a7558bcfe4e5edff0991d'
    })

    firebase.auth().onAuthStateChanged(user => {
      if (user){
        this.$store.dispatch('autoLoginUser', user)
      }
    })

    this.$store.dispatch('fetchAds')
  }
}).$mount('#app')
