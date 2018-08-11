<template>
   <v-form>
     <v-container>
       <v-layout row wrap>
         <v-flex xs6 offset-xs3>
             <div class="white elevation-2">
               <v-toolbar flat dense class="white" darken>
                 <v-toolbar-title elevation-1>Sign Up</v-toolbar-title>
               </v-toolbar>
                <div class="pl-4 pr-4 pt-2 pb-2">
                  <v-text-field
                    label="First Name"
                    placeholder="First Name"
                    solo
                    ></v-text-field>
                    <v-text-field
                      label="Last Name"
                      placeholder="Last Name"
                      solo
                      ></v-text-field>
                        <v-text-field
                          label="Phone Number"
                          type="tel"
                          placeholder="Phone Number"
                          solo
                          ></v-text-field>
                          <v-text-field
                            label="Email"
                            type="email"
                            v-model="email"
                            placeholder="Email"
                            solo
                            ></v-text-field>
                            <v-text-field
                              label="Password"
                              type="password"
                              v-model="password"
                              autocomplete="new-password"
                              placeholder="Password"
                              solo
                              ></v-text-field>
                              <v-text-field
                                label="Password"
                                type="password"
                                v-model="password"
                                placeholder="Repeat Password"
                                solo
                                ></v-text-field>

                  <div class="error"/>
                      <br>
                      <v-btn dark class="lime accent-4" @click="Register">Sign Up</v-btn>
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
            method: {
               async register () {
                  try {
                  const response = await AuthenticationService.register({
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
