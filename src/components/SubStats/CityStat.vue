<template>
    <div class="cityStat shadoer">
        <h2 class="w-10/12 mb-4">{{title}} {{city}}</h2>

    </div>
</template>

<script>

export default{
    city: "",
    title:"",
    props: {
        city: {
            type: String,
            required: true,
  	    },
        title: {
            type: String,
            required: true,
  	    },
    }
}
</script>

<style scoped>
.cityStat{
    @apply border-purple-100 rounded-2xl border-2 p-8;
}
</style>