<template>
    <div>
        <wordMemoryContent/>
        <wordMemoryOptionList/>
    </div>
</template>

<script>
import wordMemoryContent from "../components/wordMemoryContent.vue"
import wordMemoryOptionList from "../components/wordMemoryOptionList.vue"
export default {
    name:"wordTestIng",
    components:{
        wordMemoryContent,
        wordMemoryOptionList,
    }
}
</script>

<style>

</style>