<template>
    <t-list :split="true">
        <t-list-item>
          <t-list-item-meta title="看中文选英文{{}}">
          </t-list-item-meta>
          <template #action>
                <t-link theme="primary" hover="color" style="margin-left: 16px"> 操作1 </t-link>
            </template>
        </t-list-item>
        <t-list-item>
          <t-list-item-meta title="看英文选中文" description="数量"></t-list-item-meta>
        </t-list-item>
        <t-list-item>
          <t-list-item-meta title="测试时间" description="时间"></t-list-item-meta>
        </t-list-item>
  </t-list>
</template>

<script>
export default {
    name:"wordTestSet",
}
</script>

<style>

</style>