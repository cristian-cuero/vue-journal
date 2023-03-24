<template>
  <div class="entry-container mb-3 pointer p-2"
  @click="$router.push({name: 'entry', params:{id: 10} })">
    <!-- Titulo De La Entrada -->
    <div class="entry-tittle d-flex">
      <span class="text-success fs-5 fs-bold">22</span>
      <span class="mx-1 fs-5">Marzo</span>
      <span class="mx-2 fw-ligth">2023, Jueves</span>
    </div>
    <div class="entry-description">
      Et proident non tempor dolore non ex velit anim voluptate nulla id. Ipsum
      elit nulla do dolore consequat sit magna ea. Aliqua aute cillum mollit
      esse Lorem dolor voluptate laboris et anim aute magna ex reprehenderit.
      Labore ex voluptate voluptate commodo.
    </div>
  </div>
</template>

<script>
export default {
  name: "EntryVue",
};
</script>

<style lang="scss" scoped>
 .entry-container{
    border-bottom: 1px  solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover{
        // lighten es para clar un color
        background-color: lighten($color: grey, $amount: 45);
        transition: 0.2s all ease-in;
    }
   .entry-description{
    font-size: 12px;
   }
 }
</style>

