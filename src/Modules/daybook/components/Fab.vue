<template>
   <button class="btn btn-primary">
    <i 
    class="fa fa-2x"
    :class="icon">
   </i>
   </button>
</template>

<script>
export default {
name: 'btnAgregar',
props:{
   icon: {
      type: String,
      default: 'fa-plus'
   }

   
},

computed:{
  
}  
}
</script>


<style lang="scss" scoped>
 /* Boton Floante */
 button{
    border-radius: 100%;
    bottom: 20px;
    height: 60px;
    position: fixed;
    right: 20px;
    width: 60px;
 }
 
</style>