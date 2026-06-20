<template>
  <div class="loginContent">
    <t-space style="width: 350px" direction="vertical">
      <h2 class="login-title">欢迎使用</h2>
      <t-divider class="tip">账号密码登录</t-divider>
      <!--后期优化可以添加rule表单验证-->
      <t-form :data="formData" ref="form"  @submit="onSubmit" :colon="true" :labelWidth="0">
        <t-form-item name="account">
          <t-input clearable v-model="formData.account" placeholder="请输入账户名">
            <desktop-icon slot="prefix-icon"></desktop-icon>
          </t-input>
        </t-form-item>
        <t-form-item name="password">
          <t-input type="password" clearable v-model="formData.password" placeholder="请输入密码">
            <lock-on-icon slot="prefix-icon"></lock-on-icon>
          </t-input>
        </t-form-item>
        <t-form-item>
          <t-button theme="primary" type="submit" block v-loading="loadingLogin" class="loginbutton">登录</t-button>
        </t-form-item>
        <t-form-item>
          <t-button theme="primary"  block @click="register">注册</t-button>
        </t-form-item>
      </t-form>
    </t-space>
  </div>
</template>
<script>
import { DesktopIcon, LockOnIcon } from 'tdesign-icons-vue';
import {login} from "../api/logIn"

const INITIAL_DATA = {
  account: '',
  password: '',
};

export default {
  components: {
    DesktopIcon,
    LockOnIcon,
  },
  data() {
    return {
      loadingLogin:false,
      formData: { ...INITIAL_DATA },
    };
  },
  name:"logIn",
  methods: {
    onSubmit({ validateResult, firstError }) {
      this.loadingLogin=true
      if (validateResult === true) {
        login(this.formData.account,this.formData.password)
        .then(res=>{
          //通过res.data可以取用户信息
          console.log(res)
          //登录成功信息
          this.$message.success('登录成功');
          //const timer = setTimeout(() => {
          //this.loadingLogin=false
          //clearTimeout(timer);
          //}, 1000);
          //跳转
          this.$router.push({path:"/main/home"})
          //存储token和用户信息
          localStorage.setItem('token', res.data);
          //localStorage.setItem('userId', res.data.userId);
        })
        //报错的话要给出错误信息，引用组件
        .catch(err=>{
          console.log(err)
          //给出错误信息
          //apifox在400用户名错误下的msg给出的有问题
          this.$message.warning(err.response.data.msg)
        })
        .finally(()=>{
          this.loadingLogin=false
        })
      } else {
        this.loadingLogin=false
        console.log('Errors: ', validateResult);
        this.$message.warning(firstError);
      }
    },
    register(){
      this.$router.push({path:"/register"})
    }
  },
};
</script>
<style scoped>
  .loginContent{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
  }
  .login-title {
  text-align: center;
  width: 100%;
  margin-bottom: 24px;
  font-size: 50px;
  font-weight: 600;
  color: #333;
}
.tip{
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  color:gray
}
.loginbuttton{
  position: relative;
}
</style>