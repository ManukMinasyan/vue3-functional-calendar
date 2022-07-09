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
  background: #2b4450;
  border-radius: 4px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, .3);
  height: 501px;
  perspective: 1000;
  transition: .9s;
  transform-style: preserve-3d;
  width: 100%;
}
    
</style>