<template lang="pug">
    v-app
        v-navigation-drawer(app='', temporary='', v-model='drawer')
            v-list
                v-list-item(v-for='item in items', :key='item.title', :to='item.url')
                    v-list-item-icon
                        v-icon(color='gray') {{item.icon}}
                    v-list-item-content
                        v-list-item-title(v-text='item.title')

                v-list-item(v-if="isUserLoggedIn",@click="onLogout")
                    v-list-item-icon
                        v-icon(color='gray') mdi-exit-run
                    v-list-item-content
                        v-list-item-title Logout
        div
            v-toolbar(:color='bar.class', :dark='bar.dark')
                v-app-bar-nav-icon.hidden-md-and-up(@click='drawer = !drawer')
                v-toolbar-title
                    router-link(to="/", tag="span", class="pointer") Home
                v-spacer
                v-toolbar-items.hidden-sm-and-down
                    v-btn(v-for='item in items', :key='item.title', :to='item.url', text='')
                        v-icon(left='') {{item.icon}}
                        |               {{item.title}}

                    v-btn(v-if="isUserLoggedIn",text, @click="onLogout")
                        v-icon(left='') mdi-exit-run
                        |               Logout
        v-main
            router-view

            v-snackbar(:value="error", :multi-line="true", :timeout='10000', :top="true", color="error") {{error}}
                template(v-slot:action='{ attrs }')
                    v-btn(dark, text, v-bind='attrs', @click='closeError') Close





</template>

<script>

  export default {
  data() {
    return {
      bar: { class: 'primary', dark: true },
      drawer: false
    }
  },
   computed: {
      error() {
          return this.$store.getters.error
      },
      isUserLoggedIn() {
          return this.$store.getters.isUserLoggedIn
      },
      items() {
          if(this.isUserLoggedIn){
              return [
                  { title: 'Orders', icon: 'mdi-border-color' , url: '/orders'},
                  { title: 'New ad', icon: 'mdi-format-annotation-plus' , url: '/new'},
                  { title: 'My ads', icon: 'mdi-clipboard-list-outline' , url: '/list'}
              ]
          }
          return [
              { title: 'Login', icon: 'mdi-lock' , url: '/login'},
              { title: 'Registration', icon: 'mdi-face' , url: '/registration'}
          ]
      }
   },
   methods: {
       closeError(){
           this.$store.dispatch('clearError')
       },
       onLogout(){
           this.$store.dispatch('logoutUser')
           this.$router.push("/")
       }
   }
}
</script>

<style scoped>
    .pointer {
        cursor: pointer;
    }
</style>