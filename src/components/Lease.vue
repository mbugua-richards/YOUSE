<template>
   <v-layout>
      <v-flex xs6 offset-xs3>
         <panel title="Lease an Item">
           <div v-for="list in lease"
              :key="list.title">
              {{list.title}}
              {{list.lender}}
              {{list.dailyrate}}
           </div>
         </panel>
      </v-flex>
   </v-layout>
</template>

<script>
     import Panel from '@/components/Panel'
        export default {
       components: {
     Panel
   },
   data () {
     return {
       lease: null
     }
   },
     mounted () {
       //do a request to the backend for the list of items on lease//
     }
}
</script>

<style scoped>
</style>
