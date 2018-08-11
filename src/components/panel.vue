<template>
  <div class="white elevation-2">
    <v-toolbar flat dense class="lime accent-4" darken>
        <v-toolbar-title>{{title}}</v-toolbar-title>
    </v-toolbar>
         <slot>
         Item Name: <v-text-field
          label=""
          outline
        ></v-text-field>
      </v-flex>
      Describe the Item: <v-text-field
       label=""
       outline
       ></v-text-field>
       </v-flex>
       Category:  <v-flex>
        <v-select
          :items="items"
          label="Select Category"
          solo
        ></v-select>
      </v-flex>
         <v-flex>
            Image:
            <input type="file" @change="onFileSelected">
         </v-flex>
         Condition of Item:
         <v-flex>
         <v-select
           :items="items"
           label="Select Category"
           solo
         ></v-select>
       </v-flex>
         </slot>
     </div>
 </div>
</template>

<script>
  export default {
    data: () => ({
      items: ['Mobile Device', 'Camera', 'Wedding Gown', 'Laptop']
    }),
     methods: {
       onFileSelected(event) {
          console.log(event)
       }
     },
     data: () => ({
     items: ['Tip top shape', 'Good', 'Not Good']
   })
  }
</script>
<style scoped>
</style>
