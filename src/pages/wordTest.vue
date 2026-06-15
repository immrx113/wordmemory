<template>
    <div>
        <wordBookCard/>
        <wordTestSet/>
        <wordTestHistory/>
    </div>
</template>

<script>
import wordBookCard from '../components/wordBookCard.vue'
import wordTestSet from "../components/wordTestSet.vue"
import wordTestHistory from "../components/wordTestHistory.vue"
export default {
    name:"wordBookTest",
    components:{
        wordBookCard,
        wordTestSet,
        wordTestHistory,
    }
}
</script>

<style>

</style>