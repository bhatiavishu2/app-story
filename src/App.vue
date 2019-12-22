<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Input type="password" label="Name"/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Input from "./components/atoms/Input.vue"

export default {
  name: "app",
  components: {
    HelloWorld,
    Input
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
