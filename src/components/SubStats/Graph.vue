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
                            <span class="mini-card-title">Monox. Azote</span>
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
                        <li class="mini-card">
                            <span class="mini-card-color rayure" ></span>
                            <span class="mini-card-title">Couvre feu</span>
                        </li>
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
    mounted:function () {
        var ctx = document.getElementById('myChart');
        var myChart = new Chart(ctx, {
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
                    label: 'NO µm',
                    data: [12, 19, 3, 5, 2, 3,1,8,9,10,11,12,12,15,18],
                    backgroundColor: [
                        '#A28AF0',
                    ],
                    borderColor: [
                        '#A28AF0',
                    ],
                    borderWidth: 2,
                    tension:0.3
                },
                {
                    label: ' PM-10 µm',
                    data: [20, 5, 8, 5, 2, 3,8,8,5,10,14,1,3,15,5],
                    backgroundColor: [
                        '#FDC096',
                    ],
                    borderColor: [
                        '#FDC096',
                    ],
                    borderWidth: 2,
                    tension:0.3
                },
                {
                    label: ' PM-2.5 µm',
                    data: [4, 7, 5, 8, 2, 1,0,0.5,8,10,11,5,12,15,2],
                    backgroundColor: [
                        '#72DCB9',
                    ],
                    borderColor: [
                        '#72DCB9',
                    ],
                    borderWidth: 2,
                    tension:0.3
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
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