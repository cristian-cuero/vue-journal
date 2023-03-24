<template>
  <div class="d-flex justify-content-center">
    <h1 class="align-self-center">No Hay Datos Que Mostrar</h1>
  </div>
  <Fab></Fab>
</template>

<script>
import { defineAsyncComponent } from 'vue';
export default {
  name: "noEntrySelected",
  components: {
     Fab: defineAsyncComponent( () => import('../components/Fab.vue'))
  }
};
</script>

<style lang="scss" scoped>
div {
  height: 100%;
}
</style>
