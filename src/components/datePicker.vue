<template>
   <div class=" flex items-center justify-evenly pt-6 ">
    <span @click="currentYear--"  class=" cursor-pointer">
      <svg  xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </span>
    
     <h2   class="font-bold years text-2xl text-white cursor-pointer">{{ currentYear }}</h2>
     <span @click="currentYear++" class=" cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </span>
  </div>
</template>

<script lang="ts" >
import { ref } from 'vue';
import  {generateYears }  from '../composables/years'
export default {
  setup() {
    
      let  currentYearIndex = new Date().getFullYear()
      let years = generateYears(0,2300)
      let currentYear = ref(years[currentYearIndex])
      return{currentYear,years,currentYearIndex}
      
    
  }
};
</script>



<style>
.years{
    font-family: 'IBM Plex Serif', serif;
font-family: 'Kantumruy Pro', sans-serif;

}
svg{
  transition: 0.2s ease-in-out;
}
svg:hover{
  stroke: rgb(189, 183, 183);

}


</style>