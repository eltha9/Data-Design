<template>
    <div class="cityStat shadoer {{category}}">
        <h2 class="w-10/12 mb-4">{{title}} {{city}}</h2>
        <div class="info-line flex items-center mb-8 text-black-300">
            <span class="title mr-4 text-lg">Périodes :</span>
            <ul class="flex ">
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
                    <div class="bar before rayure-no" :style="{height: values.values.co[1]/4+'%',}" :title="values.values.co[1] + ' mm-m3'"></div>
                    <div class="bar now bg-purple-200" :style="{height: values.values.co[0]/4+'%',}" :title="values.values.co[0] + ' mm-m3'"></div>
                </div>
                <h3>CO</h3>
            </div>
            <div class="barchart pm25 ">
                <div class="chart">
                    <div class="bar before rayure-pm25" :style="{height: values.values.pm25[1]*2+'%',}" :title="values.values.pm25[1] + ' µm-m3'"></div>
                    <div class="bar now bg-orange" :style="{height: values.values.pm25[0]*2+'%',}" :title="values.values.pm25[0] + ' µm-m3'"></div>
                </div>
                <h3>PM - 2,5</h3>
            </div>
            <div class="barchart pm10 ">
                <div class="chart">
                    <div class="bar before rayure-pm10" :style="{height: values.values.pm10[1]*2+'%',}" :title="values.values.pm10[1] + ' µm-m3'"></div>
                    <div class="bar now bg-green-200" :style="{height: values.values.pm10[0]*2+'%',}" :title="values.values.pm10[0] + ' µm-m3'"></div>
                </div>
                <h3>PM - 10 </h3>
            </div>
        </div>
    </div>
</template>

<script>

export default{
    city: "",
    title:"",
    values: null, 
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
        values: {
            type: Object,
            required: true,
  	    },
    },
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
    @apply text-black-300 text-base;
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