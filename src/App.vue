<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
    </nav> -->
    <HeaderComponent />
    <ContentComponent />
  </div>
</template>

<script>
import HeaderComponent from "./templates/HeaderComponent.vue";
import ContentComponent from "./templates/ContentComponent.vue";

export default {
  components: {
    HeaderComponent,
    ContentComponent,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
