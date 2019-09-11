<template>
  <div id="app">
    <Second :second="second"/>
    <Minute/>
    <Hour/>
    <Apm/>
    <Day/>
    <Month/> 
  </div>
</template>

<script>
// @指向src目录
import Second from '@/components/Second.vue'
import Minute from '@/components/Minute.vue'
import Hour from '@/components/Hour.vue'
import Apm from '@/components/Apm.vue'
import Day from '@/components/Day.vue'
import Month from '@/components/Month.vue'

export default {
  name: 'App',
  data() {
    return {
      second: ''  
    }
  },
  components: {
    Second,
    Minute,
    Hour,
    Apm,
    Day,
    Month
  },
  methods: {
    start () {
    setInterval(() => {
      let date = new Date();
      this.second = date.getSeconds();
    },1000)
  }
  },
  created() {
    this.start();
  },
}
</script>

<style>

</style>
