<template lang="html">
  <div class=" m-auto max-w-2xl flex flex-col items-center justify-center">
    <h1 class="text-center mt-6 font-medium text-4xl">Welcom Vue 3 Functional Calendar</h1>
   
  </div>
  <div>
    <CalendarBlock />

  </div>
</template>

<script lang="ts">

import CalendarBlock from '../views/CalendarBlock.vue'

export default {
    components: { CalendarBlock }
}
</script>
<style lang="">
  

</style>