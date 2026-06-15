<template>
   <t-input placeholder="Search Input">
      <template #suffixIcon>
        <search-icon :style="{ cursor: 'pointer' }" />
      </template>
    </t-input>
</template>

<script>
export default {
    name:"wordBookSearch"
}
</script>

<style>

</style>