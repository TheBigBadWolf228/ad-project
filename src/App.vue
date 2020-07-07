<template>
  <v-app>

    <v-navigation-drawer
    app
    temporary
    v-model="drawer">

      <v-list>
        <v-list-item
                v-for="item in items"
                :key="item.title"
                :to="item.url"
        >
          <v-list-item-icon>
            <v-icon color="gray">{{item.icon}}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>

        </v-list-item>
      </v-list>

    </v-navigation-drawer>



    <v-card color="grey lighten-4" flat height="200px">
      <v-toolbar :color="bar.class" :dark="bar.dark">
        <v-app-bar-nav-icon
        @click="drawer = !drawer"
        class="hidden-md-and-up">
        </v-app-bar-nav-icon>
        <v-toolbar-title>Title</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn
                  v-for="item in items"
                  :key="item.title"
                  :to="item.url"
                  text
          >
            <v-icon left>{{item.icon}}</v-icon>
            {{item.title}}
          </v-btn>
        </v-toolbar-items>


      </v-toolbar>
    </v-card>



    <v-main>
          <router-view></router-view>
    </v-main>

  </v-app>
</template>

<script>

  export default {
  data() {
    return {
      bar: { class: 'primary', dark: true },
      drawer: false,
      items: [
        { title: 'Login', icon: 'mdi-lock' , url: '/login'},
        { title: 'Registration', icon: 'mdi-face' , url: '/registration'},
        { title: 'Orders', icon: 'mdi-border-color' , url: '/orders'},
        { title: 'New ad', icon: 'mdi-format-annotation-plus' , url: '/new'},
        { title: 'My ads', icon: 'mdi-clipboard-list-outline' , url: '/list'}
      ]
    }
  }
}
</script>
