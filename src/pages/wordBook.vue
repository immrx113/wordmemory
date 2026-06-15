<template>
    <div>
        <wordBookCard />
        <wordBookWordList />
    </div>
</template>

<script>
import WordBookCard from '../components/wordBookCard.vue';
import WordBookWordList from '../components/wordBookWordList.vue';
export default {
    name: 'wordBook',
    components: {
        WordBookCard,
        WordBookWordList,
    }

}
</script>

<style scoped>

</style>