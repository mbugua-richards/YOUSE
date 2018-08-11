<template>
   <v-form>
     <v-container>
       <v-layout row wrap>
         <v-flex xs6 offset-xs3>
             <div class="white elevation-2">
               <v-toolbar flat dense class="white" darken>
                 <v-toolbar-title elevation-1>Sign In</v-toolbar-title>
               </v-toolbar>
               <div class="pl-4 pr-4 pt-2 pb-2">
                          <v-text-field
                            label="Email"
                            v-model="email"
                            placeholder="Email"
                            solo
                            :rules="emailRules"
                            required
                            ></v-text-field>
                            <v-text-field
                              label="Password"
                              type="password"
                              v-model="password"
                              placeholder="Password"
                              solo
                              ></v-text-field>
                  <div class="error"/>
                      <br>
                      <v-btn dark class="lime accent-4" @click="login">Sign In</v-btn>
                 </div>
              </div>
          </div>
        </v-flex>
     </v-layout>
    </v-container>
  </v-form>
</template>

<script>
     import AuthenticationService from '@/services/AuthenticationService'
        export default {
            data () {
              return {
              Email:'',
              Password:'',
              error: null
              }
            },
            methods: {
               async login () {
                  try {
                    const response = await AuthenticationService.login({
                      email: this.email,
                      password: this.password
                    })
                    this.$store.dispatch('setToken', response.data.token)
                    this.$store.dispatch('setUser', response.data.user)
                  } catch (error) {
                  this.error = error.response.data.error
                    }
                 }
              }
            }
</script>
<style scoped>
.error {
   color:red;
 }
</style>
