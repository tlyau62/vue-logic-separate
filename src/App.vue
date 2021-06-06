<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <BButton class="m-2" :file-id="10" @click="log"> test </BButton>
    <router-view />
  </div>
</template>

<script>
import { BButton } from "bootstrap-vue";
import { withCreateFile } from "./services/file.service";

export default {
  components: {
    BButton: withCreateFile(BButton),
  },
  methods: {
    log() {
      console.log("test");
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
