<template>
  <div id="app">
  <v-app>
       <page-header/>
     <v-content>
       <v-container fluid>
          <router-view></router-view>
     </v-container>
     </v-content>
     <v-footer app>
         <v-footer
        height="auto" fixed class="lime accent-2 justify">
        <v-card
           class="flex"
           flat
           tile
         >
           <v-card-title class="lime accent-4 justify-center" height="100" dark>
             <h4> FAQs  |  How it Works </h4>
           </v-card-title>
           <v-card-actions class="white justify-center">
             &copy;2018 — <strong>YOUSE</strong>
           </v-card-actions>
         </v-card></v-footer>
     </v-footer app>
  </v-app>
  </div>
</template>

<script>
import PageHeader from '@/components/AppToolbar.vue'

export default {
  name: 'App',
  components: {
     PageHeader
  }
}
</script>

<style>
#app {
  font-family: 'OpenSans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.v-card-title {
   text-align: center;
}
</style>
