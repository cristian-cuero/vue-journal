<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <h1>Hola Mundo</h1>
    <button class="btn btn-primary" @click="gotoDaybook()">Primario</button>
    <button type="button" @click="gotoDaybook()" class="btn btn-secondary">
      Secondary
    </button>
    <button type="button" @click="gotoDaybook()" class="btn btn-success">
      Success
    </button>
  </div>
</template>
<script>
export default {
  methods: {
    gotoDaybook() {
      this.$router.push({ name: "daybook" });
    },
  },
};
</script>
