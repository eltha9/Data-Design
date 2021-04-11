<template>
  <div class="stats">
      <Graph/>
      <section id="cityStats">
          <CityStat category="good" city="Reims" title="La ville qui a le plus baissé ses polluants depuis la pandémie :"/>
          <CityStat category="bad" city="Paris" title="La ville qui a le plus augmenté ses polluants depuis la pandémie :"/>
      </section>
      <Map/>
  </div>
</template>

<script setup>
import Graph from './SubStats/Graph.vue'
import Map from './SubStats/Map.vue'
import CityStat from './SubStats/CityStat.vue'

</script>

<style>
#cityStats{
  @apply grid grid-cols-2 gap-x-6;
  margin-bottom: 4.5rem;
}

.mini-card{
    @apply text-base flex items-center border-purple-100 rounded border px-2 py-1 mr-4;
}
.mini-card:last-child{
    @apply mr-0;
}
.mini-card .mini-card-color{
    width: 1rem;
    height: 1rem;
    content: ' ';
    overflow: hidden;
    @apply mr-2 inline-block rounded-sm; 
}
.mini-card .mini-card-title{

}
.rayure{
    background-image: url('../assets/rayure.svg');
}
</style>