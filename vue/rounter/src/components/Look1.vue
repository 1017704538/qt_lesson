<template>
  <div>
      Look1
  </div>
  
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '看一看页面'
    }
  },
  method: {
      beforeRouteEnter(to, from, next) {
          console.log(from, to)
          next()
      },
      beforeRouteLeave(to, from, next) {
          console.log(next, to)
          next()
      }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
