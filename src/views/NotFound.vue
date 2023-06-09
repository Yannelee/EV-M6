<template>
  <div class="notFound">
    <h1 class="notFound__text">404</h1>
    <p class="notFound__paragraph">Página no encontrada</p>
    <router-link to="/" class="btn btn-outline-light mt-5">Volver</router-link>
  </div>
</template>

<script>
export default {
  name: 'noFound-comp'
}
</script>

<style>
.notFound{
  text-align: center;
  height: 93vh;
  background: linear-gradient(120deg, lavender, mediumorchid, lavender);
  color: white;
}
.notFound__text{
  font-weight: bolder;
  font-size: 20rem;
}
.notFound__paragraph{
  font-weight: bold;
  font-size:2rem;
}
</style>