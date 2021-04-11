<template>
    <section id="map" class="flex shadoer">
        <div class="map-info w-4/12 mr-6">
            <h2>Cartes des différentes villes françaises et de leur taux de pollution en période couvre feu</h2>

            <input class="mt-4 mb-12 text-black-300" type="week" min="2020-01w">

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

        </div>

    </section>
</template>

<script setup>

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