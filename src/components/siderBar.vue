<template>
    <t-menu theme="light" style="margin-right: 50px" height="550px">
          <img
            slot="logo"
            width="136"
            class="t-menu__logo--center"
            src="https://www.tencent.com/img/index/menu_logo_hover.png"
            alt="logo"
          />
        <t-menu-item value="/home" to="/main/home"> <home-icon :fill-color='"transparent"' :stroke-color='"currentColor"' :stroke-width="2"/>首页 </t-menu-item>
        <t-menu-item value="/book" to="/main/book"> <book-icon :fill-color='"transparent"' :stroke-color='"currentColor"' :stroke-width="2"/>词书 </t-menu-item>
        <t-menu-item value="root" to="/main/test"> <icon slot="icon" name="root-list" />测试 </t-menu-item>
        <t-menu-item value="user-circle" to="/main/users"> <icon slot="icon" name="user-circle" />个人中心 </t-menu-item>
    </t-menu>
</template>


<script>
import { Icon, BookIcon, HomeIcon } from 'tdesign-icons-vue';
export default {
    name: 'siderBar',
    components: {
        Icon,
        BookIcon,
        HomeIcon,
    }
}
</script>

<style>

</style>