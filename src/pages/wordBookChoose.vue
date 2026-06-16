<template>
    <div>
        <wordBookSearch/>
        <wordBookList/>
    </div>
</template>

<script>
import wordBookSearch from "../components/wordBookSearch.vue"
import wordBookList from "../components/wordBookList.vue"
export default {
    name:"wordBookChoose",
    components:{wordBookSearch,wordBookList},
}
</script>

<style>

</style>