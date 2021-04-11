<template>
  
  <main class="px-20 mt-10 font-grotesk" >
    <div class="">

      <Header/>
      <Stats/>
    </div>
  </main>
  <Footer class="font-grotesk"/>
</template>

<script setup>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import Stats from './components/Stats.vue'

document.title = "Data Air";

</script>
<style>
</style>