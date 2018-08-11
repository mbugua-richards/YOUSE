<template>
    </v-toolbar>
    <v-toolbar fixed flat class="grey lighten-3">
      <v-toolbar-title>
        <span class="home"
         @click="navigateTo({name: 'root'})">
          <h1>Youse</h1>
        </span>
      </v-toolbar-title>
        <v-spacer></v-spacer>
          <v-toolbar-items>
              <v-text-box
                 label="Search"
               ></v-text-box>
              <v-btn
              flat
              @click="navigateTo({name: 'lease'})">
                <h4>Lease Item</h4>
              </v-btn>
              <v-btn v-if="!$store.state.isUserLoggedIn"
              flat
               @click="navigateTo({name: 'login'})">
                <h4>Sign In</h4>
              </v-btn>
              <v-btn v-if="!$store.state.isUserLoggedIn"
              flat
               @click="navigateTo({name: 'register'})">
                <h4>Sign Up</h4>
              </v-btn>
          </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
   methods: {
     navigateTo (route) {
       this.$router.push(route)
     }
   }
}
</script>

<style scoped>
  .home {
    cursor: pointer;
  }
  .home:hover {
    color:  #669900;
  }
</style>
