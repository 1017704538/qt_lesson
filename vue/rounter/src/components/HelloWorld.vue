<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/">主页</router-link>

    <router-link to="/Look1">Look1</router-link>
    <div class="go-two" @click="go-two">Look2</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '看一看页面'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

