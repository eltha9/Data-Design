<template>
    <section id="graph" class="w-12/12 p-8 border-purple-100 rounded-2xl border-2 shadoer">
        <div class="graph-info flex justify-between">
            <h2 class="w-4/12 ">Evolution des pollutants dans l’air en France depuis le COVID-19 </h2>
            <div class="text-right"> 
                <div class="info-line flex mb-4">
                    <span class="title">Polluants :</span>
                    <ul class="flex">
                        <li class="mini-card">
                            <span class="mini-card-color bg-purple-200  "></span>
                            <span class="mini-card-title">CO</span>
                        </li>
                        <li class="mini-card">
                            <span class="mini-card-color bg-green-200  "></span>
                            <span class="mini-card-title">PM - 25</span>
                        </li>
                        <li class="mini-card">
                            <span class="mini-card-color bg-orange  "></span>
                            <span class="mini-card-title">PM - 10</span>
                        </li>
                    </ul>
                </div>
                <div class="info-line flex ">
                    <span class="title">Périodes : </span>
                    <ul class="flex">
                        <li class="mini-card">
                            <span class="mini-card-color bg-purple-100  "></span>
                            <span class="mini-card-title">Confinement</span>
                        </li>
                        <!-- <li class="mini-card">
                            <span class="mini-card-color rayure" ></span>
                            <span class="mini-card-title">Couvre feu</span>
                        </li> -->
                    </ul>
                </div>
                
            </div>
        </div>
        <div class="graph w-12/12 ">
           <canvas id="myChart" style="width: 100%;height: 100%;"></canvas>
        </div>
        <div class="graph-fake w-12/12 hidden">
           <img src="../../assets/fake_graph.svg" alt="">
        </div>
    </section>
</template>

<script>
import Chart from 'chart.js/auto'

export default{
    values: null, 
    props: {
        values: {
            type: Object,
            required: true,
  	    },
    },
    mounted:function () {
        var ctx = document.getElementById('myChart');
        var myChart = new Chart(ctx, 
        {
            type: 'line',
            data: {
                labels: [
                    '01/2020',
                    '02/2020',
                    '03/2020',
                    '04/2020',
                    '05/2020',
                    '06/2020',
                    '07/2020',
                    '08/2020',
                    '09/2020',
                    '10/2020',
                    '11/2020',
                    '12/2020',
                    '01/2021',
                    '02/2021',
                    '03/2021',
                ],
                datasets: [{
                        label: 'CO mg-m3',
                        data: this.values.co,
                        backgroundColor: [
                            '#A28AF0',
                        ],
                        borderColor: [
                            '#A28AF0',
                        ],
                        borderWidth: 2,
                        tension:0.2
                    },
                    {
                        label: ' PM-10 µg-m3',
                        data: this.values.pm10,
                        backgroundColor: [
                            '#FDC096',
                        ],
                        borderColor: [
                            '#FDC096',
                        ],
                        borderWidth: 2,
                        tension:0.2
                    },
                    {
                        label: ' PM-2.5 µg-m3',
                        data: this.values.pm25,
                        backgroundColor: [
                            '#72DCB9',
                        ],
                        borderColor: [
                            '#72DCB9',
                        ],
                        borderWidth: 2,
                        tension:0.2
                    },
                    {
                        label: 'Confinement',
                        fill:true,
                        data: [,, 45, 45, 45, ,,,,,45,45,,,],
                        backgroundColor: [
                            'rgba(212,210,235,0.5)',
                        ],
                        borderColor: [
                            'rgba(212,210,235,0.5)',
                        ],
                        borderWidth: 2,
                        tension:0.2
                    },
            ]   
            },
            options: {
                legend: {
                    display:false
                },
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
            }
        });
    },
    
}
</script>

<style scoped>
#graph{
    margin-bottom: 4.5rem;
}
.info-line{
    @apply text-black-300 text-lg flex items-center justify-end;
}
.info-line .title{
    /* font-size: 1.125rem; */
    margin-right: 1.5rem;
}

.graph, .graph-fake{
    position: relative;
    margin-top: 4.5rem;
    height: 492px;
}

section#graph .graph svg, section#graph .graph canvas{
    width: 100%;
    height: 100%;
}
section#graph .graph-fake img{
    margin: auto;
    height: 100%;
}

</style>