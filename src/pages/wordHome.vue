<template>
    <div>
        <h1>今日学习</h1>
        <t-space :size="100">
        <t-statistic title="今日目标" :value="82.76" unit="%" trend="increase" />
        <t-statistic title="已记住" :value="82.76" unit="%" trend="increase" />
        <t-statistic title="未记住" :value="82.76" unit="USD" trend="increase" />
        </t-space>
        <br />
        <t-space :size="100">
        <t-button theme="default" variant="base" @click="beginStudy">开始学习</t-button>
        <t-button theme="default" variant="base">修改目标</t-button>
        </t-space>
    </div>
</template>

<script>
export default {
    name: 'wordHome',
    methods:{
        beginStudy(){
            this.$router.push(
                {path:"/wordmemory"}
            )
        }
    }
}
</script>

<style>

</style>