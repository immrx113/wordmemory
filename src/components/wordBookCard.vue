<template>
  <div class="bookCard">
    <!-- title是卡片标题，后期data配置
        infoMessage是卡片内容，后期data配置
        clickHandler是操作按钮的点击事件，后期methods配置
        style固定卡片大小
      -->
    <t-card :title="title" :bordered="false" hover-shadow :style="{ width: '400px' }">
      {{ infoMessage }}
      <div style="width:200px">
          <t-progress :percentage="50" />
        </div>
      <!--
         #actions 具名插槽的简写形式
         style固定样式
         href="javascript:void(0)" 阻止默认跳转行为
         @click="clickHandler" 绑定点击事件，后期methods配置
       -->
      <template #actions>
        <a href="javascript:void(0)" @click="clickHandler" style="line-height: 24px">操作</a>
      </template>
    </t-card>
  </div>
</template>

<script>
export default {
        name: 'wordBookCard',
        data() {
            return {
            title: '单词书',
            infoMessage: '这是一个单词书',
            }
        },
    methods: {
        
        clickHandler() {
            // 处理按钮点击事件
        }
    }
}
</script>

<style scoped>
    .bookCard {
        padding: 16px;
        background-color: var(--td-bg-color-container-hover);
    }
</style>