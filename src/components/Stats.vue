<template>
  <div class="stats">
      <Graph :values="values.graph"/>
      <section id="cityStats">
          <CityStat category="good" :city="values.cities.positif.city" title="La ville qui a le plus baissé ses polluants depuis la pandémie :" :values="values.cities.positif"/>
          <CityStat category="bad" :city="values.cities.negatif.city" title="La ville qui a le plus augmenté ses polluants depuis la pandémie :" :values="values.cities.negatif"/>
      </section>
      <Map/>
  </div>
</template>

<script>
import Graph from './SubStats/Graph.vue'
import Map from './SubStats/Map.vue'
import CityStat from './SubStats/CityStat.vue'


export default{
    components:{
        Graph,
        Map,
        CityStat
    },
    
    data: function () {
    return {
        values: {
            cities:{
                positif:{
                    city:"Poitiers",
                    values:{
                        pm25: [5.6,10.7],
                        pm10: [7.8,14.8],
                        co: [110,203]
                    }
                },
                negatif:{
                    city:"Grenoble",
                    values:{
                        pm25: [2.6,4.8],
                        pm10: [9.5,15.3],
                        co: [166,215]
                    }
                }
            },
            graph:{
                pm25: [11, 11, 12, 6, 7, 7, 8, 11, 14, 12, 11, 15, 12, 11,12],
                pm10: [16, 17, 13, 10, 9, 9, 11, 14, 20, 14, 15, 16, 15, 15,16],
                co: [22, 22, 19, 15, 15, 15, 21, 34, 30, 26, 35, 44, 36, 27,23],
            
            }
        }
    }
  },
}
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