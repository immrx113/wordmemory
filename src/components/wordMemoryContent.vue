<template>
  <t-card :title="title" hover-shadow :style="{ width: '400px' }">
    {{ infoMessage }}
  </t-card>
</template>
<script>

export default {
    name:"wordMemoryContent",
    data() {
        return {
      title: '标题',
      infoMessage: '卡片内容，以描述性为主，可以是文字、图片或图文组合的形式。按业务需求进行自定义组合。',
        };
    },

};
</script>