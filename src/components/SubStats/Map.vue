<template>
    <section id="map" class="flex shadoer">
        <div class="map-info w-4/12 mr-6">
            <h2>Cartes des différentes villes françaises et de leur taux de pollution en période couvre feu</h2>

            <!-- <input class="mt-4 mb-12 text-black-300" type="week" min="2020-01w"> -->

            <div class="info-line flex flex-col text-black-300">
                <span class="title text-lg mb-4">Polluants :</span>
                <ul class="flex flex-col">
                    <li class="mini-card w-max mb-4">
                        <span class="mini-card-color bg-purple-200  "></span>
                        <span class="mini-card-title">Monox. Azote</span>
                    </li>
                    <li class="mini-card w-max mb-4">
                        <span class="mini-card-color bg-green-200  "></span>
                        <span class="mini-card-title">PM - 25</span>
                    </li>
                    <li class="mini-card w-max">
                        <span class="mini-card-color bg-orange  "></span>
                        <span class="mini-card-title">PM - 10</span>
                    </li>
                </ul>
            </div>

        </div>
        <div class="map flex-1 min-h-full">
            <LMap :zoom="zoom" :center="center">
                <LTileLayer :url="url"></LTileLayer>
                <!-- <LMarker :lat-lng="[13.1333682,77.5651881]"></LMarker> -->
                <LMarker :lat-lng="[47.068569, 2.365135]" >
                    <LIcon :icon-anchor="staticAnchor" style="width:30px; height:30px">
                    <div class="headline">{{customText}}</div>
                    </LIcon>
                </LMarker>
            </LMap>
        </div>

    </section>
</template>

<script>
import "leaflet/dist/leaflet.css"
import { LMap, LTileLayer, LMarker, LIcon} from "@vue-leaflet/vue-leaflet";

export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data() {
    return {
      url: "https://{s}.tile.osm.org/{z}/{x}/{y}.png",
      zoom: 6,
      center: [47.068569,2.365135],
      bounds: null,
    //   icon: icon({
    //     iconUrl: "../assets/message-square.png",
    //     iconSize: [32, 37],
    //     iconAnchor: [16, 37]
    //   }),
      staticAnchor: [16, 37],
      customText: "Foobar",
      iconSize: 64
    };
  }
};

</script>

<style scoped>
#map{
    @apply border-purple-100 rounded-2xl border-2 p-8 ;
    margin-bottom: 9.125rem;
}
.map{
    background-color: red;
    border-radius: 8px;
    height: 550px;
}
</style>