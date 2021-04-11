<template>
    <div class="cityStat shadoer {{category}}">
        <h2 class="w-10/12 mb-4">{{title}} {{city}}</h2>
        <div class="info-line flex items-center mb-4">
            <span class="title mr-4">Périodes :</span>
            <ul class="flex">
                <li class="mini-card">
                    <span class="mini-card-color bg-purple-100  "></span>
                    <span class="mini-card-title">Actuellement</span>
                </li>
                <li class="mini-card">
                    <span class="mini-card-color rayure"></span>
                    <span class="mini-card-title">Début 2020</span>
                </li>
            </ul>
        </div>
        <div class="bar-charts">
            <div class="barchart no">
                <div class="chart">
                    <div class="bar before rayure-no" style="height: 30%;" title="plop"></div>
                    <div class="bar now" style="height: 20%;" title="pas plop"></div>
                </div>
                <h3>Monox. Azote</h3>
            </div>
            <div class="barchart pm25 ">
                <div class="chart">
                    <div class="bar before rayure-pm25" style="height: 100%;" title="plop"></div>
                    <div class="bar now" style="height: 20%;" title="pas plop"></div>
                </div>
                <h3>PM - 2,5</h3>
            </div>
            <div class="barchart pm10 ">
                <div class="chart">
                    <div class="bar before rayure-pm10" style="height: 100%;" title="plop"></div>
                    <div class="bar now" style="height: 20%;" title="pas plop"></div>
                </div>
                <h3>PM - 10</h3>
            </div>
        </div>
    </div>
</template>

<script>

export default{
    city: "",
    title:"",
    props: {
        category: {
            type: String,
            required: true,
  	    },
        city: {
            type: String,
            required: true,
  	    },
        title: {
            type: String,
            required: true,
  	    },
    },
    mounted: function(){


        // let chart_pm10 = document.querySelector(`.barchart.pm10`)
        // let chart_pm25 = document.querySelector(`.barchart.pm25`)
        // let chart_no = document.querySelector(`.barchart.no`)
        // console.log(chart_pm10)
    }
}
</script>

<style scoped>
.cityStat{
    @apply border-purple-100 rounded-2xl border-2 p-8;
}
.bar-charts{
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.bar-charts .barchart{
    width: 20%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;

}
.bar-charts .barchart h3{
    margin-top: 24px;
    text-align: center;
}
.bar-charts .barchart .chart{
    flex:1;
    display: flex;
    align-items: flex-end;
}

.bar-charts .barchart .chart .bar{
    display: inline-block;
    width: 50%;
    
    overflow: hidden;

    border-radius: 6px 6px 0 0;

    /* transform-origin: 0 100%; */
}
.bar-charts .barchart .chart .bar.before{
    /* background-color: red; */
    /* background-position: center; */
    background-repeat: no-repeat;
    background-size: cover;
}
.bar-charts .barchart .chart .bar.now{
    background-color: green;

}

.rayure-pm10{
    background-image: url('../../assets/bgc-pm-10.svg');
}
.rayure-pm25{
    background-image: url('../../assets/bgc-pm-25.svg');
}
.rayure-no{
    background-image: url('../../assets/bgc-no.svg');
}
</style>