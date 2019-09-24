<template>
  <div id="app">
    <h1><router-link to="/">{{ msg }}</router-link></h1>
    <ul>
      <li><router-link to="/siema">Siema</router-link></li>
      <li><router-link to="/glide">Glide</router-link></li>
      <li><router-link to="/slick">Slick</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to slider test App'
    }
  }
}
</script>

<style>
body {
  background: #000000e8;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
  text-decoration: none;
}
.router-link-active {
  font-weight: 800;
  text-decoration: underline;
}
.container h1,h2 {
  color: beige;
}
</style>
