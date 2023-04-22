<template>
   <div class=" px-16 flex items-center justify-between pt-8 ">
    <span @click="prev()"  class=" cursor-pointer">
      <svg  xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </span>
    <div class="flex justify-between select-user">
        <h2 class="font-bold years text-2xl mr-4 text-white cursor-pointer">{{ currentMonthName }}</h2>
         <h2 class="years font-bold years text-2xl text-white cursor-pointer">{{ year }}</h2>
    </div>
     <span @click="next()" class=" cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </span>
  </div>
  <section class="m-auto max-w-md mt-8 flex select-user ">
       <p class="text-center  week"  v-for="day in days" :key="day"> {{ day }} </p>
  </section>
   <section class="flex flex-wrap m-auto max-w-md mt-4 select-user">
      <p class="text-center day text-lg text-white null" v-for="num in startDay()" :key="num"></p>
      <p class="text-center day text-lg text-white cursor-pointer" v-for="num in daysInMonth()" :key="num"
      :class="currenDateClass(num)"
      >   {{ num }}
      </p>
    </section>
</template>

<script lang="ts" >
import {MonthLang} from '../variables/languages'
import {currentMonth,days,currentYear,currentDay} from '../composables/getDate'
import { ref } from 'vue';

export default {
  
  setup() {
      let month = ref(currentMonth)
      let year = ref(currentYear)
      return {days,month,year,currentDay}
  },
  methods: {
     daysInMonth() {
      return new Date(this.year, this.month + 1, 0).getDate();
    },
      startDay() {
      return new Date(this.year, this.month,1 ).getDay();
    },
     next() {
      if (this.month === 11) {
         this.month = 0;
         this.year++;
      } else { 
        this.month++;
      }
    },
    prev(){
      if(this.month === 0){
        this.month = 11
        this.year--
      }else{
        this.month--
      }
    },
     currenDateClass(num) {
      const calenderFullDate = new Date(
        currentYear,
        currentMonth,
        num
      ).toDateString();
      const currentFullDate = new Date().toDateString();
      return calenderFullDate === currentFullDate ? "activeDay" : '';
    },
  
    
  },

  computed: {
    currentMonthName() {
      return new Date(
        this.year,
        this.month
      ).toLocaleString(MonthLang[1], { month: "long" });
    },
  },
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
.week{
  color:white;
   width: 14%;
  font-size: 17px;
  
}
.day{
   width: 10%;
   margin-left: 2%;
   margin-right: 2%;
   margin-bottom: 5px;   
   margin-top: 5px;
   transition: 0.4s;
}
.day:hover{
  background: #B5BEC6;
  border-radius: 30px;  
}
.null{
  opacity: 0;
}
.activeDay{ 
  background: #B5BEC6;
  border-radius: 30px;
}


</style>