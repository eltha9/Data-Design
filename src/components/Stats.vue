<template>
  <div class="stats">
      <Graph/>
      <section id="cityStats">
          <CityStat/>
          <CityStat/>
      </section>
      <Map/>
  </div>
</template>

<script setup>
import Graph from './SubStats/Graph.vue'
import Map from './SubStats/Map.vue'
import CityStat from './SubStats/CityStat.vue'

</script>

<style scoped>

</style>