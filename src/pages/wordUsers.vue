<template>
  <div class="profile">

    <t-card class="card" title="个人信息">

      <!-- 用户名 -->
      <div class="item">
         账户名：
        <span class="name">{{ username }}</span>
      </div>

      <!-- 退出登录 -->
      <t-button theme="danger" block @click="logout">
        退出登录
      </t-button>

    </t-card>

  </div>
</template>

<script>
export default {
  name: "wordUsers",

  computed: {
    username() {
      return localStorage.getItem("username") || "aaa";
    }
  },

  methods: {

    logout() {

      //  清除登录信息
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("username");


      //  跳转登录页
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
.profile {
  display: flex;
  justify-content: center;
  margin-top: 80px;
}

.card {
  width: 400px;
  text-align: center;
}

.item {
  font-size: 18px;
  margin-bottom: 20px;
}

.name {
  font-weight: bold;
  color: #2d8cf0;
}
</style>