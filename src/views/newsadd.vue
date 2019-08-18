<template>
    <div>
        <add />
        <addedit />
    </div>
</template>

<script>
  import add from '../components/add.vue'
  import addedit from '../components/addedit.vue'
   export default {
       components: {
           add,
           addedit
       }
       
   }
</script>