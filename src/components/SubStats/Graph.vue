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
        <div class="graph w-12/12 hidden">
           
        </div>
        <div class="graph-fake w-12/12 ">
           <img src="../../assets/fake_graph.svg" alt="">
        </div>
    </section>
</template>

<script>
import * as d3 from "d3"

export default{
    poData:[10,20,30,25],
    mounted:function () {

        let container = document.querySelector('#graph .graph')
        
        let graph = d3.select('#graph .graph')
            .append('svg')
            .attr("width", '100%')
            .attr("height", '100%')
            .attr('viewBox','0 0 '+Math.min(container.offsetWidth,container.offsetHeight)+' '+Math.min(container.offsetWidth, container.offsetHeight))
            .attr('preserveAspectRatio','xMinYMin')

        var xscale = d3.scaleLinear()
            .domain([0, 30])
            .range([0, container.offsetWidth - 100]);
        // let startDate = new Date('01/01/2020')
        // let endDate = new Date ('01/03/2021')
        // var xscale = d3.scaleTime()
        //     .domain([startDate.getMonth(), endDate.getMonth()] )
        //     .range([startDate.getMonth(), endDate.getMonth()])
        //     // .nice()z

        var yscale = d3.scaleLinear()
                .domain([0, 300])
                .range([container.offsetHeight-30, 0]);

        var x_axis = d3.axisBottom()
                .scale(xscale);
                // .tickFormat(function(d){
                //     var seconds = d; 
                // var final_seconds = seconds % 60;
                // var minutes = (seconds - final_seconds) / 60;
                // var tick_text = minutes.toString() + ":" + ("0" + final_seconds).slice(-2);
                //     return tick_text;
                // });

        var y_axis = d3.axisLeft()
                .scale(yscale);

            graph.append("g")
            .attr("transform", "translate(50, 10)")
            .call(y_axis);

        var xAxisTranslate = container.offsetHeight-30 + 10;

        graph.append("g")
        .attr("transform", "translate(50, " + xAxisTranslate  +")")
        .call(x_axis)
        // graph.append("rect")
        //     .attr("x",20)
        //     .attr("y",20)
        //     .attr("width", '100%')
            // .attr("height", '100%')

        
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
    margin-top: 4.5rem;
    height: 492px;
}

section#graph .graph svg{
    width: 100%;
    height: 100%;
}
section#graph .graph-fake img{
    margin: auto;
    height: 100%;
}

</style>