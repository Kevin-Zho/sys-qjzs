<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,body {
  overflow-x: hidden;
}
#app {
  font-family:'Microsoft YaHei';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#tip .mint-spinner-double-bounce-bounce1,#tip .mint-spinner-double-bounce-bounce2 {
    background-color: rgb(38, 162, 255)!important;
}
#tip .mint-spinner-double-bounce {
  margin:0 auto;
  width: 50px!important;
  height: 50px!important;
}
</style>
