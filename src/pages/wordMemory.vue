<template>
  <div class="wordmemory">
    <t-layout>
        <t-space direction="vertical" size="large">
            <wordMemoryHeader/>
            <wordMemoryContent/>
            <wordMemoryFooter/>
        </t-space>
    </t-layout>
  </div>
</template>

<script>
import wordMemoryHeader from "../components/wordMemoryHeader.vue"
import wordMemoryContent from "../components/wordMemoryContent.vue"
import wordMemoryFooter from "../components/wordMemoryFooter.vue"
export default {
    name:"wordMemory",
    components:{
        wordMemoryHeader,
        wordMemoryContent,
        wordMemoryFooter,
    }
}
</script>

<style scoped>
    /*调整位置 */
</style>