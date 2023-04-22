<template lang="html">
    <div class=" mt-24  m-auto max-w-xl calendar">
       <Datepicker class="select-user" />
    
    </div>
</template>
<script lang="ts">
import Datepicker from "../components/datePicker.vue";
export default {
    components: { Datepicker }
}
</script>
<style>
.calendar {
  box-shadow: 0 5px 20px rgba(0, 0, 0, .3);
  height: 401px;
  transition: .9s;
  transform-style: preserve-3d;
  width: 100%;
  background: radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgb(50 195 127 / 60%) 0%, rgb(181 162 162 / 0%) 77.08%, rgb(79 225 247 / 21%) 100%) ;
  filter: drop-shadow(2px 16px 19px rgba(0, 0, 0, 0.09));
  border-radius: 12px;
}
    
</style>