<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
      <span class="text-success fs-2 fs-bold">22</span>
      <span class="mx-1 fs-3">Marzo</span>
      <span class="mx-2 fs-4 fw-ligth">2023, Jueves</span>
    </div>
    <div>
      <button class="btn btn-danger mx-2">
        borrar
        <i class="fa fa-trash-alt"></i>
      </button>
      <button class="btn btn-primary">
        subir foto
        <i class="fa fa-upload"></i>
      </button>
    </div>
  </div>
  <hr />
  <div class="d-flex flex-column px-3 h-75">
    <textarea
      placeholder="¿ Que Sucedio El Dia De Hoy"
      class="form-control"
    ></textarea>
  </div>
  <Fab  icon="fa-save"/>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Wiz_Khalifa_Stavernfestivalen_2018_%28231822%29.jpg/640px-Wiz_Khalifa_Stavernfestivalen_2018_%28231822%29.jpg"
    alt="entry-picture"
    class="img-thumbnail"
  />
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  name: "entryView",
  components: {
    Fab: defineAsyncComponent(() => import("../components/Fab.vue")),
  },
};
</script>

<style lang="scss" scoped>
textarea{
    font-size: 20px;
    border: none;
    height: 100%;
    &:focus{
        outline: none;
    }
}  
img{
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}    


</style>
