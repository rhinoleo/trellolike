<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
    <my-form></my-form>
    <search></search>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Search from '@/components/Search'
import MyForm from '@/components/MyForm'

export default {
  name: 'app',
  components: {navbar: Navbar, search: Search, myForm: MyForm}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
