<template>
   <div class="tdesign-demo-item--layout">
    <t-layout>
      <t-aside>
        <siderBar />
      </t-aside>
      <t-layout>
        <t-content>
          <div>
            <router-view></router-view>
          </div>
        </t-content>
        <t-footer>Copyright @ 2019-{{ new Date().getFullYear() }} Tencent. All Rights Reserved</t-footer>
      </t-layout>
    </t-layout>
  </div>
</template>

<script>
import siderBar from './components/siderBar.vue';
export default {
  name: 'App',
  components: {
    siderBar,
  }
}
</script>

<style>
  a {
    text-decoration: none;
  }
</style>
